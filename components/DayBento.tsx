import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export function DayBento() {
  return (
    <section id="day" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
            A station that knows your day.
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-text-2 leading-relaxed">
            Not a feed of everything. Your feeds, your forecast, your calendar,
            your obsessions, read out loud between your songs.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {/* news: spans 2, warm tint */}
          <Reveal className="md:col-span-2">
            <div
              className="glass h-full p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,107,53,0.10), rgba(22,27,42,0.78) 55%)",
              }}
            >
              <h3 className="font-semibold text-lg">News in your order</h3>
              <p className="mt-2 text-sm text-text-2 max-w-[52ch]">
                Up to 10 feeds: RSS or Google News searches, dragged into
                priority. The top feed leads every show. Stories already covered
                stay covered for 3 days.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3 text-sm">
                <div className="rounded-[10px] border border-white/8 bg-white/4 px-3 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-3">1st</span>
                  <p className="mt-0.5">BBC World</p>
                </div>
                <div className="rounded-[10px] border border-white/8 bg-white/4 px-3 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-3">2nd</span>
                  <p className="mt-0.5 flex items-center gap-2">
                    Hacker News
                    <span className="inline-flex items-center gap-1 rounded-full bg-live/15 px-1.5 py-0.5 text-[10px] font-medium text-live">
                      <Check size={10} weight="bold" /> covered
                    </span>
                  </p>
                </div>
                <div className="rounded-[10px] border border-white/8 bg-white/4 px-3 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-3">3rd</span>
                  <p className="mt-0.5">ERR</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* weather: cool tint */}
          <Reveal delay={0.06}>
            <div
              className="glass h-full p-6"
              style={{
                background:
                  "linear-gradient(160deg, rgba(74,158,255,0.12), rgba(22,27,42,0.78) 60%)",
              }}
            >
              <h3 className="font-semibold text-lg">Weather, spoken</h3>
              <p className="mt-3 text-4xl font-bold tracking-tight">
                18&deg;
                <span className="ml-2 text-base font-normal text-text-2">clear evening</span>
              </p>
              <p className="mt-3 text-sm text-text-2">
                Your host closes every news block with tomorrow&rsquo;s forecast
                for your exact city.
              </p>
            </div>
          </Reveal>

          {/* calendar */}
          <Reveal delay={0.06}>
            <div className="glass h-full p-6">
              <h3 className="font-semibold text-lg">Your calendar, on air</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between rounded-[10px] border border-white/8 bg-white/4 px-3 py-2">
                  <span>Standup</span>
                  <span className="font-mono text-text-3">9:00</span>
                </div>
                <div className="flex justify-between rounded-[10px] border border-white/8 bg-white/4 px-3 py-2">
                  <span>Dentist</span>
                  <span className="font-mono text-text-3">14:30</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-text-2">
                Google Calendar, read-only. Hosts mention what&rsquo;s next in
                your 48 hours.
              </p>
            </div>
          </Reveal>

          {/* interests */}
          <Reveal delay={0.1}>
            <div className="glass h-full p-6">
              <h3 className="font-semibold text-lg">Interests become mini-classes</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["ancient Rome", "quantum physics", "jazz history"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-text-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-text-2">
                Hosts pick one and teach it between songs. News is what
                happened; this is what you want to understand.
              </p>
            </div>
          </Reveal>

          {/* radio vibe */}
          <Reveal delay={0.12}>
            <div className="glass h-full p-6">
              <h3 className="font-semibold text-lg">Pick the room&rsquo;s energy</h3>
              <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/4 p-1 text-sm">
                <span
                  className="rounded-full px-4 py-1.5 font-medium text-[#14060a]"
                  style={{ background: "linear-gradient(135deg, var(--accent), #ff8a5a)" }}
                >
                  Pop
                </span>
                <span className="px-4 py-1.5 text-text-2">Calm</span>
              </div>
              <p className="mt-4 text-sm text-text-2">
                Radio vibe swaps the jingles and news stings: upbeat station
                energy or a softer late-night feel.
              </p>
            </div>
          </Reveal>

          {/* music + lock screen image cell */}
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="glass h-full overflow-hidden p-0">
              <div className="grid sm:grid-cols-[1fr_auto] items-center">
                <div className="p-6">
                  <h3 className="font-semibold text-lg">Your music, three ways</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Free radio: Audius + Jamendo", "YouTube Music", "Local files"].map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-text-2"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-text-2 max-w-[46ch]">
                    Bring your own library or press play with no account at
                    all. Keeps playing on your lock screen, cover art included.
                  </p>
                </div>
                <Image
                  src="/radious-icon.png"
                  alt="Radious cover art on a lock screen player"
                  width={220}
                  height={220}
                  className="hidden sm:block h-full w-[220px] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
