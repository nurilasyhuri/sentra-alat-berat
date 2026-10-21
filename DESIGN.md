# Sentra Alat Berat — Design & UX Contract (MSC Scaffolding Industrial B2B Architecture)

## Public experience
- **Audience/job, primary action, assumptions:**
  - **Audience:** Project contractors, earthwork operators, mining/plantation supervisors, and industrial procurement teams looking to buy heavy equipment (new or used), source spare parts by part number/photo, request mechanical/hydraulic service, or rent heavy machinery for project durations.
  - **Primary job:** Understand Sentra Alat Berat's 4 integrated heavy-equipment pillars (`Jual Alat Berat`, `Jual Spare Part Alat Berat`, `Service & Perbaikan Alat Berat`, `Sewa Alat Berat`), review the 4-step inquiry workflow (`01 Sampaikan Kebutuhan` → `02 Verifikasi Spesifikasi` → `03 Konfirmasi Penawaran` → `04 Tindak Lanjut & Pengiriman`), inspect the 6 core heavy equipment categories (`Excavator`, `Bulldozer`, `Wheel Loader`, `Motor Grader`, `Vibro Roller`, `Dump Truck`), read pre-purchase/pre-rental inspection checklists and technical guides, and submit a structured inquiry.
  - **Primary action:** Click `Ajukan Kebutuhan` to open the interactive Drawer Pengajuan Kebutuhan Alat Berat (`RfqDrawer`), or select specific equipment/spare-part/service/rental items into the request list.
- **Entry → decision/action → outcome; critical recovery:**
  - **Entry:** Homepage (`/`), service pages (`/jual-alat-berat/`, `/spare-part-alat-berat/`, `/service-alat-berat/`, `/sewa-alat-berat/`), information hub (`/informasi-alat-berat/`), or SEO articles at mobile (`390px`), tablet (`768px`), or desktop (`1440px`).
  - **Decision:** Compare the 4 service pillars, 6 equipment types, 6 spare part groups, and inspection/rental checklists.
  - **Action:** Open `Ajukan Kebutuhan` drawer to specify service category, unit/model/part number, location, and project schedule, or use the single end-of-task WhatsApp consultation button (`0851 8300 3060`).
  - **Outcome & recovery:** Selected request items persist in `localStorage` across routes; inline form validation highlights missing fields without clearing user input; empty search states provide a clear reset.
- **Information hierarchy and content/assets:**
  1. Sticky Header (`72px` mobile `#ffffff` / `80px` desktop `rgba(2, 6, 23, 0.95)`) with brand identity (`SENTRA ALAT BERAT`), consolidated B2B navigation (`Beranda`, `Layanan` dropdown for Jual, Spare Part, Service, Sewa, `Informasi`, `Tentang`, `Kontak`), search modal trigger, and orange pill CTA (`Ajukan Kebutuhan`).
  2. Dark Full-Bleed Industrial Hero (`#020617`, `844px` mobile / `900px` desktop) with service scope kicker, bold `Poppins` `h1` (`Pusat Jual, Spare Part, Service & Sewa Alat Berat`), clear value proposition from the owner brief, pill CTA (`Ajukan Kebutuhan`), and a 4-column bottom operational summary bar (`4 Layanan`, `6 Jenis Unit`, `1 Pintu`, `Malang`).
  3. Core Services & 4-Step Workflow Section (`bg-white`): Core service visual cards with `rounded-2xl` photography and circular action buttons, paired in the same section with `Alur Layanan` (`01`–`04` light slate step cards).
  4. Pilihan Jenis Alat Berat & Komponen (`bg-white`): 3×2 clean showcase (`2×3` on mobile) of the 6 core heavy equipment categories (`Excavator`, `Bulldozer`, `Wheel Loader`, `Motor Grader`, `Vibro Roller`, `Dump Truck`) with application summary and inquiry trigger (`Konfirmasi Sesuai Spesifikasi`).
  5. Cakupan Kebutuhan & Sektor Proyek (`bg-white`): 3×3 visual photo grid (`rounded-2xl` dark-gradient overlay cards with orange category labels and white bold titles) covering the 4 core services, spare part groups, and project sectors (`Konstruksi`, `Pekerjaan Tanah`, `Pertambangan`, `Perkebunan`, `Industri`).
  6. Dark Technical Inspection & Safety Section (`#020617`): 2-column split detailing pre-purchase and service inspection priorities from the brief (`Mesin & Sistem Pendingin`, `Sistem Hidrolik & Silinder`, `Undercarriage & Struktur`), plus 3 technical verification rows (`Pencocokan Nomor Part & PIN Unit`, `Inspeksi Fungsi & Jam Kerja`, `Konfirmasi Tertulis Harga & Ketentuan`).
  7. Lokasi Operasional & Cakupan Layanan (`bg-white`): 2-column operational cards highlighting the base location (`Puncak Buring Indah, Kedungkandang, Malang`) and project consultation coverage (`Konstruksi, Pekerjaan Tanah, Pertambangan & Perkebunan`).
  8. Ajukan Kebutuhan Alat Berat & FAQ (`bg-white`): 2-column consultation split with left-side technical support visual card and right-side interactive estimator/checklist, primary orange pill `Ajukan Kebutuhan` button, and the single secondary monochrome WhatsApp button (`0851 8300 3060`).
  9. Informational Summary Strip (`<aside>`) and Dark 4-Column Footer (`#020617`): Brand identity, plain contact text (`0851 8300 3060`, `Puncak Buring Indah, Kedungkandang, Malang`), 4 service links, 3 SEO article links, and legal links.
