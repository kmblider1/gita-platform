"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#modullar", label: "Modullar" },
  { href: "#kurslar", label: "Kurslar" },
  { href: "#mentorlar", label: "Mentorlar" },
  { href: "#kognitiv", label: "Kognitiv AI" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-cream/82 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,29,54,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:h-20">
        <Link
          href="/"
          aria-label="GITA bosh sahifa"
          className="flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy font-serif text-lg font-semibold text-cream"
          >
            G
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight text-navy">
              GITA
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Inklyuziv Kampus
            </span>
          </span>
        </Link>

        <nav
          aria-label="Asosiy navigatsiya"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/75 transition-colors hover:text-teal-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-navy/80 transition-colors hover:border-navy/30 sm:inline-flex"
            aria-label="Til tanlash"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
            O&apos;zbek
            <span aria-hidden="true">▾</span>
          </button>
          <Link
            href="/auth"
            className="group inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-teal-deep"
          >
            <span>Ro&apos;yxatdan o&apos;tish</span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
