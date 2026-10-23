export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface LocationTableRow {
  region: string;
  hubCity: string;
  dominantProjects: string;
  mobilizationMode: string;
  estimatedLeadTime: string;
  unitAvailability: string;
}

export interface ArticleSection {
  heading: string; // H2
  content: string[];
  subsections?: {
    heading: string; // H3
    content: string;
  }[];
  highlights?: string[];
}

export interface SeoArticle {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  leadParagraph: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  category: string;
  tags: string[];
  relatedService: { label: string; href: string };
  datePublished: string;
  dateModified: string;
  author: string;
  sections: ArticleSection[];
  locationTable: {
    heading: string; // H2
    description: string;
    rows: LocationTableRow[];
  };
  faqs: ArticleFaq[];
  internalLinks: {
    anchorText: string;
    href: string;
    context: string;
  }[];
}

export const INDONESIA_PROJECT_LOCATIONS: LocationTableRow[] = [
  {
    region: 'Jawa Timur & Madura',
    hubCity: 'Surabaya, Malang, Gresik, Banyuwangi, Probolinggo',
    dominantProjects: 'Jalan tol, cut & fill perumahan, galian drainase, pelabuhan, kawasan industri',
    mobilizationMode: 'Trailer Lowbed / Tronton Self-Loader',
    estimatedLeadTime: '1 - 2 Hari',
    unitAvailability: 'Ready Unit (Hub Malang & Surabaya)',
  },
  {
    region: 'Jawa Tengah & DI Yogyakarta',
    hubCity: 'Semarang, Solo, Cilacap, Kudus, Yogyakarta',
    dominantProjects: 'Konstruksi infrastruktur, normalisasi sungai, waduk & penyiapan lahan industri',
    mobilizationMode: 'Trailer Lowbed 40-50 Ton',
    estimatedLeadTime: '1 - 3 Hari',
    unitAvailability: 'Ready Unit (Jalur Pantura & Selatan)',
  },
  {
    region: 'DKI Jakarta & Banten',
    hubCity: 'Jakarta, Tangerang, Cilegon, Serang',
    dominantProjects: 'Pondasi gedung bertingkat, pengerukan dermaga, jalan tol & pelebaran jalan',
    mobilizationMode: 'Towing Khusus / Flatbed Trailer',
    estimatedLeadTime: '1 - 2 Hari',
    unitAvailability: 'Ready Unit Terjadwal',
  },
  {
    region: 'Jawa Barat',
    hubCity: 'Bandung, Bekasi, Karawang, Subang, Cirebon',
    dominantProjects: 'Kawasan industri manufaktur, cut and fill pergudangan, drainase kota',
    mobilizationMode: 'Trailer Lowbed Multi-Axle',
    estimatedLeadTime: '1 - 2 Hari',
    unitAvailability: 'Ready Unit (Akses Cikampek - Cipali)',
  },
  {
    region: 'Sumatera Bagian Selatan',
    hubCity: 'Palembang, Lampung, Jambi, Bengkulu',
    dominantProjects: 'Perkebunan kelapa sawit, tambang batubara, jalan tol Trans-Sumatera',
    mobilizationMode: 'Lowbed Darat / Kapal Roro Penyeberangan',
    estimatedLeadTime: '2 - 4 Hari',
    unitAvailability: 'Unit Siap Mobilisasi',
  },
  {
    region: 'Sumatera Bagian Tengah & Utara',
    hubCity: 'Medan, Pekanbaru, Dumai, Padang, Batam',
    dominantProjects: 'Land clearing kelapa sawit, hauling road, infrastruktur energi & pelabuhan',
    mobilizationMode: 'Tongkang Landing Craft Tank (LCT) & Trailer',
    estimatedLeadTime: '3 - 6 Hari',
    unitAvailability: 'Konfirmasi Jadwal Rute',
  },
  {
    region: 'Kalimantan Timur & IKN',
    hubCity: 'Balikpapan, Samarinda, Penajam Paser Utara (IKN)',
    dominantProjects: 'Pembangunan IKN Nusantara, cut & fill lereng bukit, hauling tambang batubara',
    mobilizationMode: 'Kapal Tongkang LCT & Lowbed Trailer',
    estimatedLeadTime: '4 - 7 Hari',
    unitAvailability: 'Armada Khusus Proyek IKN',
  },
  {
    region: 'Kalimantan Selatan & Tengah',
    hubCity: 'Banjarmasin, Banjarbaru, Palangkaraya, Sampit',
    dominantProjects: 'Pertambangan batubara, perkebunan kelapa sawit & normalisasi alur sungai',
    mobilizationMode: 'Kapal LCT Antar-Pulau / Lowbed',
    estimatedLeadTime: '4 - 7 Hari',
    unitAvailability: 'Konfirmasi Kesiapan Armada',
  },
  {
    region: 'Kalimantan Barat',
    hubCity: 'Pontianak, Ketapang, Singkawang',
    dominantProjects: 'Pertambangan bauksit, smelter, pembukaan perkebunan & jalan poros',
    mobilizationMode: 'Tongkang LCT & Tronton Darat',
    estimatedLeadTime: '5 - 8 Hari',
    unitAvailability: 'Unit Mobilisasi Terkoordinasi',
  },
  {
    region: 'Sulawesi Selatan & Barat',
    hubCity: 'Makassar, Parepare, Mamuju, Palopo',
    dominantProjects: 'Jalur kereta api, jalan trans Sulawesi, bendungan & dermaga kargo',
    mobilizationMode: 'Kapal Roro / LCT & Lowbed Trailer',
    estimatedLeadTime: '4 - 6 Hari',
    unitAvailability: 'Siap Kirim Via Hub Makassar',
  },
  {
    region: 'Sulawesi Tengah & Tenggara',
    hubCity: 'Palu, Kendari, Morowali, Kolaka',
    dominantProjects: 'Smelter nikel, cut & fill kawasan industri hilirisasi, jetty pelabuhan tambang',
    mobilizationMode: 'Kapal Tongkang LCT Langsung ke Jetty Proyek',
    estimatedLeadTime: '5 - 8 Hari',
    unitAvailability: 'Spesifikasi Kerja Berat (Heavy-Duty)',
  },
  {
    region: 'Bali & Nusa Tenggara',
    hubCity: 'Denpasar, Mataram, Sumbawa, Kupang',
    dominantProjects: 'Pariwisata, resort perbukitan, bandara, jalan bypass & bendungan irigasi',
    mobilizationMode: 'Kapal Roro Penyeberangan & Self-Loader',
    estimatedLeadTime: '2 - 5 Hari',
    unitAvailability: 'Ready Unit Wilayah Bali - NTB',
  },
  {
    region: 'Maluku & Papua',
    hubCity: 'Ambon, Ternate, Sorong, Timika, Jayapura',
    dominantProjects: 'Pertambangan emas & tembaga, jalan Trans Papua, pelabuhan perikanan',
    mobilizationMode: 'Kapal Cargo Khusus / Tongkang LCT Charter',
    estimatedLeadTime: '7 - 14 Hari',
    unitAvailability: 'Sewa Jangka Panjang / Kontrak Proyek',
  },
];

