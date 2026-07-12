"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SkipBack, SkipForward, Pause, ChatCircleDots } from "@phosphor-icons/react";

const EQ_DELAYS = [0, 0.25, 0.1, 0.4, 0.18];

export function PlayerPreview() {
  const reduce = useReducedMotion();
  const [newsIn, setNewsIn] = useState(161);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setNewsIn((s) => (s <= 0 ? 161 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [reduce]);

  const mm = Math.floor(newsIn / 60);
  const ss = String(newsIn % 60).padStart(2, "0");

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass w-full max-w-md p-5 sm:p-6"
      role="img"
      aria-label="Preview of the Radious player: a show on air with hosts Kris and Mihkel"
    >
      {/* status row */}
      <div className="flex items-center justify-between">
        <span className="pulse-live inline-flex items-center gap-1.5 rounded-full border border-live/40 bg-live/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-live">
          ON AIR
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-text-3">
          with Kris &amp; Mihkel
        </span>
      </div>

      {/* art + track */}
      <div className="mt-5 flex items-center gap-4">
        <Image
          src="/radious-icon.png"
          alt="Show cover art"
          width={96}
          height={96}
          className="rounded-[20px] shadow-[0_20px_60px_-18px_rgba(0,0,0,0.85)]"
        />
        <div className="min-w-0">
          <div className="flex items-end gap-[3px] h-4 mb-2" aria-hidden="true">
            {EQ_DELAYS.map((d, i) => (
              <span
                key={i}
                className="eq-bar w-[3px] rounded-full bg-accent"
                style={{ height: "100%", animationDelay: `${d}s` }}
              />
            ))}
          </div>
          <p className="truncate text-lg font-semibold leading-tight">Golden Hour Drive</p>
          <p className="truncate text-sm text-text-2">Lumen Fields</p>
        </div>
      </div>

      {/* progress */}
      <div className="mt-5">
        <div className="h-1 w-full rounded-full bg-white/8">
          <div
            className="h-1 w-[62%] rounded-full"
            style={{ background: "linear-gradient(90deg, var(--accent-2), var(--accent))" }}
          />
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[11px] text-text-3">
          <span>2:27</span>
          <span>3:56</span>
        </div>
      </div>

      {/* transport + countdown */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 font-mono text-[11px] text-text-2">
          {newsIn <= 0 ? "News ready" : `News in ${mm}:${ss}`}
        </span>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-2">
            <SkipBack size={18} weight="fill" />
          </span>
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full text-[#14060a]"
            style={{
              background: "linear-gradient(135deg, var(--accent), #ff8a5a)",
              boxShadow: "0 10px 30px -5px rgba(255,107,53,0.6)",
            }}
          >
            <Pause size={22} weight="fill" />
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-2">
            <SkipForward size={18} weight="fill" />
          </span>
        </div>
      </div>

      {/* listener text */}
      <div className="mt-5 rounded-[10px] border border-white/8 bg-white/4 p-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-text-3">
            <ChatCircleDots size={13} /> On-air text
          </span>
          <span className="rounded-full bg-live/15 px-2 py-0.5 text-[10px] font-semibold text-live">
            ANSWERED
          </span>
        </div>
        <p className="mt-2 text-sm text-text-2">&ldquo;Settle an argument: is cereal a soup?&rdquo;</p>
        <p className="mt-1.5 text-sm text-text">
          <span className="font-semibold text-accent">Kris:</span> Legally, no. Emotionally? We
          play the jingle and move on.
        </p>
      </div>
    </motion.div>
  );
}
