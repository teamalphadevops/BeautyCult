"use client";

import { useEffect, useState } from "react";
import { MakeupIcon, ICON_COUNT } from "./MakeupIcons";
import Emblem from "./Emblem";

// Seeded random so the server and browser render the same "rain" (no hydration mismatch).
function seeded(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = seeded(20261126);
const DROPS = Array.from({ length: 44 }, (_, i) => ({
  icon: i % ICON_COUNT,
  left: rand() * 100,
  size: Math.round(22 + rand() * 26),
  duration: (3 + rand() * 3).toFixed(2),
  delay: (-rand() * 6).toFixed(2),
  spin: Math.round((rand() > 0.5 ? 1 : -1) * (120 + rand() * 300)),
  sway: Math.round(10 + rand() * 30),
  opacity: (0.6 + rand() * 0.4).toFixed(2),
}));

const NAME = "BEAUTY CULT".split("");
const MIN_SHOW_MS = 2900; // long enough for the logo fill animation to finish

export default function Preloader() {
  const [phase, setPhase] = useState("loading"); // loading -> leaving -> gone

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("is-loading");
    const start = performance.now();
    let t1, t2;

    const finish = () => {
      const wait = Math.max(0, MIN_SHOW_MS - (performance.now() - start));
      t1 = setTimeout(() => {
        setPhase("leaving");
        root.classList.remove("is-loading");
        t2 = setTimeout(() => setPhase("gone"), 900);
      }, wait);
    };

    // Open the site with ?loader in the address to keep the loader on screen (for previewing the design).
    if (new URLSearchParams(window.location.search).has("loader")) return;

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", finish);
      root.classList.remove("is-loading");
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`preloader ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-label="Loading Beauty Cult">
      <div className="rain" aria-hidden="true">
        {DROPS.map((d, i) => (
          <span
            key={i}
            className="drop"
            style={{
              left: `${d.left}%`,
              width: d.size,
              height: d.size,
              opacity: d.opacity,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
              "--spin": `${d.spin}deg`,
              "--sway": `${d.sway}px`,
            }}
          >
            <span className="drop-inner" style={{ animationDuration: `${(d.duration / 2).toFixed(2)}s` }}>
              <MakeupIcon index={d.icon} />
            </span>
          </span>
        ))}
      </div>

      <div className="loader-center" aria-hidden="true">
        <div className="medallion">
          <span className="medallion-ring" />
          <Emblem id="loader" draw className="loader-emblem" />
          <span className="logo-shine" />
        </div>

        <div className="loader-name">
          {NAME.map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </div>
        <p className="loader-tag">Beauty Beyond Ordinary</p>
        <div className="loader-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
