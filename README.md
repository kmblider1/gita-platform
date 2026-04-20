# GITA — Global Inklyuziv Taʼlim Kampusi

Barcha talabalar uchun teng imkoniyat yaratuvchi **inklyuziv taʼlim platformasi**. Sunʼiy intellekt, Braille, imo-ishora tili va ovozli texnologiyalarni bir joyga jamlaydi. Har bir talaba oʻz surʼatida, oʻz usulida oʻqiydi — hurmat va mustaqillik bilan.

## Missiya

Taʼlimdagi toʻsiqlarni olib tashlash va har bir talabaga — jismoniy, kognitiv yoki lingvistik ehtiyojlardan qatʼi nazar — teng imkoniyatlar yaratish. **Hech kim chetda qolmasin.**

## 4 Asosiy Modul

1. **Aqlli Maʼruza** — Real-time nutq-matn (STT), Braille eksport, imo-ishora avatari, avtomatik subtitr.
2. **Virtual Mentor** — Claude API asosida AI chat, 4 ta mutaxassis persona (lingvist, fizik, psixolog, AI muhandis), multimodal javoblar.
3. **Hamkorlik Lab** — Real-time doska, 50+ tilga jonli tarjima, ijtimoiy senariylar asosida oʻrganish.
4. **Kognitiv AI** — Qurilma ichida ishlaydigan yuz aniqlash, charchoq/stress signallari, adaptiv tempo, nafas mashqlari.

## Texnologik Stack

| Qatlam | Texnologiya |
|--------|-------------|
| Frontend | Next.js 15 + TypeScript + Tailwind CSS |
| Backend | Firebase (Authentication, Firestore, Cloud Functions, Storage) |
| AI | Claude API (Anthropic) |
| Deployment | Vercel (frontend) + Firebase (backend xizmatlar) |
| Ehtiyot | cPanel hosting (40GB) |

## Hozirgi Holat

- ✅ **11 ta HTML prototip sahifa** tayyor — "Warm Editorial" dizayn tizimi
- 🔄 **Next.js 15 platformasiga koʻchirish** boshlanmoqda
- ⏳ **MVP muddati:** 15 kunlik rivojlanish reja (grant investor taqdimoti uchun)

## Prototip Sahifalar

| Fayl | Vazifasi |
|------|----------|
| `GITA_Landing.html` | Bosh sahifa (hero, modullar, kurslar, mentorlar) |
| `auth.html` | Kirish / Roʻyxatdan oʻtish + accessibility tanlovi |
| `kurslar.html` | Kurs katalogi (filtr, qidiruv) |
| `modul.html` | Dars / modul sahifasi (video, transkript, Braille) |
| `mentor.html` | Mentor profili va bron |
| `profil.html` | Talaba dashboard (progress, XP, yutuqlar) |
| `virtual-mentor.html` | AI chat (Claude API) |
| `kognitiv.html` | Kognitiv yordamchi demo (kamera + yuz aniqlash) |
| `hamkorlik.html` | Hamkorlik laboratoriyasi (real-time doska) |
| `haqimizda.html` | Jamoa, qadriyatlar, timeline |
| `aloqa.html` | Kontakt forma va FAQ |

## Dizayn Tizimi

**Ranglar:**
- Navy `#0A2540` (asosiy matn, dark UI)
- Cream `#FBF8F3` (asosiy fon)
- Teal `#0D9E78` (CTA, action rangi)
- Amber `#E8950A` (ogohlantirish)
- Coral `#C94F3F` (kritik holat)

**Shriftlar:** Playfair Display (sarlavha), DM Sans (matn), JetBrains Mono (kod/raqam)

**Accessibility:** WCAG 2.1 AA standartiga moslashtirilgan — skip links, ARIA labels, klaviatura navigatsiyasi, Braille / imo-ishora / ovozli rejimlar.

## Rivojlanish Muddati

**15 kun MVP** — grant investor taqdimotiga tayyor boʻlishi kerak.

- **Hafta 1** (Kun 1–5): Asboblar + Next.js asos + Landing + Auth + Kurslar katalogi
- **Hafta 2** (Kun 6–10): Modul sahifalar + Profil + Virtual Mentor AI + Kognitiv demo
- **Hafta 3** (Kun 11–15): Hamkorlik + Mentor + i18n + testing + deployment

## Litsenziya

Hozircha xususiy (private). Keyinchalik ochiq manbaga chiqarilishi mumkin.
