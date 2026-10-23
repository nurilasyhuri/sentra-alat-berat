import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const articlesDataPath = path.join(projectRoot, 'src', 'data', 'articlesData.ts');

// Topics library with 30+ high-intent SEO heavy equipment topics
const ARTICLE_TOPICS_POOL = [
  {
    slug: 'sewa-wheel-loader-batching-plant-quarry',
    keyword: 'sewa wheel loader',
    title: 'Sewa Wheel Loader 2–3 m³ untuk Batching Plant & Quarry Tambang Se-Indonesia',
    metaDescription: 'Panduan sewa wheel loader kapasitas bucket 2 hingga 3 m³ untuk pemuatan material agregat di batching plant, crusher, dan quarry tambang Indonesia.',
    h1: 'Sewa Wheel Loader 2–3 m³ untuk Operasional Batching Plant & Quarry Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-wheel-loader', '#wheel-loader-quarry', '#batching-plant', '#alat-berat-indonesia'],
    image: '/images/units/wheel-loader.webp',
    imageAlt: 'Unit wheel loader memuat material pasir dan batu ke dump truck di area batching plant',
    imageCaption: 'Wheel loader kelas 3 m³ siap melayani siklus pemuatan cepat di stockpile dan quarry.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph: 'Wheel loader dengan kapasitas bucket 2.0 hingga 3.2 m³ (seperti Komatsu WA320/WA380 dan Caterpillar 950) merupakan unit pemindah material paling efisien pada stockpile pelabuhan, batching plant beton cor, serta tambang galian C. Mobilitas ban karet berkecepatan tinggi memungkinkan rotasi kerja cepat tanpa merusak landasan jalan aspal.',
    sections: [
      {
        heading: 'Karakteristik Operasional Wheel Loader di Area Proyek Agregat',
        content: [
          'Dalam lingkungan produksi beton ready-mix maupun crusher batu split, cycle time pemuatan material menjadi faktor penentu output volume per jam. Wheel loader modern dilengkapi transmisi powershift otomatis dan sistem hidrolik responsif yang mampu mengisi bucket penuh dalam hitungan detik.',
          'Kemampuan bermanuver di ruang sempit berkat artikulasi bodi hingga 40 derajat membuat unit ini sangat fleksibel berpindah antar bin agregat tanpa manuver berbelit.',
        ],
        highlights: [
          'Kapasitas angkat statis 10–14 ton dengan kestabilan counterweight optimal.',
          'Pilihan ban kerja tipe L3 untuk tanah keras atau L5 tahan sayatan batu tajam.',
          'Kabin ber-AC dengan visibilitas 360 derajat untuk keselamatan kerja tinggi.',
        ],
      },
      {
        heading: 'Struktur Biaya & Tips Efisiensi Sewa Wheel Loader',
        content: [
          'Tarif sewa wheel loader umumnya berkisar antara Rp 160.000 hingga Rp 230.000 per jam kerja aktif tergantung kapasitas bucket dan jam operasi harian. Untuk efisiensi biaya bahan bakar, pastikan operator memahami teknik pemuatan satu dorongan (single-pass loading) guna menghemat konsumsi solar.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa kapasitas bucket standar wheel loader untuk proyek jalan dan beton?',
        answer: 'Kapasitas paling populer di Indonesia adalah 2.0 m³ hingga 3.0 m³ dengan berat operasi sekitar 10–18 ton, sangat seimbang untuk memuat dump truck 8–24 m³.',
      },
      {
        question: 'Apakah ban wheel loader tahan terhadap bebatuan tajam di area quarry?',
        answer: 'Unit kami dapat disesuaikan dengan ban tipe L5 deep tread rock lug atau dilengkapi rantai pelindung ban (tire protection chain) jika dioperasikan pada batuan andesit tajam.',
      },
    ],
  },
  {
    slug: 'sewa-vibro-roller-pemadatan-jalan',
    keyword: 'sewa vibro roller',
    title: 'Sewa Vibro Roller 10–12 Ton untuk Pemadatan Subgrade & Pondasi Jalan',
    metaDescription: 'Tarif sewa vibro roller single drum 10 hingga 12 ton untuk proyek pengaspalan, pemadatan tanah timbunan, dan subgrade jalan tol se-Indonesia.',
    h1: 'Sewa Vibro Roller 10–12 Ton untuk Pemadatan Tanah & Pondasi Jalan Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-vibro-roller', '#compactor-10-ton', '#pemadatan-jalan', '#proyek-infrastruktur'],
    image: '/images/units/vibro-roller.webp',
    imageAlt: 'Vibro roller melakukan pemadatan lapis pondasi jalan raya dengan drum getar',
    imageCaption: 'Vibro roller 12 ton single drum smooth siap mencapai target kepadatan CBR laboratorium.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph: 'Pencapaian nilai California Bearing Ratio (CBR) dan kepadatan proctor standar pada tanah timbunan serta lapis pondasi agregat membutuhkan compactor drum getar berdaya tekan dinamis tinggi. Vibro roller kelas 10–12 ton adalah pilihan utama kontraktor jalan raya di seluruh Indonesia.',
    sections: [
      {
        heading: 'Pentingnya Frekuensi & Amplitudo Getaran pada Pemadatan',
        content: [
          'Kepadatan struktur tanah tidak hanya ditentukan oleh bobot mati (static linear load) drum silinder, tetapi lebih dominan oleh gaya sentrifugal getaran hidrolik. Unit vibro roller modern memiliki setelan dual-amplitude: getaran tinggi untuk tanah lempung dalam, dan getaran rendah untuk lapisan finishing atas agar permukaan tidak retak.',
        ],
        highlights: [
          'Daya getar sentrifugal mencapai 240–300 kN untuk penetrasi pemadatan hingga kedalaman 60 cm.',
          'Tersedia opsi padfoot / sheepfoot shell kit untuk pemadatan tanah berbutir halus dan liat basah.',
          'Kemampuan tanjakan (gradeability) hingga 45% untuk pemadatan tanggul bendungan dan lereng.',
        ],
      },
      {
        heading: 'Estimasi Tarif & Ketentuan Sewa Vibro Roller',
        content: [
          'Sewa vibro roller berkisar antara Rp 150.000 hingga Rp 200.000 per jam. Karena unit beroda besi tidak diperbolehkan melintasi jalan raya secara mandiri, mobilisasi lowbed atau tronton self-loader wajib disiapkan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kapan harus menggunakan drum halus (smooth) dan drum padfoot (sheepfoot)?',
        answer: 'Drum halus (smooth drum) digunakan untuk pasir, kerikil, agregat base A/B, dan aspal. Drum padfoot (kaki kambing) digunakan untuk memadatkan tanah lempung basah (clay) agar udara dan air tertekan keluar.',
      },
      {
        question: 'Berapa lintasan (pass) rata-rata yang diperlukan untuk mencapai target CBR?',
        answer: 'Umumnya dibutuhkan 6 hingga 8 lintasan per lapis tebal 20–30 cm gembur, diverifikasi berkala menggunakan pengujian sand cone di lapangan.',
      },
    ],
  },
  {
    slug: 'sewa-motor-grader-perataan-jalan-hauling',
    keyword: 'sewa motor grader',
    title: 'Sewa Motor Grader untuk Perataan Jalan Tol & Hauling Tambang Se-Indonesia',
    metaDescription: 'Layanan rental motor grader pisau 12–14 kaki untuk pembentukan kemiringan drainase (camber), perataan badan jalan, dan pemeliharaan jalan tambang.',
    h1: 'Sewa Motor Grader untuk Perataan Badan Jalan & Hauling Road Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-motor-grader', '#motor-grader-tambang', '#perataan-jalan', '#alat-berat-proyek'],
    image: '/images/units/motor-grader.webp',
    imageAlt: 'Motor grader meratakan lapisan tanah subgrade dengan moldboard blade',
    imageCaption: 'Motor grader dengan pisau moldboard 14 kaki siap membentuk elevasi akurat.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph: 'Ketepatan elevasi dan kemiringan camber jalan merupakan kunci utama drainase air agar aspal atau perkerasan tidak cepat amblas. Motor grader kelas 135–180 HP dengan pisau moldboard presisi menjamin toleransi perataan permukaan tanah dan agregat memenuhi spesifikasi teknis Bina Marga.',
    sections: [
      {
        heading: 'Fungsi Strategis Motor Grader pada Pekerjaan Sipil & Tambang',
        content: [
          'Selain membentuk kontur badan jalan pada proyek jalan tol, motor grader bekerja secara terus menerus pada jalan angkut (hauling road) pertambangan batubara dan mineral. Jalan tambang yang bergelombang meningkatkan risiko ban dump truck pecah dan boros bahan bakar. Grader menjaga permukaan tetap rata dan bebas genangan air.',
        ],
        highlights: [
          'Rotasi moldboard 360 derajat untuk fleksibilitas pembentukan parit V dan lereng talud.',
          'Dilengkapi ripper belakang dan scarifier tengah untuk menggaruk permukaan tanah yang mengeras.',
          'Artikulasi sasis hidrolik untuk bermanuver di tikungan tajam proyek.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa panjang pisau (moldboard) motor grader standar?',
        answer: 'Panjang pisau standar berkisar 3.7 meter (12 kaki) hingga 4.3 meter (14 kaki) dengan bilah pemotong (cutting edge) baja tahan aus yang dapat diganti berkala.',
      },
      {
        question: 'Apakah Sentra Alat Berat menyediakan operator grader berpengalaman?',
        answer: 'Ya. Mengoperasikan grader membutuhkan keahlian tinggi (art and precision) dalam membaca pasak elevasi surveyor. Semua operator grader kami berpengalaman di proyek jalan tol dan hauling.',
      },
    ],
  },
  {
    slug: 'sewa-dump-truck-tronton-indeks-24',
    keyword: 'sewa dump truck tronton',
    title: 'Sewa Dump Truck Tronton Indeks 24 m³ untuk Angkut Material Tambang & Tanah',
    metaDescription: 'Rental dump truck tronton 10 roda indeks 24 kubik untuk angkutan tanah galian cut & fill, batu quarry, pasir, dan batubara di seluruh Indonesia.',
    h1: 'Sewa Dump Truck Tronton Indeks 24 m³ untuk Proyek Tanah & Tambang Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-dump-truck', '#dump-truck-tronton', '#indeks-24', '#angkut-material'],
    image: '/images/units/dump-truck.webp',
    imageAlt: 'Armada dump truck tronton 10 roda mengangkut material proyek tanah',
    imageCaption: 'Dump truck tronton indeks 24 kubik siap melayani ritase angkutan tanah dan material tambang.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph: 'Efisiensi pemindahan tanah jarak jauh (hauling) dari galian ke disposal area sangat bergantung pada daya muat dan keandalan dump truck. Unit dump truck tronton 10 roda berindeks 24 m³ memberikan kapasitas ritase maksimal dengan biaya per meter kubik yang paling kompetitif.',
    sections: [
      {
        heading: 'Kapasitas & Ketangguhan Dump Truck Tronton 10 Roda',
        content: [
          'Menggunakan konfigurasi penggerak 6x4 dengan gardan ganda, dump truck tronton mampu melintasi medan berlumpur dan tanjakan terjal di area tambang maupun quarry. Bak dump berbahan plat baja tebal dilengkapi sistem hidrolik teleskopik bertenaga tinggi untuk proses penumpahan muatan yang stabil dan cepat.',
        ],
        highlights: [
          'Volume bak tampung 24–28 m³ dengan batas tonase aman hingga 30 ton.',
          'Mesin diesel turbo intercooler 260–380 HP bertenaga besar dan hemat BBM.',
          'Pilihan skema sewa per bulan atau borongan per meter kubik/ritase.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah dump truck disewakan include solar dan driver?',
        answer: 'Tersedia skema lepas armada (unit only) maupun all-in include driver dan solar industri resmi sesuai kebutuhan kontrak proyek Anda.',
      },
    ],
  },
  {
    slug: 'sewa-excavator-long-arm-normalisasi-sungai',
    keyword: 'sewa excavator long arm',
    title: 'Sewa Excavator Long Arm Jangkauan 15–18 Meter untuk Normalisasi Sungai',
    metaDescription: 'Rental excavator long arm super reach jangkauan 15 hingga 18 meter untuk pengerukan lumpur sungai, pembuatan tanggul kolam tambak, dan galian basement dalam.',
    h1: 'Sewa Excavator Long Arm Jangkauan 15–18 Meter Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#excavator-long-arm', '#sewa-long-arm', '#normalisasi-sungai', '#pengerukan-lumpur'],
    image: '/images/services/sewa-alat-berat.webp',
    imageAlt: 'Excavator long arm dengan boom panjang mengeruk lumpur dan sedimen di saluran air',
    imageCaption: 'Excavator long reach 16 meter siap menangani pengerukan tebing dan saluran air luas.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph: 'Pekerjaan pengerukan lumpur sedimen di sungai besar, danau, waduk, atau pembuatan tanggul tambak sering kali tidak dapat dijangkau oleh excavator standar. Excavator long arm dengan panjang jangkauan boom dan arm hingga 15–18 meter adalah solusi khusus untuk pekerjaan galian beradius ekstra jauh.',
    sections: [
      {
        heading: 'Kelebihan Excavator Long Reach untuk Pekerjaan Air & Tanggul',
        content: [
          'Desain arm panjang memungkinkan alat berat tetap berada di tanggul yang kokoh tanpa harus turun ke dasar rawa yang berlumpur basah. Dengan kapasitas bucket khusus 0.4–0.5 m³ yang disesuaikan dengan counterweight ekstra, unit tetap seimbang dan aman dari risiko terjungkal.',
        ],
        highlights: [
          'Jangkauan galian horisontal mencapai 15.5 hingga 18.2 meter dari pusat putaran swing.',
          'Kedalaman galian vertikal ke dasar air mencapai 11.5–13 meter.',
          'Counterweight belakang yang diperberat untuk menjaga titik gravitasi seimbang.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa kapasitas bucket excavator long arm dibandingkan unit standar?',
        answer: 'Karena jangkauan boom dan arm yang jauh, kapasitas bucket excavator long arm sengaja diperkecil menjadi 0.4–0.5 m³ guna mencegah beban berlebih (tipping load) pada struktur boom.',
      },
    ],
  },
  {
    slug: 'panduan-ganti-undercarriage-alat-berat',
    keyword: 'spare part undercarriage alat berat',
    title: 'Panduan Ganti Spare Part Undercarriage: Track Shoe, Roller & Sprocket',
    metaDescription: 'Cara memeriksa tingkat keausan undercarriage alat berat crawler (excavator & bulldozer). Spesifikasi suku cadang track shoe, link, idler, dan sprocket.',
    h1: 'Panduan Penggantian Suku Cadang Undercarriage Alat Berat Se-Indonesia',
    category: 'Spare Part Alat Berat',
    tags: ['#undercarriage', '#track-shoe', '#spare-part-alat-berat', '#roller-sprocket'],
    image: '/images/services/spare-part-alat-berat.webp',
    imageAlt: 'Komponen undercarriage track link roller dan sprocket alat berat crawler',
    imageCaption: 'Pemeriksaan ketebalan link dan keausan sprocket mencegah rantai crawler lepas di lapangan.',
    relatedService: { label: 'Layanan Jual Spare Part', href: '/spare-part-alat-berat/' },
    leadParagraph: 'Hingga 50% dari total biaya perawatan alat berat tipe crawler (berantai) dihabiskan untuk sistem undercarriage. Memahami siklus keausan track link, roller, idler, dan sprocket sangat penting agar komponen dapat diganti tepat waktu sebelum merusak komponen penggerak hidrolik final drive.',
    sections: [
      {
        heading: 'Komponen Kunci Undercarriage & Batas Toleransi Aus',
        content: [
          'Sistem undercarriage menopang seluruh bobot puluhan ton alat berat di atas tanah abrasif. Rantai track shoe yang terlalu kendur atau kencang akan mempercepat keausan bushing. Pengukuran rutin ketebalan flange roller dan gigi sprocket wajib dicatat dalam kartu pemeliharaan unit.',
        ],
        highlights: [
          'Track Link & Bushing: Periksa clearance pin dan putar bushing (turning pin/bushing) sebelum tembus.',
          'Top Carrier Roller & Bottom Track Roller: Pastikan seal pelumas internal tidak bocor.',
          'Front Idler & Spring Recoil: Berfungsi menyerap tumbukan saat alat bergerak maju menabrak bebatuan.',
          'Drive Sprocket: Ganti sprocket baru bersamaan dengan rantai link baru agar pola gigitan sinkron.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kapan saat yang tepat mengganti satu set rantai undercarriage?',
        answer: 'Ketika tingkat keausan bushing dan link pitch telah melebihi 100% dari batas toleransi pabrikan, atau saat gigi sprocket mulai menipis tajam menyerupai sirip hiu.',
      },
    ],
  },
  {
    slug: 'service-pompa-hidrolik-silinder-excavator',
    keyword: 'service hidrolik alat berat',
    title: 'Service Pompa Hidrolik & Silinder Excavator Bocor: Solusi Cepat Lapangan',
    metaDescription: 'Layanan service perbaikan pompa hidrolik utama, seal kit silinder bocor, dan control valve alat berat excavator ke lokasi proyek di Indonesia.',
    h1: 'Service Perbaikan Sistem Hidrolik & Pompa Excavator Se-Indonesia',
    category: 'Service Alat Berat',
    tags: ['#service-hidrolik', '#pompa-hidrolik-excavator', '#seal-silinder-bocor', '#mekanik-alat-berat'],
    image: '/images/services/service-alat-berat.webp',
    imageAlt: 'Teknisi memeriksa tekanan pompa hidrolik utama excavator dengan pressure gauge',
    imageCaption: 'Pengujian tekanan hidrolik utama (main relief valve) untuk memulihkan tenaga galian unit.',
    relatedService: { label: 'Layanan Service Alat Berat', href: '/service-alat-berat/' },
    leadParagraph: 'Penurunan tenaga gali (gerakan arm lambat), suhu oli hidrolik mendidih, atau tetesan oli dari batang silinder merupakan gejala kerusakan hidrolik yang harus segera ditangani. Sentra Alat Berat menyediakan tim teknisi mekanik panggilan ke lokasi proyek untuk diagnosis akurat dan penggantian seal kit presisi.',
    sections: [
      {
        heading: 'Penyebab Umum Tekanan Hidrolik Melemah & Solusinya',
        content: [
          'Tekanan hidrolik standar pada excavator kelas 20 ton berada pada kisaran 34.3 hingga 37.3 MPa. Penurunan tekanan biasanya dipicu oleh keausan piston pump barrel, goresan pada cylinder liner, atau seal valve yang mengeras akibat temperatur kerja berlebih.',
        ],
        highlights: [
          'Penggantian Seal Kit Silinder Boom, Arm, dan Bucket menggunakan material polyurethane tahan panas.',
          'Kalibrasi dan setting ulang Main Relief Pressure serta Pilot Pressure valve.',
          'Flushing oli hidrolik dan penggantian filter return untuk menghilangkan gram serpihan logam.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah teknisi dapat melakukan perbaikan langsung di lokasi tambang atau proyek?',
        answer: 'Ya, teknisi kami dibekali peralatan pengukur tekanan portable, tooling khusus seal installer, dan suku cadang fast-moving untuk perbaikan langsung di basecamp proyek.',
      },
    ],
  },
  {
    slug: 'tips-memilih-filter-solar-oli-alat-berat',
    keyword: 'filter alat berat komatsu caterpillar',
    title: 'Tips Memilih Filter Solar & Filter Oli Alat Berat Komatsu & Caterpillar',
    metaDescription: 'Panduan memilih filter solar (fuel water separator) dan filter oli mesin alat berat untuk mencegah kerusakan common rail injector akibat solar kotor.',
    h1: 'Panduan Memilih Filter Solar & Oli Alat Berat Komatsu & Caterpillar',
    category: 'Spare Part Alat Berat',
    tags: ['#filter-solar-alat-berat', '#filter-oli-mesin', '#komatsu-caterpillar', '#suku-cadang'],
    image: '/images/services/spare-part-alat-berat.webp',
    imageAlt: 'Deretan filter oli dan filter bahan bakar diesel untuk alat berat',
    imageCaption: 'Filter solar dengan efisiensi mikron tinggi melindungi injector mesin diesel generasi baru.',
    relatedService: { label: 'Layanan Jual Spare Part', href: '/spare-part-alat-berat/' },
    leadParagraph: 'Mesin diesel alat berat modern dengan teknologi Common Rail Direct Injection (CRDi) sangat sensitif terhadap partikel kotoran dan kandungan air dalam bahan bakar solar. Memilih filter solar berkualitas tinggi (rating 2–5 mikron) adalah investasi termurah untuk melindungi injector berharga belasan juta rupiah.',
    sections: [
      {
        heading: 'Fungsi Pre-Filter Water Separator & Main Fuel Filter',
        content: [
          'Sistem filtrasi bahan bakar alat berat terdiri dari dua tahap utama: pre-filter dengan mangkuk pemisah air (water separator bowl) yang menyaring kotoran kasar di atas 10 mikron, serta main fuel filter berpori rapat yang menyaring partikel mikroskopis sebelum solar masuk ke supply pump.',
        ],
        highlights: [
          'Drain air dari mangkuk separator setiap pagi sebelum mesin dinyalakan.',
          'Ganti filter solar setiap 250–500 jam operasi tergantung kualitas solar lapangan.',
          'Gunakan filter genuine atau OEM bersertifikasi standar ISO partikel bahan bakar.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Bagaimana cara memastikan nomor part filter cocok dengan unit saya?',
        answer: 'Kirimkan foto nameplate unit atau nomor part lama ke WhatsApp Sentra Alat Berat di 0851 8300 3060. Kami akan melakukan cross-check langsung dengan katalog resmi pabrikan.',
      },
    ],
  },
];

// Helper to get formatted date string YYYY-MM-DD
function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Main generation function
export function generateDailyArticles(count = 3) {
  console.log(`[ARTICLE-GENERATOR] Checking articlesData.ts for next ${count} articles...`);

  if (!fs.existsSync(articlesDataPath)) {
    console.error(`Error: ${articlesDataPath} not found!`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(articlesDataPath, 'utf8');

  // Extract existing slugs
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const existingSlugs = new Set();
  let match;
  while ((match = slugRegex.exec(fileContent)) !== null) {
    existingSlugs.add(match[1]);
  }

  console.log(`[ARTICLE-GENERATOR] Currently ${existingSlugs.size} articles registered.`);

  // Find candidates from pool that are not yet registered
  const candidates = ARTICLE_TOPICS_POOL.filter((t) => !existingSlugs.has(t.slug));

  if (candidates.length === 0) {
    console.log('[ARTICLE-GENERATOR] All topics from pool already registered! Generating dynamic variation...');
    // Create programmatic permutation
    const regions = ['Jawa Timur', 'Kalimantan Timur', 'Sumatera Selatan', 'Sulawesi Tenggara'];
    const units = [
      { name: 'Excavator Breaker', role: 'Pembongkaran Struktur Beton & Pemecahan Batu Tambang' },
      { name: 'Bulldozer Rawa LGP', role: 'Pembersihan Lahan Gambut & Kanal Drainase Rawa' },
      { name: 'Wheel Loader High-Dump', role: 'Pemuatan Truk Dinding Tinggi di Pelabuhan Kargo' },
    ];

    for (let i = 0; i < count; i++) {
      const u = units[i % units.length];
      const r = regions[i % regions.length];
      const generatedSlug = `sewa-${u.name.toLowerCase().replace(/\s+/g, '-')}-${r.toLowerCase().replace(/\s+/g, '-')}-${Date.now().toString().slice(-4)}`;
      candidates.push({
        slug: generatedSlug,
        keyword: `sewa ${u.name.toLowerCase()} ${r.toLowerCase()}`,
        title: `Sewa ${u.name} di ${r}: Solusi Proyek ${u.role}`,
        metaDescription: `Layanan rental sewa ${u.name} siap kerja di wilayah ${r} dan sekitarnya. Unit terawat, operator bersertifikat SIO, dan dukungan teknisi siaga.`,
        h1: `Sewa ${u.name} di ${r} untuk Kebutuhan ${u.role}`,
        category: 'Sewa Alat Berat',
        tags: [`#sewa-${u.name.toLowerCase().replace(/\s+/g, '-')}`, `#alat-berat-${r.toLowerCase().replace(/\s+/g, '-')}`, '#rental-proyek'],
        image: '/images/services/sewa-alat-berat.webp',
        imageAlt: `Unit ${u.name} beroperasi di proyek ${r}`,
        imageCaption: `Armada ${u.name} siap mobilisasi ke lokasi kerja Anda di ${r}.`,
        relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
        leadParagraph: `Kebutuhan alat berat spesifik seperti ${u.name} di wilayah ${r} memerlukan dukungan armada tangguh dan operator berpengalaman guna memastikan target pekerjaan tercapai sesuai jadwal.`,
        sections: [
          {
            heading: `Kebutuhan Spesifikasi & Keunggulan ${u.name} di Lapangan`,
            content: [
              `Operasional pekerjaan ${u.role.toLowerCase()} menuntut keandalan hidrolik dan mesin diesel bertenaga prima. Unit kami telah melalui inspeksi berkala sebelum dikirim ke area kerja di ${r}.`,
            ],
            highlights: [
              'Inspeksi menyeluruh sistem hidrolik, kelistrikan, dan mesin diesel sebelum mobilisasi.',
              'Operator berpengalaman dengan sertifikasi K3 resmi.',
              'Jaminan respon teknisi siaga bila terjadi gangguan teknis.',
            ],
          },
        ],
        faqs: [
          {
            question: `Berapa lama estimasi mobilisasi ${u.name} ke ${r}?`,
            answer: `Waktu mobilisasi berkisar 1–3 hari tergantung jarak dari hub logistik kami ke titik proyek kerja Anda.`,
          },
        ],
      });
    }
  }

  const toPublish = candidates.slice(0, count);
  const todayDate = getTodayDateString();

  console.log(`[ARTICLE-GENERATOR] Adding ${toPublish.length} articles for publication on ${todayDate}:`);
  toPublish.forEach((p, idx) => {
    console.log(`  ${idx + 1}. [${p.slug}] ${p.h1}`);
  });

  // Format new articles code
  const newArticlesCode = toPublish.map((art) => {
    return `  {
    slug: '${art.slug}',
    title: ${JSON.stringify(art.title)},
    metaDescription: ${JSON.stringify(art.metaDescription)},
    h1: ${JSON.stringify(art.h1)},
    leadParagraph: ${JSON.stringify(art.leadParagraph)},
    image: '${art.image}',
    imageAlt: ${JSON.stringify(art.imageAlt)},
    imageCaption: ${JSON.stringify(art.imageCaption)},
    category: '${art.category}',
    tags: ${JSON.stringify(art.tags)},
    relatedService: { label: '${art.relatedService.label}', href: '${art.relatedService.href}' },
    datePublished: '${todayDate}',
    dateModified: '${todayDate}',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: ${JSON.stringify(art.sections, null, 6)},
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description: 'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: ${JSON.stringify(art.faqs, null, 6)},
    internalLinks: [
      {
        anchorText: 'layanan sewa alat berat proyek konstruksi',
        href: '/sewa-alat-berat/',
        context: 'Konsultasikan ketersediaan unit dan jadwal mobilisasi di',
      },
      {
        anchorText: 'pencarian suku cadang spare part alat berat',
        href: '/spare-part-alat-berat/',
        context: 'Komponen mesin diesel, filter, dan seal silinder tersedia di',
      },
      {
        anchorText: 'service perbaikan teknisi alat berat panggilan',
        href: '/service-alat-berat/',
        context: 'Penanganan keluhan mesin dan hidrolik lapangan dapat diajukan di',
      },
      {
        anchorText: 'pengajuan penawaran resmi via WhatsApp',
        href: '/kontak/',
        context: 'Dapatkan rincian penawaran tertulis dengan menghubungi',
      },
    ],
  }`;
  }).join(',\n');

  // Insert before `];\n\nexport function getAllPublishedArticles`
  const targetSplit = '];\n\nexport function getAllPublishedArticles';
  const splitIndex = fileContent.indexOf(targetSplit);
  if (splitIndex === -1) {
    console.error('Could not find target insertion point in articlesData.ts');
    process.exit(1);
  }

  const prefix = fileContent.substring(0, splitIndex).trimEnd();
  const separator = prefix.endsWith(',') ? '\n' : ',\n';
  const updatedContent = prefix + separator + newArticlesCode + '\n' + fileContent.substring(splitIndex);

  fs.writeFileSync(articlesDataPath, updatedContent, 'utf8');
  console.log(`[ARTICLE-GENERATOR] Successfully updated ${articlesDataPath} with ${toPublish.length} new articles!`);
}

// Run CLI
const args = process.argv.slice(2);
let count = 3;
const countIdx = args.indexOf('--count');
if (countIdx !== -1 && args[countIdx + 1]) {
  count = parseInt(args[countIdx + 1], 10);
}

generateDailyArticles(count);
