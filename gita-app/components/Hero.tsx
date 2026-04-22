import Link from "next/link";

export default function Hero() {
  return (
    <section id="main" className="relative overflow-hidden pt-10 pb-24 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT — copy + CTA */}
          <div>
            <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-line bg-cream-2/60 px-3 py-1.5 text-xs font-medium text-navy/80">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              100% bepul · Universal O&apos;rganish Dizayni · 2026
            </div>

            <h1
              className="reveal-up mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-navy md:text-6xl lg:text-[72px]"
              style={{ animationDelay: "0.08s" }}
            >
              Hamma uchun <em>ta&apos;lim</em>,
              <br />
              hech kim <em>chetda</em> qolmasin.
            </h1>

            <p
              className="reveal-up mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
              style={{ animationDelay: "0.16s" }}
            >
              GITA — sun&apos;iy intellekt, Braille, imo-ishora tili va ovozli texnologiyalarni bir joyga jamlagan inklyuziv kampus. Har bir talaba o&apos;z sur&apos;atida, o&apos;z usulida o&apos;qiydi — hurmat va mustaqillik bilan.{" "}
              <strong className="text-navy">Barcha kurs va modullar butunlay bepul.</strong>
            </p>

            <div
              className="reveal-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href="/auth"
                className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-base font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(13,158,120,0.55)] transition-all hover:bg-teal-deep hover:shadow-[0_12px_28px_-8px_rgba(10,124,94,0.6)]"
              >
                <span>Bepul boshlash</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href="#modullar"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-cream px-5 py-3.5 text-base font-medium text-navy transition-colors hover:border-navy/35"
              >
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[10px] text-cream"
                >
                  ▶
                </span>
                Demoni ko&apos;rish · 2:14
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <span aria-hidden="true" className="text-teal-deep">✓</span>
                Karta kerak emas · Obuna yo&apos;q
              </span>
            </div>

            <div
              className="reveal-up mt-10 flex items-center gap-5"
              style={{ animationDelay: "0.32s" }}
            >
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  { l: "A", bg: "bg-teal" },
                  { l: "M", bg: "bg-amber" },
                  { l: "S", bg: "bg-coral" },
                  { l: "D", bg: "bg-navy-2" },
                  { l: "+", bg: "bg-cream-2 !text-navy" },
                ].map((a, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-xs font-semibold text-cream ${a.bg}`}
                  >
                    {a.l}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="text-amber" aria-hidden="true">★★★★★</div>
                <div className="text-navy/80">
                  <strong className="font-semibold">1250+</strong> talaba 42 shahardan ·{" "}
                  <strong className="font-semibold">4.9/5</strong> o&apos;rtacha baho
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — course card + stats */}
          <div
            className="reveal-up relative"
            style={{ animationDelay: "0.20s" }}
          >
            <div className="absolute -top-4 right-6 z-10 flex items-center gap-2 rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-cream shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              haftaning kursi
            </div>

            <article className="overflow-hidden rounded-[28px] border border-line bg-cream shadow-[0_24px_64px_-24px_rgba(11,29,54,0.25)]">
              <div className="relative flex h-56 items-end justify-between bg-gradient-to-br from-navy via-navy-2 to-teal-deep p-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-cream/70">
                    · jonli seminar
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-cream">
                    Aqlli Ma&apos;ruza
                    <br />
                    bilan birinchi qadam
                  </h3>
                </div>
                <div className="flex gap-2 text-xl" aria-hidden="true">
                  <span title="Braille" className="grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur">⠃</span>
                  <span title="Imo-ishora" className="grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur">✋</span>
                  <span title="Ovoz" className="grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur">🎧</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    Inklyuziv ta&apos;lim asoslari
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Dr. Malika Karimova · 6 hafta · O&apos;zbek tilida
                  </p>
                </div>
                <div className="shrink-0 rounded-full bg-teal/10 px-3 py-1 text-sm font-semibold text-teal-deep">
                  Bepul
                </div>
              </div>

              <div className="px-6 pb-6">
                <div
                  className="h-1.5 overflow-hidden rounded-full bg-cream-2"
                  role="progressbar"
                  aria-valuenow={64}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Kurs jadvali to'ldirilganligi"
                >
                  <div className="h-full w-[64%] rounded-full bg-teal" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted">
                  <span>128 talaba ro&apos;yxatda</span>
                  <span className="font-mono text-navy/80">64% to&apos;ldirilgan</span>
                </div>
              </div>
            </article>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-line bg-cream p-4">
                <div className="font-mono text-3xl font-semibold text-navy">42</div>
                <div className="mt-1 text-xs leading-tight text-muted">Faol kurslar</div>
              </div>
              <div className="rounded-2xl bg-navy p-4 text-cream">
                <div className="font-mono text-3xl font-semibold">87</div>
                <div className="mt-1 text-xs leading-tight text-cream/70">% inklyuzivlik indeksi</div>
              </div>
              <div className="rounded-2xl border border-line bg-cream p-4">
                <div className="font-mono text-3xl font-semibold text-navy">
                  10<span className="text-teal">+</span>
                </div>
                <div className="mt-1 text-xs leading-tight text-muted">Til · Braille · Imo-ishora</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativ fon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-amber/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl"
      />
    </section>
  );
}
