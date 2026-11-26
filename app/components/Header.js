"use client";

import { useState } from "react";
import Emblem from "./Emblem";
import { PHONE_TEL } from "../data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#areas", label: "Areas" },
  { href: "#book", label: "Book" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <Emblem id="header" className="logo-emblem" />
          <span className="logo-text">
            Beauty Cult
            <small>Beauty Beyond Ordinary</small>
          </span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={PHONE_TEL} className="btn btn-primary btn-sm">
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
