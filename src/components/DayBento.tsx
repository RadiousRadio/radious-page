import { For } from "solid-js";
import { Check } from "./icons";
import { Reveal } from "./Reveal";

export function DayBento() {
  return (
    <section id="day" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter">
            A station that knows your day.
          </h2>
          <p class="mt-4 max-w-[52ch] text-lg text-text-2 leading-relaxed">
            Not a feed of everything. Your feeds, your forecast, your calendar,
            your obsessions, read out loud between your songs.
          </p>
        </Reveal>

        <div class="mt-12 grid gap-4 md:grid-cols-3">
          {/* news: spans 2, warm tint */}
          <Reveal class="md:col-span-2">
            <div
              class="glass h-full p-6"
              style="background: linear-gradient(135deg, rgba(255,107,53,0.10), rgba(22,27,42,0.78) 55%);"
            >
              <h3 class="font-semibold text-lg">News in your order</h3>
              <p class="mt-2 text-sm text-text-2 max-w-[52ch]">
                Up to 10 feeds: RSS or Google News searches, dragged into
                priority. The top feed leads every show. Stories already covered
                stay covered for 3 days.
              </p>
              <div class="mt-5 grid gap-2 sm:grid-cols-3 text-sm">
                <div class="rounded-[10px] border border-white/8 bg-white/4 px-3 py-2.5">
                  <span class="font-mono text-[10px] uppercase tracking-wider text-text-3">1st</span>
                  <p class="mt-0.5">BBC World</p>
                </div>
                <div class="rounded-[10px] border border-white/8 bg-white/4 px-3 py-2.5">
                  <span class="font-mono text-[10px] uppercase tracking-wider text-text-3">2nd</span>
                  <p class="mt-0.5 flex items-center gap-2">
                    Hacker News
                    <span class="inline-flex items-center gap-1 rounded-full bg-live/15 px-1.5 py-0.5 text-[10px] font-medium text-live">
                      <Check size={10} /> covered
                    </span>
                  </p>
                </div>
                <div class="rounded-[10px] border border-white/8 bg-white/4 px-3 py-2.5">
                  <span class="font-mono text-[10px] uppercase tracking-wider text-text-3">3rd</span>
                  <p class="mt-0.5">ERR</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* weather: cool tint */}
          <Reveal delay={0.06}>
            <div
              class="glass h-full p-6"
              style="background: linear-gradient(160deg, rgba(74,158,255,0.12), rgba(22,27,42,0.78) 60%);"
            >
              <h3 class="font-semibold text-lg">Weather, spoken</h3>
              <p class="mt-3 text-4xl font-bold tracking-tight">
                18&deg;
                <span class="ml-2 text-base font-normal text-text-2">clear evening</span>
              </p>
              <p class="mt-3 text-sm text-text-2">
                Your host closes every news block with tomorrow&rsquo;s forecast
                for your exact city.
              </p>
            </div>
          </Reveal>

          {/* calendar */}
          <Reveal delay={0.06}>
            <div class="glass h-full p-6">
              <h3 class="font-semibold text-lg">Your calendar, on air</h3>
              <div class="mt-4 space-y-2 text-sm">
                <div class="flex justify-between rounded-[10px] border border-white/8 bg-white/4 px-3 py-2">
                  <span>Standup</span>
                  <span class="font-mono text-text-3">9:00</span>
                </div>
                <div class="flex justify-between rounded-[10px] border border-white/8 bg-white/4 px-3 py-2">
                  <span>Dentist</span>
                  <span class="font-mono text-text-3">14:30</span>
                </div>
              </div>
              <p class="mt-4 text-sm text-text-2">
                Google Calendar, read-only. Hosts mention what&rsquo;s next in
                your 48 hours.
              </p>
            </div>
          </Reveal>

          {/* interests */}
          <Reveal delay={0.1}>
            <div class="glass h-full p-6">
              <h3 class="font-semibold text-lg">Interests become mini-classes</h3>
              <div class="mt-4 flex flex-wrap gap-2">
                <For each={["ancient Rome", "quantum physics", "jazz history"]}>
                  {(t) => (
                    <span class="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-text-2">
                      {t}
                    </span>
                  )}
                </For>
              </div>
              <p class="mt-4 text-sm text-text-2">
                Hosts pick one and teach it between songs. News is what
                happened; this is what you want to understand.
              </p>
            </div>
          </Reveal>

          {/* radio vibe */}
          <Reveal delay={0.12}>
            <div class="glass h-full p-6">
              <h3 class="font-semibold text-lg">Pick the room&rsquo;s energy</h3>
              <div class="mt-4 inline-flex rounded-full border border-white/10 bg-white/4 p-1 text-sm">
                <span
                  class="rounded-full px-4 py-1.5 font-medium text-[#14060a]"
                  style="background: linear-gradient(135deg, var(--accent), #ff8a5a);"
                >
                  Pop
                </span>
                <span class="px-4 py-1.5 text-text-2">Calm</span>
              </div>
              <p class="mt-4 text-sm text-text-2">
                Radio vibe swaps the jingles and news stings: upbeat station
                energy or a softer late-night feel.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