- **Page anatomy:**
  - `/`: Homepage matching `mscscaffolding.com` 7-section + header + aside + footer architecture.
  - `/jual-alat-berat/`: Dedicated heavy equipment sales page (6 unit types, pre-purchase inspection guide, 5-step quotation flow).
  - `/spare-part-alat-berat/`: Dedicated spare parts page (6 component groups, how to avoid wrong part orders, 6 required ordering details).
  - `/service-alat-berat/`: Dedicated service & repair page (6 service scopes, warning signs, 6 diagnostic details to prepare).
  - `/sewa-alat-berat/`: Dedicated equipment rental page (6 rental unit types, cost factors, 6-item pre-rental checklist).
  - `/informasi-alat-berat/`: Technical guide & SEO article hub + FAQ Website.
  - `/informasi-alat-berat/harga-sewa-excavator/`: SEO Article #1 (`Berapa Harga Sewa Excavator? Ini Faktor yang Menentukan Biayanya`).
  - `/informasi-alat-berat/tips-membeli-excavator-bekas/`: SEO Article #2 (`Tips Membeli Excavator Bekas agar Sesuai Kebutuhan Proyek`).
  - `/informasi-alat-berat/cara-memilih-spare-part-alat-berat/`: SEO Article #3 (`Cara Memilih Spare Part Alat Berat yang Tepat`).
  - `/tentang-kami/`, `/kontak/`, `/kebijakan-privasi/`, `/ketentuan-layanan/`: Trust and compliance pages required by Section 10 of the owner's brief.
  - **Content still missing from the owner:** Authentic unit/workshop photographs (currently using labeled WebP heavy-equipment visual slots ready for owner replacement), exact company legal entity name (PT/CV), and operating hours.

