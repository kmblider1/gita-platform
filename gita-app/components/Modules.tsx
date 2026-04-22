type ModuleItem = {
  num: string;
  icon: string;
  title: string;
  english: string;
  desc: string;
  tags: string[];
  accent: "teal" | "amber" | "coral" | "navy";
};

const modules: ModuleItem[] = [
  {
    num: "01 / 04",
    icon: "🎙",
    title: "Aqlli Ma'ruza",
    english: "Smart Lecture",
    desc: "Real vaqt transkripsiya, avtomatik Braille eksport va imo-ishora tarjimasi — bir tugma bosishda. Ma'ruzachilar hech narsa o'zgartirmasdan ishlayveradi.",
    tags: ["Real-time STT", "Braille eksport", "Signer avatar"],
    accent: "teal",
  },
  {
    num: "02 / 04",
    icon: "🤖",
    title: "Virtual Mentor",
    english: "Personal AI tutor",
    desc: "AI chat, grammatik tahlil, shaxsiy lug'at va uzoq muddatli xotira. Talaba so'ragan usulda tushuntiradi — matn, audio, yoki vizual metafora bilan.",
    tags: ["Grammatik tahlil", "Shaxsiy lug'at", "Multimodal javob"],
    accent: "amber",
  },
  {
    num: "03 / 04",
    icon: "🤝",
    title: "Hamkorlik Laboratoriyasi",
    english: "Collab Lab",
    desc: "Guruh loyihalar, 50+ tilga jonli tarjima va autizm spektridagi talabalar uchun tuzilgan ijtimoiy senariylar. Ishonchli muhit, aniq qadamlar.",
    tags: ["50+ til", "Senariy rejimi", "Jamoaviy doska"],
    accent: "coral",
  },
  {
    num: "04 / 04",
    icon: "🧠",
    title: "Kognitiv Yordamchi",
    english: "Cognitive Assist",
    desc: "Webcam orqali charchoq va stress belgilarini aniqlaydi — nozik, mahfiy va qurilmada. Kerak paytda tanaffus taklif qiladi, keraksiz holatda jim turadi.",
    tags: ["On-device", "Privacy-first", "Adaptive pacing"],
    accent: "navy",
  },
];

const accentBar: Record<ModuleItem["accent"], string> = {
  teal: "bg-teal",
  amber: "bg-amber",
  coral: "bg-coral",
  navy: "bg-navy",
};

export default function Modules() {
  return (
    <section id="modullar" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-teal-deep">
              To&apos;rtta modul · bitta ekotizim
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-navy md:text-5xl">
              O&apos;rganishning
              <br />
              har bir <em>qirrasi</em> uchun.
            </h2>
          </div>
          <p className="max-w-md self-end font-serif text-lg italic text-navy/70">
            &ldquo;Ta&apos;limdagi to&apos;siqni olib tashlash — bu imkoniyatni ko&apos;paytirishdir.&rdquo;
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {modules.map((m) => (
            <article
              key={m.num}
              className="group relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-cream p-7 transition-all hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-[0_20px_48px_-24px_rgba(11,29,54,0.22)]"
            >
              <span
                className={`absolute left-0 top-7 h-8 w-1 rounded-r-full ${accentBar[m.accent]}`}
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-muted">
                  {m.num}
                </span>
                <span className="text-3xl" aria-hidden="true">
                  {m.icon}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">
                {m.title}
                <em className="ml-2 font-sans text-sm font-normal not-italic text-muted">
                  {m.english}
                </em>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {m.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-cream-2/60 px-3 py-1 text-xs font-medium text-navy/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
