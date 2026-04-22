import Link from "next/link";

const columns = [
  {
    title: "Sahifalar",
    links: [
      { label: "Biz haqimizda", href: "/haqimizda" },
      { label: "Blog", href: "#" },
      { label: "Tadqiqot", href: "#" },
      { label: "Karyera", href: "#" },
    ],
  },
  {
    title: "Modullar",
    links: [
      { label: "Aqlli Ma'ruza", href: "#modullar" },
      { label: "Virtual Mentor", href: "/virtual-mentor" },
      { label: "Hamkorlik Lab.", href: "#modullar" },
      { label: "Kognitiv Yordam", href: "#modullar" },
    ],
  },
  {
    title: "Platforma",
    links: [
      { label: "Kurslar", href: "/kurslar" },
      { label: "Mentorlar", href: "#mentorlar" },
      { label: "Talabalar", href: "#" },
      { label: "Muassasalar", href: "#" },
    ],
  },
  {
    title: "Texnologiyalar",
    links: [
      { label: "Ochiq API", href: "#" },
      { label: "Hujjatlar", href: "#" },
      { label: "WCAG 2.1 sertifikat", href: "#" },
      { label: "GDPR bayonot", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="yordam" className="mt-10 border-t border-line bg-cream-2/50 pt-16 pb-8">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="GITA" className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy font-serif text-lg font-semibold text-cream"
              >
                G
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-navy">GITA</span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                  Inklyuziv Kampus
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Global Inklyuziv Ta&apos;lim Kampusi — Universal O&apos;rganish Dizayni asosidagi ochiq platforma. Toshkentda tug&apos;ilgan, dunyoga ochiq.
            </p>
            <div className="mt-6 flex gap-2" aria-label="Ijtimoiy tarmoqlar">
              {[
                { label: "Telegram", icon: "✉" },
                { label: "YouTube", icon: "▶" },
                { label: "LinkedIn", icon: "in" },
                { label: "GitHub", icon: "◉" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sm text-navy/70 transition-colors hover:border-navy/30 hover:text-navy"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                {col.title}
              </h5>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-teal-deep"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <div>© 2026 GITA Kampus · Barcha huquqlar himoyalangan</div>
          <div className="flex flex-wrap items-center gap-2">
            <span>Muvofiqlik:</span>
            {["WCAG 2.1 AA", "GDPR", "ISO 27001"].map((b) => (
              <span
                key={b}
                className="rounded-md border border-line bg-cream px-2 py-1 font-mono text-[11px] text-navy/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