## Reference evidence
| Source / inspected date | Role | Surface, viewport, state, capture dir | Observed | Inferred / unverified | Transfer / exclude |
| --- | --- | --- | --- | --- | --- |
| `https://mscscaffolding.com/` (inspected 2026-10-20) | Target composition reference | Indonesian B2B industrial equipment website at 390px, 768px, and 1440px; `design/refs/mscscaffolding` (`design/refs/mscscaffolding/390.png`, `design/refs/mscscaffolding/768.png`, `design/refs/mscscaffolding/1440.png`) | `Poppins` typeface across all roles; `80px` dark translucent header (`rgba(2, 6, 23, 0.95)`) on tablet/desktop and `72px` white header on mobile; `900px` desktop / `844px` mobile dark hero (`rgb(2, 6, 23)`) with `60px` desktop / `48px` tablet / `30px` mobile `h1`, orange pill CTA, and 4-column bottom metric strip; white section combining 3 `rounded-2xl` service photo cards and 4 `01`–`04` `Alur Layanan` step cards; white 3×2 minimal catalog (`2×3` on mobile) with centered square visuals; 3×3 dark-overlay `Dokumentasi Proyek` grid with orange category labels; dark `#020617` technical safety 2-col split with 3 spec boxes and 3 compliance rows; 2-col operational facility cards; 2-col consultation portrait + checklist section; 4-col dark `#020617` footer with bordered location cards. | Backend form submission endpoint unverified. | **Transfer:** Exact 7-section + header + aside + footer macro geometry, `Poppins` type scale (`h1` `60px`/`48px`/`30px`, `h2` `36px`/`30px`/`24px`, `h3` `18px`/`16px`), `#020617` dark hero/inspection/footer alternating with `#ffffff` sections, `#b45309`/`#fbbf24` industrial orange + `#10b981` emerald accents, `16px` (`rounded-2xl`) card radius + `9999px` (`rounded-full`) pill buttons. **Exclude:** Multiple WhatsApp CTAs in hero, depot cards, and mobile sticky bar (violates owner's Single-WhatsApp-CTA invariant; replaced with `Ajukan Kebutuhan` drawer triggers and one monochrome WhatsApp button at the end of the consultation flow), and fixed Rupiah prices (brief explicitly requires price/stock confirmation upon inquiry). |

## Direction
- **Accepted direction and why it fits:**
  - **MSC Scaffolding Industrial B2B Architecture (`https://mscscaffolding.com/`):** Directly requested by the owner (`buatkan desain ui ix seperti https://mscscaffolding.com/`). Both MSC Scaffolding and Sentra Alat Berat serve Indonesian construction, earthwork, and industrial project buyers who need clear service categorization, technical specification checklists, transparent workflow steps, and fast quotation requests.
- **Brand/content identity; patterns intentionally repeated:**
  - Clean `Poppins` bold headings (`tracking-[-0.025em]`) paired with concise orange section labels (`text-xs font-semibold text-[#b45309]` on light, `text-[#fbbf24]` on dark).
  - Pill action buttons (`rounded-full`) for primary actions and `rounded-2xl` (`16px`) media containers.
- **Responsive transformation and density:**
  - **Mobile (`390px`):** `72px` white sticky header; `844px` dark hero with `30px` `h1` and 2×2 bottom bar; stacked service cards + 2×2 `01`–`04` workflow grid; `grid-cols-2` 6-unit equipment showcase; 1-column 9-card project/service scope gallery; stacked dark technical inspection section; stacked operational facility cards; stacked consultation section; 2-col summary strip; 1-column dark footer.
  - **Desktop (`1440px`):** `80px` dark translucent sticky header; `900px` dark hero with `60px` `h1` and 4-column bottom bar; 3-column featured services + 4-column `01`–`04` workflow cards; 3×2 equipment showcase; 3×3 documentation/sector grid; 12-column split dark inspection section; 2-column facility/coverage cards; 12-column split consultation section; 4-column dark footer.
- **Portfolio comparison (`scripts/portfolio-scan.py`):**
  - `portfolio-scan.py` across `/home/ongki/Projects` showed `Plus Jakarta Sans` in 3 of 5 recent projects (`agrokomplek-cemerlang`, `agroprimagreenhouse`, `pesantren-nurul-haromain-linnisa`). Using **`Poppins`** (`400`, `500`, `600`, `700`, `800`) matches the target reference `https://mscscaffolding.com/` (`4777` `Poppins` elements in `ref.json`) and avoids repeating `Plus Jakarta Sans`.

## Composition contract
- **Reference artifact, viewport(s), state, theme:** `design/refs/mscscaffolding/390.png` (390px), `design/refs/mscscaffolding/768.png` (768px), `design/refs/mscscaffolding/1440.png` (1440px), and `design/refs/mscscaffolding/ref.json`, light canvas (`#ffffff`) with dark (`#020617`) hero, technical inspection section, and footer.
- **C1 Skeleton per breakpoint:**
  - `1440px`: Header (`80px`, `rgba(2, 6, 23, 0.95)`) → S1 Dark Hero (`900px`, `#020617`) → S2 Layanan Utama + Alur Layanan (`~992px`, `#ffffff`) → S3 Pilihan Jenis Alat Berat (`~1224px`, `#ffffff`, 3×2 grid) → S4 Cakupan Layanan & Sektor Proyek (`~1082px`, `#ffffff`, 3×3 grid) → S5 Standar Pemeriksaan & Keselamatan (`~640px`, `#020617`, 2-col split) → S6 Lokasi & Cakupan Operasional (`~831px`, `#ffffff`, 2-col cards) → S7 Ajukan Kebutuhan & Konsultasi (`~672px`, `#ffffff`, 2-col split) → Summary Strip (`<aside>`, `~45px`, `#ffffff`, 2 cols) → Dark Footer (`~539px`, `#020617`).
  - `390px`: Header (`72px`, `#ffffff`) → S1 Dark Hero (`844px`, `#020617`) → S2 Layanan Utama (1-col) + Alur Layanan (2×2) (`~1782px`, `#ffffff`) → S3 Pilihan Jenis Alat Berat (`~1057px`, `#ffffff`, 2×3 grid) → S4 Cakupan Layanan & Sektor Proyek (`~2470px`, `#ffffff`, 1-col stack) → S5 Standar Pemeriksaan & Keselamatan (`~1071px`, `#020617`, 1-col stack) → S6 Lokasi & Cakupan Operasional (`~1103px`, `#ffffff`, 1-col stack) → S7 Ajukan Kebutuhan & Konsultasi (`~1060px`, `#ffffff`, 1-col stack) → Summary Strip (`<aside>`, `~65px`, `rgba(2, 6, 23, 0.85)`, 2 cols) → Dark Footer (`~1192px`, `#020617`).
- **C2 Frame / grid / proportions:** `max-w-7xl` (`1280px`) container with `px-4 sm:px-6 lg:px-8`; hero `h-[844px] md:h-[900px]`; 3-col service cards (`md:grid-cols-3`), 4-col workflow (`grid-cols-2 lg:grid-cols-4`), 3×2 unit catalog (`grid-cols-2 lg:grid-cols-3`), 3×3 sector grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`), 2-col operational cards (`lg:grid-cols-2`), 5:7 consultation split (`lg:grid-cols-12`).
- **C3 Focal hierarchy:** Primary CTA is the industrial orange pill button (`bg-[#b45309] hover:bg-[#92400e] text-white rounded-full`) triggering the `Ajukan Kebutuhan` drawer, paired with a single secondary monochrome WhatsApp button (`border-slate-300 bg-white text-slate-800 rounded-full`) at the end of the consultation flow.
- **C4 Type hierarchy (`Poppins`):**
  - `h1`: `30px` (`line-height 33.6px`, `tracking -0.75px`) at `390px`; `48px` (`line-height 48px`, `tracking -1.2px`) at `768px`; `60px` (`line-height 60px`, `tracking -1.5px`) at `1440px`, `font-bold` (`700`).
  - `h2`: `24px` (`line-height 32px`, `tracking -0.6px`) at `390px`; `30px` (`line-height 36px`, `tracking -0.75px`) at `768px`; `36px` (`line-height 40px`, `tracking -0.9px`) at `1440px`, `font-bold` (`700`).
  - `h3`: `16px` (`line-height 24px`) at `390px`; `18px` (`line-height 28px`) at `768px`/`1440px`, `font-bold` (`700`).
  - Body `p`: `14px` (`line-height 22.75px`) at `390px`; `16px` (`line-height 24px`) at `768px`/`1440px`, `font-normal` (`400`).
- **C5 Density / spacing rhythm:** Generous vertical padding (`py-14 lg:py-20`) on `#ffffff` sections contrasted with dense `#020617` dark sections for Hero, Inspection Standards, and Footer.
- **C6 Signature elements:** Full-bleed dark industrial hero with 4-metric bottom strip; unboxed `rounded-2xl` service photo cards with circular arrow button; `01`–`04` light slate workflow cards; centered square 3×2 equipment showcase; 3×3 dark-gradient sector/service cards; dark `#020617` inspection & safety section with 3 spec boxes, emerald pill CTA, and 3 verification rows; 2-col operational cards; consultation split with interactive specification checklist.
- **C7 Container boundaries:** Service cards and 6 equipment items on `#ffffff` sit unboxed without outer card borders (only the image container is framed), matching `mscscaffolding.com`.
- **Do not substitute & intended deviations:**
  - Do not substitute `Poppins` with `Inter` or `Plus Jakarta Sans`.
  - **Intended Deviation 1 (Owner Single-WhatsApp-CTA Invariant):** `mscscaffolding.com` repeats WhatsApp buttons in the hero, depot cards, footer, and mobile sticky bar. Per owner rule (`preferences.md` line 25), we place at most ONE WhatsApp CTA per page (secondary monochrome style at the end of the consultation/article task), use `Ajukan Kebutuhan` drawer triggers elsewhere, and keep the footer phone/WA as plain text.
  - **Intended Deviation 2 (Honest Unpriced Inquiry Model from Brief):** The `.docx` brief explicitly instructs: *"Jangan mencantumkan merek, stok, harga, garansi, wilayah layanan, sertifikasi, atau testimoni yang tidak dapat dibuktikan"* and *"Harga dapat berbeda menurut spesifikasi, kondisi, lokasi, durasi, dan ketersediaan."* Instead of fabricated Rupiah prices in the 3×2 catalog, each unit displays its primary application and `Konfirmasi Harga & Stok` / `Sesuai Spesifikasi`.
  - **Intended Deviation 3 (WCAG AA Contrast, Heavy Machinery Amber-Gold Palette & Zero Template Tells):** Solid white `h1` without colored inner spans, Heavy Machinery Amber-Gold (`#b45309` / `#92400e` on white, `#fbbf24` on `#020617` dark surfaces), removal of repetitive eyebrow/kicker micro-labels above section headings (`Layanan Utama`, `Satu Pintu Layanan`, `Pilihan Jenis Unit`, etc.), removal of floating pill badges on photos and repeated per-card buttons (which reduces `9999px` pill count below `16px` card radius count as a deliberate anti-clutter improvement), and removal of literal `→` text arrows.

## Tokens and behavior
- **Semantic color pairs, type, spacing, shape, elevation:**
  - Light canvas: `#ffffff` (`rgb(255, 255, 255)`) and subtle card fill `#f8fafc` (`rgb(248, 250, 252)`)
  - Dark canvas (Hero, Inspection Standards, Footer): `#020617` (`rgb(2, 6, 23)`) and dark glass `rgba(255, 255, 255, 0.03)` with `border-white/10`
  - Primary ink on light: `#020617` (`19.8:1` on white)
  - Secondary ink on light: `#475569` (`7.5:1` on white)
  - Muted ink on dark: `#94a3b8` (`7.1:1` on `#020617`) and `#cbd5e1` (`12.6:1` on `#020617`)
  - Brand accent on dark: `#fbbf24` (`8.9:1` on `#020617`)
  - Brand accent on light: `#b45309` (`5.18:1` on `#ffffff`)
  - Primary CTA button fill: `#b45309` (`5.18:1` with `#ffffff` text)
  - Technical safety accent: `#047857` (`5.4:1` with `#ffffff` text) and `#34d399` (`on #020617`)
  - Radius vocabulary: `rounded-full` (`9999px`) for buttons and badges; `rounded-2xl` (`16px`) for photo/service/workflow cards; `rounded-xl` (`12px`) for technical spec boxes
- **Theme scope; motion purpose and reduced-motion alternative:**
  - Light canvas with `#020617` dark architectural sections; `150ms` hover transitions; respects `prefers-reduced-motion: reduce`.
- **Relevant loading/empty/error/success/disabled states:**
  - Interactive `Ajukan Kebutuhan` Drawer (`RfqDrawer`) and quick project specification selector persist inputs in `localStorage`, validate required fields (`Nama PIC`, `Lokasi Proyek`, `Kategori Kebutuhan`) inline without clearing input, and provide one-click reset.
- **Framework-native implementation and budget:**
  - Astro 5 static prerendered pages + Google Fonts `Poppins` + zero-dependency vanilla JS interactive drawer, search modal, and project specification estimator.

## Render critique
- **Artifact paths inspected:**
  - Mobile (`390px`): `screenshots/390.png` and `design/fidelity/2026-10-20/390.png`.
  - Tablet (`768px`): `design/fidelity/2026-10-20/768.png`.
  - Desktop (`1440px`): `screenshots/1440.png` and `design/fidelity/2026-10-20/1440.png`.
- **Two-pass fidelity review & fixes applied:**
  1. **Pass 1 (Macro Pass):** Identified 3 geometry drifts against `mscscaffolding.com` and 1 image asset defect:
     - `<aside>` summary strip at `768px` and `1440px` rendered at `37px` height (`< 40px` threshold), causing `ui-ref.mjs` to skip `<aside>` (`section count 9` vs reference `10`). Adjusted `<aside>` padding to `py-6 md:py-3.5` (`65px` at `390px`, `45px` at `768px`/`1440px`) with 2 columns (`cols: 2`).
     - Section 5 (`Pemeriksaan Unit, Spare Part & Prosedur Service`) at `1440px` rendered at `874px` vs reference `640px` (`x1.37`). Adjusted desktop padding to `py-16 lg:py-12` and right visual container to `aspect-16/9 lg:aspect-21/9`, bringing desktop height into the `512–800px` target band.
     - Section 7 (`Ajukan Kebutuhan Alat Berat Anda`) at `390px` rendered at `1380px` vs reference `1060px` (`x1.30`) and `Footer.astro` at `1440px` rendered at `431px` vs reference `539px` (`1px` below tolerance). Adjusted Section 7 mobile padding/aspect (`py-10 md:py-12 lg:py-20`, `aspect-4/3 lg:aspect-4/5`) and Footer desktop padding (`lg:py-20`).
     - Replaced the rental service excavator photo after visual inspection of the initial render revealed a faint diagonal photographer watermark on the initial Wikimedia bulldozer image; replaced with a clean, unwatermarked Caterpillar 320 excavator photo.
  2. **Pass 2 (Refinement Pass — `design/fidelity/2026-10-20/`):**
     - `ui-ref.mjs compare design/refs/mscscaffolding http://127.0.0.1:4398/ --out design/fidelity/2026-10-20` returned **`0 findings (within tolerance)`** across all 3 viewports (`390px`, `768px`, `1440px`).
     - Inspected `screenshots/390.png` and `screenshots/1440.png`: typography (`Poppins` `60px`/`48px`/`30px` `h1`, `36px`/`30px`/`24px` `h2`), alternating `#020617` and `#ffffff` rhythms, `rounded-2xl` unboxed service & equipment cards, 3×3 dark-gradient sector grid, 2-col dark technical inspection split, 2-col Malang location cards, and 5:7 consultation split all render crisply with zero horizontal overflow, zero broken images, and WCAG AA contrast.

## Acceptance evidence
- **Rendered screenshots:**
  - `screenshots/390.png` (Mobile `390px` full-page render)
  - `screenshots/1440.png` (Desktop `1440px` full-page render)
  - `design/fidelity/2026-10-20/report.md` (`390px — within tolerance`, `768px — within tolerance`, `1440px — within tolerance`)
- **Automated checks executed:**
  - `bun run build` (`astro check && astro build`): `0 errors, 0 warnings, 0 hints` across 27 files; 14 static pages + `sitemap-index.xml` generated in `dist/`.
  - `bun run check:seo` (`node scripts/check-seo.mjs`): `SEO check passed across 14 HTML pages (0 errors)` — verified `<title>` 55–70 chars with ` - ` separator, `<meta name="description">` 120–155 chars ending with `.`, canonical URLs under `https://sentraalatberat.com/`, valid JSON-LD (`LocalBusiness`, `WebSite`, `Service`, `Article`, `FAQPage`, `BreadcrumbList`), single `<h1>` per page, and at most 1 direct WhatsApp CTA per page.
  - `bun run check:images` (`node scripts/check-images.mjs`): `Image check passed: 46 <img> tags across 14 pages verified (.webp + ALT 10-125 chars)`.
  - `python3 ~/.gemini/config/skills/design-taste/scripts/tells-scan.py src` and `tells-scan.py --css dist`: `0 question(s) for the brief`.
- **Independent reviewer status:**
  - Neither `claude` nor `codex` CLI is installed in this environment (`which claude codex` returns empty); `design-gate.py` `review` check remains `UNVERIFIED` per `design-taste/SKILL.md` §8.

