#!/bin/bash
#
# Rebuild public/demo/sample-show.mp3 — the clip the hero's play button plays.
#
# WHAT IT IS: one real edition of the free station, cut the way the app plays
# it — the news jingle, the world-news bulletin read by the station's two
# hosts over the news bed, the station sting, then five seconds of a song
# from the Radious top 50.
#
# WHAT YOU NEED FIRST:
#   1. The read. In radious-cron: `bun run preview:free-radio` writes one MP3
#      per line from the live pipeline. Drop the lines you do not want in a
#      marketing clip (the last build left out a shooting) and name what is
#      left v-1.mp3 … v-N.mp3 in --in.
#   2. The jingles: radious-api/public/assets/promos (News1, NewsBG1, Promo1).
#   3. The music: five seconds of a track whose licence actually allows it.
#      On the production top 50 that is one track in fifty — the rest are
#      "all rights reserved" or declare nothing, and many are remixes of
#      major-label records. Save it as song-src.mp3 in --in, and put the
#      credit in MUSIC_CREDIT in src/components/DemoPlayer.tsx.
#
# LEVELS — the reason this is a script and not a paragraph. Out of the
# pipeline the four parts are nowhere near each other: the read lands around
# -28 LUFS against the song's -15, so a listener turns it up for the news and
# is hit by the music. Every part is normalised to -16 LUFS (EBU R128, the
# podcast/web convention) with a true peak of -1.5 dBTP, and the music to
# -16.5 because a dense mix reads louder than speech at the same loudness.
# Normalising happens in MONO, the format that ships: doing it in stereo and
# downmixing afterwards costs 3-4 dB and lands the file under target.
#
# Speech and the jingle need more than gain alone can give without clipping,
# so those two go through R128's two-pass normaliser. The promo and the music
# are a plain gain — the song in particular is left otherwise untouched,
# which is also the most its CC BY-ND licence would want.
#
# Usage: scripts/build-sample-show.sh --in <dir with v-*.mp3 and song-src.mp3> \
#                                     --promos <radious-api/public/assets/promos>
set -euo pipefail

IN=""; PROMOS=""
while [ $# -gt 0 ]; do
  case "$1" in
    --in) IN="$2"; shift 2 ;;
    --promos) PROMOS="$2"; shift 2 ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done
[ -n "$IN" ] && [ -n "$PROMOS" ] || { echo "usage: $0 --in <dir> --promos <dir>" >&2; exit 2; }

HERE="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$HERE/public/demo/sample-show.mp3"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

GAP=0.3          # a beat between lines, as the player leaves between them
BED=0.10         # the news bed, under the read
SPEECH=-16; STING=-16; MUSIC=-16.5
TP=-1.5

lufs()  { ffmpeg -nostats -i "$1" -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | awk '{print $2}'; }
peak()  { ffmpeg -nostats -i "$1" -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+Peak:" | tail -1 | awk '{print $2}'; }

# Plain gain to `target`, never past the true-peak ceiling.
gain_to() {
  local src="$1" out="$2" target="$3"
  local g
  g=$(python3 -c "print(min($target - ($(lufs "$src")), $TP - ($(peak "$src"))))")
  echo "  $(basename "$src") -> ${g} dB"
  ffmpeg -v error -y -i "$src" -af "volume=${g}dB" -ar 44100 "$out"
}

# R128 two-pass, for the parts that cannot get there on gain alone.
r128_to() {
  local src="$1" out="$2" target="$3" json
  json=$(ffmpeg -nostats -i "$src" -af "loudnorm=I=$target:TP=$TP:LRA=11:print_format=json" -f null - 2>&1 | sed -n '/^{/,/^}/p')
  local args
  args=$(python3 -c "
import json
d = json.loads('''$json''')
print(f\"measured_I={d['input_i']}:measured_TP={d['input_tp']}:measured_LRA={d['input_lra']}:measured_thresh={d['input_thresh']}:offset={d['target_offset']}\")")
  echo "  $(basename "$src") -> $target LUFS (two-pass)"
  ffmpeg -v error -y -i "$src" -af "loudnorm=I=$target:TP=$TP:LRA=11:$args:linear=true" -ar 44100 "$out"
}

# 1. the read
lines=("$IN"/v-*.mp3)
[ ${#lines[@]} -gt 0 ] || { echo "no v-*.mp3 in $IN" >&2; exit 1; }
args=(); filter=""; n=0
for f in "${lines[@]}"; do
  args+=(-i "$f")
  if [ $n -gt 0 ]; then
    filter+="aevalsrc=0:d=$GAP:s=44100:c=stereo[g$n];"
  fi
  n=$((n + 1))
done
chain=""; g=1
for i in $(seq 0 $((n - 1))); do
  [ $i -gt 0 ] && { chain+="[g$g]"; g=$((g + 1)); }
  chain+="[$i:a]"
done
ffmpeg -y -v error "${args[@]}" -filter_complex "${filter}${chain}concat=n=$((n * 2 - 1)):v=0:a=1[talk]" \
  -map "[talk]" -ar 44100 -ac 2 "$WORK/talk.wav"
TALK=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$WORK/talk.wav")

# 2. the bed under it
ffmpeg -y -v error -i "$WORK/talk.wav" -i "$PROMOS/NewsBG1.mp3" -filter_complex \
  "[1:a]atrim=0:$TALK,volume=$BED,afade=t=in:st=0:d=1.5,afade=t=out:st=$(python3 -c "print($TALK-2)"):d=2[bed];\
   [0:a][bed]amix=inputs=2:duration=first:dropout_transition=0:normalize=0[news]" \
  -map "[news]" -ar 44100 -ac 1 "$WORK/news.wav"

# 3. five seconds of the song, fading only at the very end so the clip does
#    not stop mid-bar. Nothing else is done to it.
ffmpeg -y -v error -i "$IN/song-src.mp3" -t 5 -af "afade=t=out:st=4.6:d=0.4" -ar 44100 -ac 1 "$WORK/music.wav"

ffmpeg -y -v error -i "$PROMOS/News1.mp3"  -ac 1 -ar 44100 "$WORK/jingle.wav"
ffmpeg -y -v error -i "$PROMOS/Promo1.mp3" -ac 1 -ar 44100 "$WORK/promo.wav"

# 4. one level for all four
echo "normalising:"
r128_to "$WORK/news.wav"   "$WORK/news-n.wav"   $SPEECH
r128_to "$WORK/jingle.wav" "$WORK/jingle-n.wav" $STING
gain_to "$WORK/promo.wav"  "$WORK/promo-n.wav"  $STING
gain_to "$WORK/music.wav"  "$WORK/music-n.wav"  $MUSIC

# 5. jingle + news + promo + music, mono 96 kbps
ffmpeg -y -v error -i "$WORK/jingle-n.wav" -i "$WORK/news-n.wav" -i "$WORK/promo-n.wav" -i "$WORK/music-n.wav" \
  -filter_complex "[0:a][1:a][2:a][3:a]concat=n=4:v=0:a=1[out]" \
  -map "[out]" -ac 1 -ar 44100 -b:a 96k -write_xing 1 "$OUT"

echo
echo "wrote $OUT"
ffmpeg -nostats -i "$OUT" -af ebur128=peak=true -f null - 2>&1 | grep -A2 "Integrated loudness" | head -2