export const INITIAL_SEO_ARTICLES: SeoArticle[] = [
  {
    slug: 'sewa-excavator-pc200-proyek-indonesia',
    title: 'Sewa Excavator PC200 Proyek Indonesia: Tarif & Spesifikasi Lengkap',
    metaDescription:
      'Panduan lengkap sewa excavator PC200 untuk proyek konstruksi dan galian tanah di Indonesia. Cek estimasi tarif per jam, kapasitas bucket, dan tabel mobilisasi wilayah.',
    h1: 'Sewa Excavator PC200 untuk Proyek Konstruksi & Galian Tanah Se-Indonesia',
    leadParagraph:
      'Excavator kelas 20 ton seperti Komatsu PC200, Caterpillar 320, dan Kobelco SK200 merupakan tulang punggung pekerjaan tanah di Indonesia. Kapasitas bucket standar 0.8 hingga 1.0 m³ menjadikannya pilihan paling seimbang antara efisiensi bahan bakar, kecepatan siklus penggalian, dan kemudahan mobilisasi dengan trailer lowbed ke berbagai daerah proyek.',
    image: '/images/services/sewa-alat-berat.webp',
    imageAlt: 'Unit excavator PC200 melakukan penggalian tanah dan perataan lahan proyek',
    imageCaption: 'Excavator PC200 standar 20 ton dengan bucket 0.9 m³ siap mobilisasi ke lokasi proyek.',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-excavator', '#excavator-pc200', '#alat-berat-indonesia', '#mobilisasi-lowbed'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Karakteristik & Keunggulan Excavator PC200 untuk Berbagai Sektor',
        content: [
          'Dalam manajemen proyek konstruksi modern, excavator kelas 20 ton dirancang untuk menangani beban operasional berat harian secara terus menerus. Unit ini mampu menghasilkan daya gali arm dan bucket yang kuat berkat mesin diesel bertekanan injeksi tinggi dengan konsumsi solar rata-rata 14–18 liter per jam operasi.',
          'Keunggulan utama PC200 meliputi kestabilan track crawler di medan berlumpur, kedalaman gali vertikal mencapai 6.6 meter, serta radius jangkauan galian hingga 9.8 meter. Hal ini menjadikannya sangat ideal untuk penyiapan subgrade jalan tol, galian basement gedung, pembuatan saluran drainase primer, hingga pekerjaan pembersihan lahan tambang.',
        ],
        subsections: [
          {
            heading: 'Spesifikasi Kunci Excavator Kelas 20 Ton',
            content:
              'Bobot operasi berkisar 20.000–21.500 kg, tenaga mesin rata-rata 138–168 HP pada 2.000 RPM, kapasitas bucket standar 0.8–1.0 m³, dan tekanan sistem hidrolik utama mencapai 37.3 MPa.',
          },
        ],
        highlights: [
          'Kapasitas angkut bucket optimal untuk memuat dump truck indeks 8–24 m³ dalam 4–6 siklus.',
          'Dilengkapi sistem pendingin oli hidrolik heavy-duty untuk iklim tropis Indonesia.',
          'Dukungan ketersediaan suku cadang dan mekanik terlatih di seluruh kota besar.',
        ],
      },
      {
        heading: 'Faktor yang Menentukan Struktur Biaya Sewa Excavator PC200',
        content: [
          'Tarif sewa excavator di lapangan umumnya dihitung berdasarkan skema jam kerja (hourly basis) dengan ketentuan minimum pemakaian harian (biasanya 50–100 jam per kontrak), atau skema bulanan (monthly basis) untuk proyek jangka panjang.',
          'Komponen penentu total biaya sewa yang perlu disepakati sebelum serah terima unit di antaranya:',
        ],
        highlights: [
          'Skema Sewa: Lepas kunci (unit saja) atau include operator berpengalaman dan bersertifikat SIO.',
          'Bahan Bakar Solar: Skema exclude solar (BBM ditanggung penyewa di lokasi) atau include solar industri resmi.',
          'Biaya Mobilisasi & Demobilisasi: Tergantung jarak tempuh trailer lowbed dari depot Sentra Alat Berat ke titik proyek.',
          'Ketentuan Overtime: Perhitungan jam lembur operator dan batas toleransi jam servis mesin.',
        ],
      },
      {
        heading: 'Panduan Checklist Sebelum Menerima Unit Excavator di Lapangan',
        content: [
          'Sebelum menandatangani berita acara serah terima unit (BAST), pastikan supervisor proyek Anda memeriksa kondisi fisik berikut bersama mekanik:',
          '1. Periksa jam kerja (hour meter) aktual dan bandingkan dengan kontrak kerja.',
          '2. Cek kebocoran pada silinder boom, silinder arm, silinder bucket, dan main control valve.',
          '3. Amati keausan gigi bucket (bucket teeth), pin bushing, dan kondisi kelonggaran swing bearing.',
          '4. Periksa kekencangan rantai track shoe, keausan roller, sprocket, dan ketebalan idler.',
        ],
      },
    ],
    locationTable: {
      heading: 'Jangkauan Mobilisasi Sewa Excavator PC200 Se-Indonesia',
      description:
        'Sentra Alat Berat melayani pengiriman armada excavator PC200 ke berbagai pusat proyek strategis di seluruh Indonesia dengan armada trailer lowbed darat dan kapal tongkang LCT:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
        question: 'Berapa rata-rata minimum jam sewa untuk excavator PC200?',
        answer:
          'Umumnya minimum sewa adalah 50 jam untuk proyek jangka pendek, dan 200 jam untuk kontrak bulanan. Ketentuan ini dapat dinegosiasikan sesuai jadwal dan skala proyek Anda.',
      },
      {
        question: 'Apakah biaya mobilisasi lowbed ditanggung oleh penyewa?',
        answer:
          'Ya, biaya mobilisasi (antar) dan demobilisasi (tarik) unit menggunakan trailer lowbed dihitung secara transparan berdasarkan jarak depot ke lokasi kerja dan dibayarkan saat mobilisasi dimulai.',
      },
      {
        question: 'Bagaimana jika unit excavator mengalami kerusakan hidrolik atau mesin di lokasi proyek?',
        answer:
          'Sentra Alat Berat menyediakan layanan teknisi mekanik panggilan cepat. Kerusakan akibat keausan wajar komponen ditangani langsung oleh tim kami tanpa menghitung durasi perbaikan sebagai jam sewa aktif (jam mati/breakdown time tidak dihitung).',
      },
      {
        question: 'Apakah unit bisa disewa include dengan operator bersertifikat SIO?',
        answer:
          'Bisa. Kami menyediakan operator berpengalaman dengan sertifikasi SIO (Surat Izin Operator) resmi dari Kementerian Ketenagakerjaan untuk menjamin keselamatan kerja K3 di area proyek.',
      },
    ],
    internalLinks: [
      {
        anchorText: 'layanan sewa alat berat proyek konstruksi',
        href: '/sewa-alat-berat/',
        context: 'Pelajari seluruh ragam armada dan skema persewaan unit kami di',
      },
      {
        anchorText: 'jual spare part alat berat dan seal hidrolik',
        href: '/spare-part-alat-berat/',
        context: 'Kebutuhan filter, bucket teeth, hose hidrolik, dan undercarriage tersedia di',
      },
      {
        anchorText: 'service perbaikan hidrolik dan mesin excavator',
        href: '/service-alat-berat/',
        context: 'Penanganan keluhan mesin overheating atau silinder bocor dapat dikonsultasikan di',
      },
      {
        anchorText: 'pengadaan unit alat berat baru dan rekondisi',
        href: '/jual-alat-berat/',
        context: 'Jika Anda berencana menambah aset unit kerja permanen, simak opsi',
      },
    ],
  },
  {
    slug: 'sewa-bulldozer-d85-pembukaan-lahan',
    title: 'Sewa Bulldozer D85 Pembukaan Lahan: Tarif & Spesifikasi Land Clearing',
    metaDescription:
      'Sewa bulldozer D85 untuk pekerjaan pembukaan lahan (land clearing), perataan cut & fill, dan pembuatan jalan tambang di Indonesia. Cek estimasi biaya dan tabel jangkauan wilayah.',
    h1: 'Tarif Sewa Bulldozer D85 untuk Land Clearing & Pekerjaan Tanah Se-Indonesia',
    leadParagraph:
      'Bulldozer kelas 20 hingga 28 ton seperti Komatsu D85ESS-2 dan Caterpillar D6R merupakan alat berat utama untuk mendorong material tanah volume besar, merobohkan vegetasi pembukaan lahan, serta membentuk kontur jalan hauling tambang dan perkebunan di berbagai pelosok Indonesia.',
    image: '/images/units/bulldozer.webp',
    imageAlt: 'Unit bulldozer D85 melakukan dorongan material dan perataan tanah',
    imageCaption: 'Bulldozer D85 dengan straight-tilt blade dan undercarriage heavy-duty siap kerja lapangan.',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-bulldozer', '#bulldozer-d85', '#land-clearing', '#pekerjaan-tanah'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Peran Krusial Bulldozer D85 pada Tahap Awal Proyek',
        content: [
          'Setiap proyek infrastruktur jalan, perkebunan kelapa sawit, maupun penambangan mineral diawali dengan fase land clearing dan perataan permukaan (stripping & grubbing). Pada fase ini, traksi tinggi dan tenaga dorong mesin diesel menjadi penentu kecepatan jadwal kerja.',
          'Bulldozer D85 dilengkapi blade bertipe semi-U atau straight-tilt dengan kapasitas dorong 4.4 hingga 5.2 m³ per lintasan. Rangka sasis yang kokoh serta konfigurasi track roller tahan benturan memastikan alat mampu menumbangkan pohon, memotong tonjolan bukit tanah, dan menghamparkan timbunan secara merata.',
        ],
        subsections: [
          {
            heading: 'Kemampuan Ripper pada Lapangan Keras & Berbatu',
            content:
              'Untuk area dengan formasi tanah liat padat atau batuan lunak yang sulit digali langsung, bulldozer D85 dapat dipasangi attachment multi-shank atau giant ripper di bagian belakang guna meretakkan lapisan tanah sebelum didorong.',
          },
        ],
        highlights: [
          'Tenaga mesin berkisar 200–225 HP pada putaran mesin rendah untuk efisiensi torsi dorong.',
          'Konstruksi blade baja wear-resistant tahan abrasi kerikil dan pasir tajam.',
          'Sistem kendali hidrolik ergonomis untuk meminimalkan kelelahan operator pada shift panjang.',
        ],
      },
      {
        heading: 'Perhitungan Biaya Sewa Bulldozer & Kebutuhan Logistik',
        content: [
          'Karena bobot operasional bulldozer D85 mencapai sekitar 20–22 ton tanpa blade (dan bertambah dengan blade serta ripper), mobilisasi membutuhkan trailer lowbed khusus berkapasitas minimal 40 ton.',
          'Perencanaan sewa yang matang mencakup kesiapan rute jembatan dan radius belokan jalan desa menuju area proyek, ketersediaan tangki solar genset/tandon di basecamp penyewa, serta ketersediaan pelumas hidrolik berkala.',
        ],
      },
    ],
    locationTable: {
      heading: 'Jangkauan & Estimasi Mobilisasi Sewa Bulldozer Se-Indonesia',
      description:
        'Sentra Alat Berat melayani mobilisasi bulldozer D85 ke lokasi proyek perkebunan, pertambangan, dan infrastruktur di seluruh pulau Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
        question: 'Berapa kapasitas blade bulldozer D85 untuk pekerjaan dorong tanah?',
        answer:
          'Kapasitas blade berkisar antara 4.4 m³ hingga 5.2 m³ tergantung tipe pisau (Straight Tilt atau Semi-U Blade), mampu mendorong puluhan ton material tanah dalam satu siklus kerja.',
      },
      {
        question: 'Apakah bulldozer D85 cocok untuk lahan gambut atau berlumpur basah?',
        answer:
          'Untuk area tanah sangat lunak atau rawa gambut, kami merekomendasikan varian D85P (Low Ground Pressure / LGP) yang memiliki track shoe lebih lebar agar unit tidak mudah amblas.',
      },
      {
        question: 'Berapa estimasi konsumsi solar harian bulldozer D85?',
        answer:
          'Rata-rata konsumsi solar bulldozer D85 adalah 18–25 liter per jam kerja aktif, tergantung pada kerapatan tanah dan penggunaan ripper di lapangan.',
      },
    ],
    internalLinks: [
      {
        anchorText: 'katalog rental sewa alat berat',
        href: '/sewa-alat-berat/',
        context: 'Cek ketersediaan bulldozer, excavator, dan compactor di',
      },
      {
        anchorText: 'suku cadang rantai track shoe dan undercarriage bulldozer',
        href: '/spare-part-alat-berat/',
        context: 'Kebutuhan track link, roller, dan sprocket cadangan dapat dipesan di',
      },
      {
        anchorText: 'service mesin diesel alat berat',
        href: '/service-alat-berat/',
        context: 'Untuk perawatan transmisi torqflow dan mesin diesel bulldozer, hubungi',
      },
      {
        anchorText: 'kontak pengajuan penawaran sewa proyek',
        href: '/kontak/',
        context: 'Dapatkan surat penawaran harga resmi dengan menghubungi',
      },
    ],
  },
  {
    slug: 'daftar-harga-sewa-alat-berat-lengkap',
    title: 'Daftar Lengkap Harga Sewa Alat Berat 2026: Excavator, Loader & Grader',
    metaDescription:
      'Daftar referensi harga sewa alat berat terbaru 2026 untuk excavator, bulldozer, wheel loader, vibro roller, motor grader, dan dump truck di Indonesia. Lengkap dengan tabel estimasi mobilisasi.',
    h1: 'Daftar Lengkap Harga Sewa Alat Berat 2026: Excavator, Loader, Grader, Vibro & Dump Truck',
    leadParagraph:
      'Perencanaan Rencana Anggaran Biaya (RAB) proyek infrastruktur dan pertambangan menuntut estimasi biaya sewa alat berat yang realistis dan transparan. Berikut rangkuman referensi tarif sewa alat berat per jam, per hari, dan per bulan untuk mempermudah perhitungan pengadaan armada kerja proyek Anda.',
    image: '/images/hero/hero-alat-berat.webp',
    imageAlt: 'Jajaran armada alat berat excavator, bulldozer, dan wheel loader di proyek konstruksi',
    imageCaption: 'Kombinasi armada alat berat terpadu untuk percepatan penyelesaian target volume proyek.',
    category: 'Panduan Biaya',
    tags: ['#harga-sewa-alat-berat', '#rab-proyek', '#tarif-alat-berat-2026', '#biaya-sewa-excavator'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Rentang Tarif Sewa Alat Berat Utama Berdasarkan Tipe Unit',
        content: [
          'Tarif sewa alat berat bervariasi bergantung pada kapasitas tonase mesin, tahun perakitan, kondisi medan kerja, serta lokasi pengiriman. Berikut perkiraan rentang tarif pasar standar industri alat berat:',
          '1. Excavator Mini (PC50 - PC78): Rp 140.000 - Rp 180.000 / jam (Ideal untuk drainase kota & ruang sempit).',
          '2. Excavator Standar 20 Ton (PC200 / CAT 320): Rp 175.000 - Rp 230.000 / jam (Tulang punggung proyek cut & fill).',
          '3. Excavator Long Arm: Rp 250.000 - Rp 330.000 / jam (Untuk normalisasi tanggul sungai & pengerukan danau).',
          '4. Bulldozer D85: Rp 260.000 - Rp 350.000 / jam (Land clearing & dorong timbunan tanah masif).',
          '5. Wheel Loader 2.0 - 3.0 m³: Rp 160.000 - Rp 220.000 / jam (Pemuatan agregat di crusher plant & stockpile).',
          '6. Vibro Roller 10 - 12 Ton: Rp 150.000 - Rp 200.000 / jam (Pemadatan lapis pondasi agregat kelas A/B).',
          '7. Motor Grader: Rp 220.000 - Rp 290.000 / jam (Pembentukan kemiringan badan jalan & perawatan hauling road).',
          '8. Dump Truck Tronton 24 m³: Rp 35.000.000 - Rp 50.000.000 / bulan atau skema borongan per ritase.',
        ],
      },
      {
        heading: 'Komponen Tambahan dalam Kontrak Sewa Alat Berat',
        content: [
          'Untuk mencegah pembengkakan anggaran tak terduga, perhatikan komponen operasional berikut yang biasanya dicantumkan dalam surat perjanjian sewa:',
          '• Uang Makan & Insentif Operator: Umumnya berkisar Rp 150.000 - Rp 250.000 per hari kerja (shift 8 jam).',
          '• Biaya Bahan Bakar Solar: Pastikan mutu solar industri bebas kontaminasi air agar injector mesin diesel tidak macet.',
          '• Asuransi Unit & Akomodasi: Penyewa bertanggung jawab atas keamanan armada di lokasi kerja proyek.',
        ],
      },
    ],
    locationTable: {
      heading: 'Tabel Estimasi Mobilisasi Armada Alat Berat Se-Indonesia',
      description:
        'Cakupan mobilisasi alat berat Sentra Alat Berat dari hub operasional kami ke titik proyek seluruh Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
        question: 'Apakah tarif di atas sudah termasuk bahan bakar solar?',
        answer:
          'Sebagian besar tarif dasar sewa alat berat belum termasuk bahan bakar solar (exclude BBM), sehingga penyewa menyediakan solar industri resmi di lokasi kerja. Namun skema include BBM juga dapat disediakan sesuai kesepakatan tertulis.',
      },
      {
        question: 'Bagaimana mekanisme pembayaran sewa alat berat untuk perusahaan/kontraktor?',
        answer:
          'Skema pembayaran umum meliputi uang muka (down payment) mobilisasi dan pembayaran sewa di awal periode (misal 50 jam atau 100 jam pertama), dilanjutkan pembayaran berkala berdasarkan lembar time sheet kerja harian.',
      },
      {
        question: 'Apakah ada diskon tarif untuk sewa jangka panjang (di atas 6 bulan)?',
        answer:
          'Tentu. Untuk sewa kontrak proyek jangka panjang (multi-month contract), Sentra Alat Berat memberikan penawaran tarif khusus yang lebih ekonomis beserta jaminan teknisi siaga di lokasi.',
      },
    ],
    internalLinks: [
      {
        anchorText: 'sewa alat berat terpercaya untuk proyek',
        href: '/sewa-alat-berat/',
        context: 'Ajukan rincian jadwal dan spesifikasi armada proyek Anda di',
      },
      {
        anchorText: 'jual spare part suku cadang alat berat',
        href: '/spare-part-alat-berat/',
        context: 'Perawatan berkala membutuhkan dukungan filter dan suku cadang asli dari',
      },
      {
        anchorText: 'layanan service dan perbaikan teknisi alat berat',
        href: '/service-alat-berat/',
        context: 'Dukungan mekanik siaga untuk inspeksi rutin dapat diakses melalui',
      },
      {
        anchorText: 'konsultasi langsung via WhatsApp',
        href: '/kontak/',
        context: 'Untuk simulasi RAB kebutuhan alat berat dan estimasi mobilisasi, silakan',
      },
    ],
  },
  {
    slug: 'sewa-wheel-loader-batching-plant-quarry',
    title: "Sewa Wheel Loader 2–3 m³ untuk Batching Plant & Quarry Tambang Se-Indonesia",
    metaDescription: "Panduan sewa wheel loader kapasitas bucket 2 hingga 3 m³ untuk pemuatan material agregat di batching plant, crusher, dan quarry tambang Indonesia.",
    h1: "Sewa Wheel Loader 2–3 m³ untuk Operasional Batching Plant & Quarry Se-Indonesia",
    leadParagraph: "Wheel loader dengan kapasitas bucket 2.0 hingga 3.2 m³ (seperti Komatsu WA320/WA380 dan Caterpillar 950) merupakan unit pemindah material paling efisien pada stockpile pelabuhan, batching plant beton cor, serta tambang galian C. Mobilitas ban karet berkecepatan tinggi memungkinkan rotasi kerja cepat tanpa merusak landasan jalan aspal.",
    image: '/images/units/wheel-loader.webp',
    imageAlt: "Unit wheel loader memuat material pasir dan batu ke dump truck di area batching plant",
    imageCaption: "Wheel loader kelas 3 m³ siap melayani siklus pemuatan cepat di stockpile dan quarry.",
    category: 'Sewa Alat Berat',
    tags: ["#sewa-wheel-loader","#wheel-loader-quarry","#batching-plant","#alat-berat-indonesia"],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
            "heading": "Karakteristik Operasional Wheel Loader di Area Proyek Agregat",
            "content": [
                  "Dalam lingkungan produksi beton ready-mix maupun crusher batu split, cycle time pemuatan material menjadi faktor penentu output volume per jam. Wheel loader modern dilengkapi transmisi powershift otomatis dan sistem hidrolik responsif yang mampu mengisi bucket penuh dalam hitungan detik.",
                  "Kemampuan bermanuver di ruang sempit berkat artikulasi bodi hingga 40 derajat membuat unit ini sangat fleksibel berpindah antar bin agregat tanpa manuver berbelit."
            ],
            "highlights": [
                  "Kapasitas angkat statis 10–14 ton dengan kestabilan counterweight optimal.",
                  "Pilihan ban kerja tipe L3 untuk tanah keras atau L5 tahan sayatan batu tajam.",
                  "Kabin ber-AC dengan visibilitas 360 derajat untuk keselamatan kerja tinggi."
            ]
      },
      {
            "heading": "Struktur Biaya & Tips Efisiensi Sewa Wheel Loader",
            "content": [
                  "Tarif sewa wheel loader umumnya berkisar antara Rp 160.000 hingga Rp 230.000 per jam kerja aktif tergantung kapasitas bucket dan jam operasi harian. Untuk efisiensi biaya bahan bakar, pastikan operator memahami teknik pemuatan satu dorongan (single-pass loading) guna menghemat konsumsi solar."
            ]
      }
],
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description: 'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
            "question": "Berapa kapasitas bucket standar wheel loader untuk proyek jalan dan beton?",
            "answer": "Kapasitas paling populer di Indonesia adalah 2.0 m³ hingga 3.0 m³ dengan berat operasi sekitar 10–18 ton, sangat seimbang untuk memuat dump truck 8–24 m³."
      },
      {
            "question": "Apakah ban wheel loader tahan terhadap bebatuan tajam di area quarry?",
            "answer": "Unit kami dapat disesuaikan dengan ban tipe L5 deep tread rock lug atau dilengkapi rantai pelindung ban (tire protection chain) jika dioperasikan pada batuan andesit tajam."
      }
],
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
  },
  {
    slug: 'sewa-vibro-roller-pemadatan-jalan',
    title: "Sewa Vibro Roller 10–12 Ton untuk Pemadatan Subgrade & Pondasi Jalan",
    metaDescription: "Tarif sewa vibro roller single drum 10 hingga 12 ton untuk proyek pengaspalan, pemadatan tanah timbunan, dan subgrade jalan tol se-Indonesia.",
    h1: "Sewa Vibro Roller 10–12 Ton untuk Pemadatan Tanah & Pondasi Jalan Se-Indonesia",
    leadParagraph: "Pencapaian nilai California Bearing Ratio (CBR) dan kepadatan proctor standar pada tanah timbunan serta lapis pondasi agregat membutuhkan compactor drum getar berdaya tekan dinamis tinggi. Vibro roller kelas 10–12 ton adalah pilihan utama kontraktor jalan raya di seluruh Indonesia.",
    image: '/images/units/vibro-roller.webp',
    imageAlt: "Vibro roller melakukan pemadatan lapis pondasi jalan raya dengan drum getar",
    imageCaption: "Vibro roller 12 ton single drum smooth siap mencapai target kepadatan CBR laboratorium.",
    category: 'Sewa Alat Berat',
    tags: ["#sewa-vibro-roller","#compactor-10-ton","#pemadatan-jalan","#proyek-infrastruktur"],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
            "heading": "Pentingnya Frekuensi & Amplitudo Getaran pada Pemadatan",
            "content": [
                  "Kepadatan struktur tanah tidak hanya ditentukan oleh bobot mati (static linear load) drum silinder, tetapi lebih dominan oleh gaya sentrifugal getaran hidrolik. Unit vibro roller modern memiliki setelan dual-amplitude: getaran tinggi untuk tanah lempung dalam, dan getaran rendah untuk lapisan finishing atas agar permukaan tidak retak."
            ],
            "highlights": [
                  "Daya getar sentrifugal mencapai 240–300 kN untuk penetrasi pemadatan hingga kedalaman 60 cm.",
                  "Tersedia opsi padfoot / sheepfoot shell kit untuk pemadatan tanah berbutir halus dan liat basah.",
                  "Kemampuan tanjakan (gradeability) hingga 45% untuk pemadatan tanggul bendungan dan lereng."
            ]
      },
      {
            "heading": "Estimasi Tarif & Ketentuan Sewa Vibro Roller",
            "content": [
                  "Sewa vibro roller berkisar antara Rp 150.000 hingga Rp 200.000 per jam. Karena unit beroda besi tidak diperbolehkan melintasi jalan raya secara mandiri, mobilisasi lowbed atau tronton self-loader wajib disiapkan."
            ]
      }
],
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description: 'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
            "question": "Kapan harus menggunakan drum halus (smooth) dan drum padfoot (sheepfoot)?",
            "answer": "Drum halus (smooth drum) digunakan untuk pasir, kerikil, agregat base A/B, dan aspal. Drum padfoot (kaki kambing) digunakan untuk memadatkan tanah lempung basah (clay) agar udara dan air tertekan keluar."
      },
      {
            "question": "Berapa lintasan (pass) rata-rata yang diperlukan untuk mencapai target CBR?",
            "answer": "Umumnya dibutuhkan 6 hingga 8 lintasan per lapis tebal 20–30 cm gembur, diverifikasi berkala menggunakan pengujian sand cone di lapangan."
      }
],
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
  },
  {
    slug: 'sewa-motor-grader-perataan-jalan-hauling',
    title: "Sewa Motor Grader untuk Perataan Jalan Tol & Hauling Tambang Se-Indonesia",
    metaDescription: "Layanan rental motor grader pisau 12–14 kaki untuk pembentukan kemiringan drainase (camber), perataan badan jalan, dan pemeliharaan jalan tambang.",
    h1: "Sewa Motor Grader untuk Perataan Badan Jalan & Hauling Road Se-Indonesia",
    leadParagraph: "Ketepatan elevasi dan kemiringan camber jalan merupakan kunci utama drainase air agar aspal atau perkerasan tidak cepat amblas. Motor grader kelas 135–180 HP dengan pisau moldboard presisi menjamin toleransi perataan permukaan tanah dan agregat memenuhi spesifikasi teknis Bina Marga.",
    image: '/images/units/motor-grader.webp',
    imageAlt: "Motor grader meratakan lapisan tanah subgrade dengan moldboard blade",
    imageCaption: "Motor grader dengan pisau moldboard 14 kaki siap membentuk elevasi akurat.",
    category: 'Sewa Alat Berat',
    tags: ["#sewa-motor-grader","#motor-grader-tambang","#perataan-jalan","#alat-berat-proyek"],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
            "heading": "Fungsi Strategis Motor Grader pada Pekerjaan Sipil & Tambang",
            "content": [
                  "Selain membentuk kontur badan jalan pada proyek jalan tol, motor grader bekerja secara terus menerus pada jalan angkut (hauling road) pertambangan batubara dan mineral. Jalan tambang yang bergelombang meningkatkan risiko ban dump truck pecah dan boros bahan bakar. Grader menjaga permukaan tetap rata dan bebas genangan air."
            ],
            "highlights": [
                  "Rotasi moldboard 360 derajat untuk fleksibilitas pembentukan parit V dan lereng talud.",
                  "Dilengkapi ripper belakang dan scarifier tengah untuk menggaruk permukaan tanah yang mengeras.",
                  "Artikulasi sasis hidrolik untuk bermanuver di tikungan tajam proyek."
            ]
      }
],
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description: 'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
            "question": "Berapa panjang pisau (moldboard) motor grader standar?",
            "answer": "Panjang pisau standar berkisar 3.7 meter (12 kaki) hingga 4.3 meter (14 kaki) dengan bilah pemotong (cutting edge) baja tahan aus yang dapat diganti berkala."
      },
      {
            "question": "Apakah Sentra Alat Berat menyediakan operator grader berpengalaman?",
            "answer": "Ya. Mengoperasikan grader membutuhkan keahlian tinggi (art and precision) dalam membaca pasak elevasi surveyor. Semua operator grader kami berpengalaman di proyek jalan tol dan hauling."
      }
],
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
  }
];

export function getAllPublishedArticles(): SeoArticle[] {
  return INITIAL_SEO_ARTICLES;
}

export function getArticleBySlug(slug: string): SeoArticle | undefined {
  const cleanSlug = slug.replace(/^\/|\/$/g, '').replace(/^informasi-alat-berat\//, '');
  return INITIAL_SEO_ARTICLES.find((a) => a.slug === cleanSlug);
}
