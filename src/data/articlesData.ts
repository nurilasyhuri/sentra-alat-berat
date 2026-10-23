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
      'Panduan sewa excavator PC200 kelas 20 ton (Komatsu & Cat 320): estimasi tarif per jam, kapasitas bucket 0.9 m³, konsumsi solar, dan checklist serah terima unit di lapangan.',
    h1: 'Sewa Excavator PC200 untuk Proyek Konstruksi & Galian Tanah Se-Indonesia',
    leadParagraph:
      'Kalau Anda sedang menangani pekerjaan cut and fill perumahan, galian drainase kota, atau penyiapan badan jalan tol di Indonesia, excavator kelas 20 ton seperti Komatsu PC200 atau Cat 320 hampir pasti jadi pilihan pertama. Ukurannya pas: cukup bertenaga untuk mengoyak tanah lempung padat tanpa membuat biaya mobilisasi trailer lowbed membengkak.',
    image: '/images/services/sewa-alat-berat.webp',
    imageAlt: 'Unit excavator PC200 melakukan penggalian tanah dan perataan lahan proyek',
    imageCaption: 'Excavator PC200 kelas 20 ton dengan bucket 0.9 m³ siap mobilisasi ke lokasi kerja Anda.',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-excavator', '#excavator-pc200', '#alat-berat-indonesia', '#mobilisasi-lowbed'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Kenapa Excavator Kelas 20 Ton Jadi Standar Wajib di Lapangan?',
        content: [
          'Di atas kertas, excavator mini memang lincah dan excavator 30 ton ke atas punya daya keruk raksasa. Tapi di dunia nyata kontraktor Indonesia, PC200 adalah "jalan tengah" paling ekonomis. Bucket standar 0.8 hingga 1.0 m³ sanggup mengisi dump truck indeks 8 sampai 24 kubik hanya dalam 4 sampai 6 siklus putar (cycle time rata-rata 18–24 detik per ayunan).',
          'Alasan kedua adalah ketersediaan suku cadang. Dari filter solar, gigi bucket (bucket teeth), hingga seal kit hidrolik silinder, suku cadang Komatsu PC200 dan Cat 320 sangat melimpah. Jika terjadi kendala di pelosok daerah, mekanik lokal pun sudah sangat familiar dengan arsitektur mesinnya sehingga risiko proyek mandek berhari-hari bisa ditekan seminimal mungkin.',
        ],
        subsections: [
          {
            heading: 'Spesifikasi Kunci Excavator Kelas 20 Ton yang Perlu Dipahami Estimator',
            content:
              'Bobot kerja unit rata-rata 20.500 kg, jangkauan gali maksimum horizontal mencapai 9.8 meter, kedalaman gali vertikal hingga 6.6 meter, dan tenaga mesin diesel 138–168 HP pada 2.000 RPM dengan tekanan hidrolik utama mencapai 37.3 MPa.',
          },
        ],
        highlights: [
          'Konsumsi solar industri rata-rata 14–18 liter per jam operasi kerja aktif.',
          'Kapasitas tangki bahan bakar 400 liter, aman untuk operasional dua shift penuh per hari.',
          'Dimensi bodi masih ramah jalan provinsi tanpa harus membongkar arm atau counterweight saat dimuat ke trailer lowbed.',
        ],
      },
      {
        heading: 'Memahami Struktur Biaya Sewa Excavator: Jam Kerja, Operator, dan BBM',
        content: [
          'Banyak pelaksana proyek pemula terkecoh membandingkan harga sewa murni per jam tanpa memeriksa rincian klausul kontrak. Pada praktiknya di Indonesia, ada tiga komponen utama yang menentukan total pengeluaran:',
          '1. Skema Jam Kerja: Sistem sewa jam-jaman biasanya menerapkan batas minimum (misal minimum 50 atau 100 jam per kontrak). Untuk proyek jangka panjang di atas 3 bulan, beralihlah ke skema bulanan (monthly basis) dengan patokan 200 jam kerja agar tarif per jamnya jauh lebih murah.',
          '2. Skema BBM (Include vs Exclude Solar): Mayoritas persewaan alat berat menerapkan sistem lepas BBM (exclude solar), di mana penyewa wajib menyediakan solar industri resmi di lokasi kerja. Jangan coba-coba menggunakan solar oplosan atau tangki solar yang tercampur endapan air, karena injector common rail mesin modern sangat sensitif dan biaya perbaikannya bisa mencapai belasan juta rupiah.',
          '3. Uang Makan & Insentif Operator: Di luar biaya unit, operator bersertifikat SIO Kemenaker umumnya berhak atas uang makan harian (Rp 150.000 – Rp 250.000/hari) serta insentif lembur jika bekerja melebihi shift standar 8 jam.',
        ],
        highlights: [
          'Biaya mobilisasi dan demobilisasi (mob-demob) lowbed dibayarkan di awal saat armada berangkat.',
          'Pastikan ada klausul jam mogok (breakdown time) di mana jam sewa berhenti dihitung bila unit mengalami kerusakan teknis non-kelalaian penyewa.',
        ],
      },
      {
        heading: 'Checklist Mandor: Cek Fisik Unit Sebelum Tanda Tangan BAST',
        content: [
          'Saat trailer lowbed menurunkan unit di basecamp proyek Anda, jangan langsung membubuhkan tanda tangan pada Berita Acara Serah Terima (BAST). Luangkan waktu 15 menit bersama operator dan mekanik Anda untuk memeriksa poin-poin kritis berikut:',
          '• Jam Kerja Aktual (Hour Meter): Catat angka awal di speedometer kabin dan pastikan jarum indikator berjalan saat mesin berputar.',
          '• Silinder Hidrolik & Selang (Hose): Periksa batang as silinder boom, arm, dan bucket. Pastikan tidak ada baret dalam atau rembesan oli hidrolik pada seal packing.',
          '• Swing Bearing & Travel Motor: Coba putar kabin 360 derajat ke kanan dan ke kiri. Dengarkan apakah ada bunyi dengung kasar atau speleng berlebih pada bearing putar.',
          '• Kondisi Track Crawler: Amati kekencangan rantai track, keausan gigi sprocket penggerak, serta ketebalan kuku bucket (bucket teeth) agar daya gali di tanah cadas tidak loyo.',
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
        question: 'Berapa minimum jam sewa untuk excavator PC200 di Sentra Alat Berat?',
        answer:
          'Untuk proyek jangka pendek di wilayah cakupan depo kami, minimum sewa adalah 50 hingga 100 jam kerja. Untuk proyek luar pulau atau kebutuhan jangka panjang, kami menyediakan paket bulanan dengan dasar hitungan 200 jam kerja per bulan yang tarifnya jauh lebih ekonomis.',
      },
      {
        question: 'Apakah biaya mobilisasi lowbed sudah termasuk dalam harga sewa per jam?',
        answer:
          'Belum. Biaya mobilisasi (antar) dan demobilisasi (tarik pulang) trailer lowbed dihitung terpisah berdasarkan jarak tempuh kilometer, perizinan kawalan jalan raya, atau penyeberangan kapal ferry/LCT antar pulau.',
      },
      {
        question: 'Bagaimana jika unit excavator mengalami kerusakan mesin atau hidrolik di lapangan?',
        answer:
          'Kami menerapkan garansi jam sewa transparan: seluruh waktu henti akibat kendala mekanis (breakdown time) otomatis menghentikan argo jam sewa. Tim teknisi siaga kami segera meluncur ke lokasi proyek untuk perbaikan atau penukaran unit cadangan bila perbaikan membutuhkan waktu lebih dari 48 jam.',
      },
      {
        question: 'Apakah operator yang disediakan sudah memiliki sertifikat SIO resmi?',
        answer:
          'Ya. Seluruh operator Sentra Alat Berat dibekali Surat Izin Operator (SIO) aktif kelas II/I dari Kemenaker serta berpengalaman pada standar keselamatan K3 proyek jalan tol, gedung tinggi, dan tambang.',
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
      {
        anchorText: 'kontak konsultasi dan pengajuan penawaran resmi',
        href: '/kontak/',
        context: 'Untuk simulasi perhitungan RAB sewa excavator proyek Anda, silakan hubungi',
      },
    ],
  },
  {
    slug: 'sewa-bulldozer-d85-pembukaan-lahan',
    title: 'Sewa Bulldozer D85 Pembukaan Lahan: Tarif & Spesifikasi Land Clearing',
    metaDescription:
      'Panduan teknis sewa bulldozer Komatsu D85ESS-2 untuk land clearing, dorong timbunan tanah masif, dan pembuatan jalan tambang. Spesifikasi blade, ripper, dan tips lapangan.',
    h1: 'Tarif Sewa Bulldozer D85 untuk Land Clearing & Pekerjaan Tanah Se-Indonesia',
    leadParagraph:
      'Mendorong tebing tanah merah, menumbangkan tunggul pohon kelapa sawit, atau membentuk trase jalan tambang bukan pekerjaan yang bisa dituntaskan excavator sendirian. Di sinilah bulldozer kelas 20–22 ton seperti Komatsu D85ESS-2 unjuk gigi. Dengan tenaga mesin 200+ HP dan traksi rantai besi bertapak lebar, D85 sanggup meratakan ribuan kubik material per shift kerja tanpa kendur.',
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
        heading: 'Peran D85 di Garis Depan Proyek: Dari Stripping Sampai Trase Jalan',
        content: [
          'Fase awal pekerjaan sipil selalu diawali dengan pembersihan vegetasi, pengupasan tanah humus (stripping top soil), dan penimbunan lembah (cut and fill). Bulldozer D85 dirancang khusus untuk memotong tonjolan bukit tanah dan menghamparkannya lapis demi lapis dengan ketebalan yang teratur.',
          'Dilengkapi pisau Straight-Tilt Blade berkapasitas 4.4 hingga 5.2 m³, bulldozer ini sanggup memindahkan puluhan ton material dalam sekali lintasan dorong. Sudut kemiringan pisau hidrolik memungkinkan operator memotong tanah keras dengan efisiensi tinggi tanpa membebani transmisi mesin secara berlebih.',
        ],
        subsections: [
          {
            heading: 'Fungsi Ripper Belakang untuk Cadas dan Bebatuan Keras',
            content:
              'Ketika menghadapi lapisan cadas lapuk atau tanah lempung kering yang tidak mempan dipotong pisau depan, attachment Giant Ripper atau Multi-Shank Ripper di bagian belakang diturunkan untuk mencakar dan memecah struktur tanah sebelum dihamparkan oleh blade depan.',
          },
        ],
        highlights: [
          'Tenaga mesin diesel turbo 215–225 HP dengan transmisi Torqflow 3-kecepatan maju dan mundur.',
          'Bobot operasi mencapai 20.600 kg tanpa ripper, memberikan traksi tanah luar biasa tanpa selip.',
          'Pilihan track shoe bertapak lebar (tipe LGP / Low Ground Pressure) untuk tanah gambut atau area berlumpur.',
        ],
      },
      {
        heading: 'Kalkulasi Konsumsi Solar & Biaya Logistik Lowbed Bulldozer',
        content: [
          'Mengoperasikan bulldozer berdaya dorong besar membutuhkan persiapan suplai bahan bakar yang matang. Konsumsi solar D85 rata-rata berkisar antara 18 hingga 25 liter per jam kerja aktif, tergantung pada kerapatan tanah dan frekuensi pemakaian ripper cakar belakang.',
          'Untuk mobilisasi, karena bobot mati D85 melebihi 20 ton dengan lebar blade lebih dari 3.7 meter, unit harus diangkut menggunakan trailer lowbed minimal 3-axle berkapasitas 40–50 ton. Di beberapa rute jalan kabupaten dengan jembatan sempit, blade depan terkadang perlu dilepas sementara saat proses towing demi alasan keselamatan ruang jalan.',
        ],
        highlights: [
          'Pastikan akses jembatan menuju lokasi proyek memiliki kapasitas muatan sumbu terberat (MST) di atas 25 ton.',
          'Sediakan tandon solar di basecamp agar alat tidak kehilangan jam kerja produktif hanya untuk menunggu pengisian jerigen.',
        ],
      },
      {
        heading: 'Tips Mandor: Mencegah Rantai Lepas dan Final Drive Jebol',
        content: [
          'Kerusakan paling sering pada bulldozer di lokasi land clearing adalah rantai track melintir atau batu terjepit di antara sprocket dan idler. Terapkan SOP lapangan berikut:',
          '1. Periksa setelan kekencangan rantai track shoe setiap 50 jam kerja. Di tanah becek berpasir, setelan rantai tidak boleh terlalu kencang karena pasir yang menumpuk di sela link bisa membuat bushing aus prematur.',
          '2. Instruksikan operator untuk menghindari manuver belok patah berulang-ulang di atas batuan tajam; lakukan gerakan belok melengkung halus untuk menjaga keawetan track roller dan final drive.',
          '3. Bersihkan lumpur tanah liat yang mengering di kolong undercarriage setiap sore setelah shift selesai agar beban putar pagi hari tidak berat.',
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
        question: 'Berapa kapasitas dorong tanah bulldozer D85 dalam satu jam kerja?',
        answer:
          'Kapasitas produksi dorong D85 sangat tergantung pada jarak dorong (push distance). Untuk jarak dorong 20–30 meter pada tanah biasa, kapasitasnya mencapai 180–260 m³ per jam kerja aktif.',
      },
      {
        question: 'Apakah bulldozer D85 aman dioperasikan di lahan gambut atau rawa basah?',
        answer:
          'Untuk lahan rawa gambut Sumatera atau Kalimantan, kami menyediakan varian Komatsu D85P (Low Ground Pressure / LGP) dengan tapak sepatu track ekstra lebar berbentuk segitiga (swamp shoe) agar unit tidak amblas.',
      },
      {
        question: 'Berapa tarif sewa per jam untuk bulldozer D85?',
        answer:
          'Tarif sewa bulldozer D85 umumnya berada di rentang Rp 260.000 hingga Rp 350.000 per jam tergantung tahun unit, kondisi medan kerja, dan skema kontrak yang disepakati.',
      },
      {
        question: 'Apakah sewa unit sudah termasuk operator berpengalaman dorong tebing?',
        answer:
          'Bisa. Kami menyediakan operator senior spesialis land clearing dan cut and fill yang paham manuver sudut tebing dan safety clearance di area perbukitan curam.',
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
        anchorText: 'pengadaan unit alat berat baru dan rekondisi',
        href: '/jual-alat-berat/',
        context: 'Pertimbangkan investasi aset armada kerja dengan menyimak opsi',
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
      'Referensi estimasi tarif sewa alat berat 2026 di Indonesia: excavator PC200, bulldozer D85, wheel loader, vibro roller, grader, dan dump truck tronton. Transparan & realistis.',
    h1: 'Daftar Lengkap Harga Sewa Alat Berat 2026: Excavator, Loader, Grader, Vibro & Dump Truck',
    leadParagraph:
      'Menyusun Rencana Anggaran Biaya (RAB) proyek infrastruktur, perumahan, maupun pertambangan sering kali terkendala angka tarif alat berat yang tidak realistis. Jika patokan harga terlalu rendah, kontraktor akan tekor di lapangan; sebaliknya jika terlalu tinggi, proposal tender bisa kalah saing. Berikut rangkuman tarif pasar sewa alat berat 2026 di Indonesia yang biasa digunakan para estimator proyek berpengalaman.',
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
        heading: 'Tabel Estimasi Tarif Sewa Alat Berat Utama per Jam (Update 2026)',
        content: [
          'Tarif sewa di bawah merupakan patokan rata-rata pasar nasional untuk skema sewa jam-jaman (hourly basis) kondisi alat prima, belum termasuk bahan bakar solar industri dan biaya mob-demob trailer lowbed:',
          '1. Excavator Mini (PC50 – PC78): Rp 140.000 – Rp 180.000 / jam (Sangat ideal untuk saluran drainase perkotaan, fondasi pagar, dan gang sempit).',
          '2. Excavator Standar 20 Ton (PC200 / Cat 320): Rp 175.000 – Rp 230.000 / jam (Tulang punggung pekerjaan cut and fill, galian fondasi, dan normalisasi lahan).',
          '3. Excavator Long Arm (Jangkauan 15–18 m): Rp 250.000 – Rp 330.000 / jam (Solusi pengerukan lumpur sungai dari atas tanggul dan pembersihan sedimentasi waduk).',
          '4. Excavator Breaker (Rock Breaker): Rp 300.000 – Rp 420.000 / jam (Pemecahan batu kali, batuan cadas tambang, dan pembongkaran struktur beton lama).',
          '5. Bulldozer D85 (20–22 Ton): Rp 260.000 – Rp 350.000 / jam (Pekerjaan land clearing vegetasi tebal dan perataan hamparan timbunan tanah masif).',
          '6. Wheel Loader 2.0 – 3.0 m³ (WA320 / Cat 950): Rp 160.000 – Rp 220.000 / jam (Pemuatan pasir, batu split, dan agregat di batching plant serta crusher plant).',
          '7. Vibro Roller Single Drum 10–12 Ton: Rp 150.000 – Rp 200.000 / jam (Pemadatan tanah dasar subgrade dan lapis pondasi agregat kelas A/B).',
          '8. Motor Grader (Pisau 12–14 Kaki): Rp 220.000 – Rp 290.000 / jam (Pembentukan kemiringan jalan camber, parit drainase talud, dan perawatan jalan hauling tambang).',
          '9. Dump Truck Tronton 10 Roda (Indeks 24 m³): Rp 35.000.000 – Rp 50.000.000 / bulan atau sistem ritase kubikasi.',
        ],
      },
      {
        heading: 'Komponen Biaya Pendukung yang Wajib Masuk ke RAB Proyek',
        content: [
          'Agar anggaran kas proyek Anda tidak bocor di tengah jalan, pastikan estimator Anda memperhitungkan pos-pos operasional pendukung berikut:',
          '• Uang Makan & Insentif Operator: Berkisar Rp 150.000 hingga Rp 250.000 per hari kerja (shift 8 jam), ditambah uang lembur resmi bila ada target kejar tayang malam hari.',
          '• Mutu Bahan Bakar Solar: Selalu gunakan Biosolar B35 industri atau Dexlite resmi non-subsidi. Menggunakan solar murah dari penampung liar berisiko tinggi mencemari sistem injeksi bahan bakar dan menyebabkan mogok mesin.',
          '• Keamanan & Basecamp Lapangan: Tanggung jawab keamanan unit, ketersediaan gudang oli pelumas, serta pengamanan area parkir alat berat dari risiko pencurian aki atau solar di malam hari.',
        ],
        highlights: [
          'Biaya mobilisasi dan demobilisasi (mob-demob) lowbed dihitung pulang-pergi dan dibayarkan saat unit diberangkatkan.',
          'Perhatikan klausul minimum jam pemakaian: umumnya 50–100 jam untuk sewa harian/mingguan, atau 200 jam untuk kontrak bulanan.',
        ],
      },
      {
        heading: 'Kapan Sebaiknya Memilih Sewa Jam-Jaman vs Kontrak Bulanan?',
        content: [
          'Jika durasi pekerjaan Anda di bawah 20 hari atau volume galian terbatas, sistem sewa jam-jaman (hourly basis) adalah pilihan paling aman agar Anda hanya membayar jam saat alat benar-benar bekerja.',
          'Namun untuk proyek pembangunan kawasan perumahan skala luas, jalan tol, atau operasional tambang berkelanjutan di atas 2 bulan, kontrak bulanan (monthly contract) memberikan penghematan biaya hingga 25%. Pada skema bulanan, Anda juga mendapat jaminan teknisi mekanik siaga di basecamp proyek tanpa biaya panggilan tambahan.',
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
        question: 'Apakah tarif sewa alat berat di atas sudah termasuk bahan bakar solar?',
        answer:
          'Tarif dasar yang tercantum merupakan skema sewa kering (exclude BBM). Penyewa menyediakan solar industri resmi di lokasi kerja. Namun kami juga menyediakan opsi paket sewa basah (include solar) untuk kemudahan administrasi bagi instansi atau perusahaan tertentu.',
      },
      {
        question: 'Bagaimana mekanisme pembayaran sewa alat berat untuk kontraktor?',
        answer:
          'Mekanisme standar industri meliputi pembayaran biaya mob-demob di awal bersama uang sewa muka (DP 50–100 jam pertama). Selanjutnya pembayaran dilakukan bertahap sesuai verifikasi lembar time sheet kerja harian.',
      },
      {
        question: 'Bagaimana perhitungan jam sewa bila terjadi hujan lebat (rain delay)?',
        answer:
          'Bila terjadi hujan badai yang menyebabkan kondisi lapangan tidak memungkinkan alat bekerja (rain delay resmi), jam sewa dihentikan (tidak dihitung argo) sesuai kesepakatan time sheet mandor dan operator di lapangan.',
      },
      {
        question: 'Apakah ada diskon khusus untuk sewa armada lebih dari 3 unit?',
        answer:
          'Ya, untuk pengadaan paket armada terpadu (misal 1 paket excavator + vibro + grader + dump truck), kami memberikan potongan harga paket khusus dan kemudahan koordinasi teknisi gabungan.',
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
        anchorText: 'unit alat berat baru dan rekondisi bergaransi',
        href: '/jual-alat-berat/',
        context: 'Cek opsi pembelian armada investasi jangka panjang pada katalog',
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
    title: 'Sewa Wheel Loader 2–3 m³ untuk Batching Plant & Quarry Tambang Se-Indonesia',
    metaDescription:
      'Panduan rental wheel loader bucket 2–3 m³ (Komatsu WA320 / Cat 950). Efisiensi loading agregat pasir batu, tips pilih ban L3 vs L5 di quarry, dan tarif sewa per jam.',
    h1: 'Sewa Wheel Loader 2–3 m³ untuk Operasional Batching Plant & Quarry Se-Indonesia',
    leadParagraph:
      'Di area batching plant beton cor ready-mix maupun stockpile tambang batu split, wheel loader adalah urat nadi produksi. Begitu wheel loader mogok atau lambat bermanuver, truck mixer dan dump truck langsung mengular antre panjang, lalu target volume pengecoran hari itu berantakan. Unit beroda karet dengan kapasitas bucket 2.0 sampai 3.2 m³ (seperti Komatsu WA320 atau Cat 950) dirancang untuk kerja cepat bolak-balik mengisi agregat tanpa merusak lantai kerja semen.',
    image: '/images/units/wheel-loader.webp',
    imageAlt: 'Unit wheel loader memuat material pasir dan batu ke dump truck di area batching plant',
    imageCaption: 'Wheel loader kelas 3 m³ siap melayani siklus pemuatan cepat di stockpile dan quarry.',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-wheel-loader', '#wheel-loader-quarry', '#batching-plant', '#alat-berat-indonesia'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Kenapa Wheel Loader Jadi Pilihan Utama di Stockpile & Crusher?',
        content: [
          'Berbeda dengan excavator crawler yang bergerak lambat di atas rantai besi, wheel loader bergerak lincah dengan ban karet berkecepatan tempuh hingga 35 km/jam. Hal ini memungkinkan loader berpindah antar kompartemen bin pasir, batu split 1-2, dan abu batu yang berjarak puluhan meter dalam hitungan detik.',
          'Artikulasi sasis kemudi hidrolik di bagian tengah bodi mampu menekuk hingga sudut 40 derajat. Sudut putar yang tajam ini memudahkan operator bermanuver di lorong sempit batching plant tanpa harus memutar bodi secara melelahkan.',
        ],
        subsections: [
          {
            heading: 'Teknik Single-Pass Loading untuk Menghemat BBM',
            content:
              'Operator berpengalaman paham cara melakukan tusukan bucket tunggal (single-pass penetration) ke dasar tumpukan pasir sambil mengaktifkan tuas tilt hidrolik secara sinkron. Teknik ini menghasilkan muatan bucket penuh tanpa membiarkan ban selip (wheel spin) yang memboroskan solar dan mengikis tapak ban.',
          },
        ],
        highlights: [
          'Kapasitas angkat muatan statis (static tipping load) mencapai 10 hingga 14 ton dengan counterweight stabil.',
          'Kabin ber-AC kedap suara dengan pandangan 360 derajat menjamin visibilitas aman di area lalu lintas truk yang padat.',
          'Transmisi otomatis powershift memudahkan akselerasi saat bucket terisi penuh material berat.',
        ],
      },
      {
        heading: 'Memilih Ban Kerja: Ban L3 untuk Tanah Keras vs Ban L5 untuk Bebatuan Tajam',
        content: [
          'Salah satu pos pengeluaran terbesar pada operasional wheel loader adalah keausan ban luar. Salah memilih spesifikasi ban di lingkungan quarry bisa membuat ban luar robek dalam hitungan minggu.',
          'Untuk area batching plant dan stockpile pelabuhan berlantai semen atau tanah padat, ban tipe L3 (regular tread) adalah pilihan paling tepat karena ringan dan hemat solar. Namun bila unit ditempatkan di quarry tambang batu andesit atau sungai berkerikil tajam, wajib menggunakan ban tipe L5 (extra deep rock tread) atau memasang tire protection chain (rantai pelindung ban baja) agar dinding samping ban tidak sobek terkena serpihan batu tajam.',
        ],
        highlights: [
          'Periksa tekanan angin ban setiap pagi: tekanan angin kurang menyebabkan dinding ban retak, tekanan berlebih membuat ban mudah pecah saat menghantam batu.',
          'Bersihkan sela-sela tapak ban dari serpihan kawat atau batu runcing sebelum memulai giliran shift kerja.',
        ],
      },
      {
        heading: 'Struktur Tarif Sewa & Tips Menjaga Cycle Time Lapangan',
        content: [
          'Tarif sewa wheel loader kelas 2–3 kubik berkisar antara Rp 160.000 hingga Rp 220.000 per jam kerja aktif. Untuk memaksimalkan nilai sewa tersebut, tata letak (layout) tumpukan material agregat harus diatur berjarak ideal 15 sampai 25 meter dari corong hopper batching plant.',
          'Jarak tempuh yang terlalu jauh akan melipatgandakan waktu siklus (cycle time) dan mempercepat keausan komponen transmisi converter, sedangkan jarak yang terlalu mepet berisiko menyulitkan ruang gerak manuver truk mixer yang keluar-masuk.',
        ],
      },
    ],
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description:
        'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
        question: 'Berapa kapasitas bucket wheel loader yang paling pas untuk batching plant 60 m³/jam?',
        answer:
          'Kapasitas bucket 2.0 hingga 2.5 m³ (seperti tipe Komatsu WA320) merupakan ukuran paling ideal untuk batching plant kapasitas 60 m³/jam. Siklus pengisian hopper dapat mengimbangi ritme mixing beton cor tanpa jeda.',
      },
      {
        question: 'Apakah ban wheel loader tahan terhadap bebatuan tajam di area quarry?',
        answer:
          'Untuk area quarry batu belah atau tambang mineral keras, unit kami dapat disesuaikan dengan ban tipe L5 deep rock lug atau dipasangi tire protection chain baja tahan sayatan.',
      },
      {
        question: 'Bagaimana jika wheel loader perlu dipindahkan ke depo proyek lain?',
        answer:
          'Untuk perpindahan jarak dekat di bawah 10 km pada jalan aspal yang sepi, wheel loader dapat berjalan mandiri dikawal kendaraan penunjuk jalan. Untuk jarak antar kota, mobilisasi tetap wajib menggunakan trailer self-loader demi keamanan transmisi dan keawetan ban.',
      },
      {
        question: 'Apakah tersedia opsi sewa bulanan all-in perawatan ban?',
        answer:
          'Tersedia. Kami dapat menyusun kontrak sewa jangka panjang dengan skema perawatan berkala termasuk rotasi dan penggantian ban akibat keausan pemakaian wajar.',
      },
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
        anchorText: 'pengadaan unit alat berat baru dan rekondisi',
        href: '/jual-alat-berat/',
        context: 'Pertimbangkan pembelian unit kerja dengan melihat katalog',
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
    title: 'Sewa Vibro Roller 10–12 Ton untuk Pemadatan Subgrade & Pondasi Jalan',
    metaDescription:
      'Rental vibro roller 10–12 ton single drum untuk pemadatan tanah timbunan, subgrade jalan tol, dan lapis pondasi agregat. Tips lolos uji CBR & Sand Cone di lapangan.',
    h1: 'Sewa Vibro Roller 10–12 Ton untuk Pemadatan Tanah & Pondasi Jalan Se-Indonesia',
    leadParagraph:
      'Meratakan tanah timbunan itu mudah, tetapi memastikan tanah itu lolos uji kepadatan CBR dan Proctor laboratorium adalah urusan yang jauh lebih menantang. Bila tanah timbunan tidak dipadatkan dengan vibrasi dinamis yang tepat, badan jalan yang sudah diaspal mulus bisa bergelombang dan ambles dalam hitungan bulan. Di sinilah peran krusial compactor single drum bergetar atau vibro roller kelas 10–12 ton.',
    image: '/images/units/vibro-roller.webp',
    imageAlt: 'Vibro roller melakukan pemadatan lapis pondasi jalan raya dengan drum getar',
    imageCaption: 'Vibro roller 12 ton single drum smooth siap mencapai target kepadatan CBR laboratorium.',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-vibro-roller', '#compactor-10-ton', '#pemadatan-jalan', '#proyek-infrastruktur'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Memahami Daya Getar Sentrifugal: Kunci Lolos Uji Sand Cone & CBR',
        content: [
          'Kepadatan struktur tanah timbunan tidak hanya ditentukan oleh berat mati (static linear load) drum besi silinder, melainkan oleh gaya sentrifugal dinamis yang dihasilkan poros hidrolik di dalam drum. Getaran frekuensi tinggi ini menyusun ulang butiran tanah dan mendesak keluar rongga udara serta air yang terperangkap.',
          'Unit vibro roller modern kelas 10–12 ton dilengkapi setelan Dual Amplitude:',
          '• High Amplitude (Getaran Tinggi): Digunakan pada lintasan awal untuk memadatkan lapisan tanah lempung atau timbunan subgrade yang masih gembur hingga kedalaman 50–70 cm.',
          '• Low Amplitude (Getaran Rendah): Digunakan pada lintasan akhir (finishing) lapis pondasi agregat kelas A/B agar butiran batu pecah tidak hancur menjadi serbuk halus dan permukaan tetap rapat mengunci.',
        ],
        highlights: [
          'Gaya sentrifugal getar mencapai 240 hingga 300 kN untuk penetrasi pemadatan maksimal.',
          'Kemampuan menanjak (gradeability) hingga 45%, aman untuk memadatkan lereng tanggul atau oprit jembatan.',
          'Sistem peredam getaran kabin ergonomis untuk melindungi kesehatan sendi operator selama jam kerja panjang.',
        ],
      },
      {
        heading: 'Kapan Wajib Menggunakan Drum Halus (Smooth) vs Padfoot (Kaki Kambing)?',
        content: [
          'Memilih jenis drum roller harus disesuaikan dengan jenis tanah di lokasi proyek:',
          '1. Smooth Drum (Drum Halus): Wajib digunakan untuk memadatkan material granular seperti pasir, sirtu, lapis pondasi agregat kelas A dan B, serta perataan dasar sebelum pengaspalan.',
          '2. Padfoot / Sheepfoot (Drum Kaki Kambing): Wajib digunakan bila tanah timbunan berupa lempung kohesif basah (clay). Tonjolan besi padfoot berfungsi menembus dan meremukkan gumpalan tanah liat (kneading action), sehingga udara dan air pori terdorong keluar secara merata.',
        ],
        highlights: [
          'Sentra Alat Berat menyediakan unit drum halus standar serta aksesori Padfoot Shell Kit yang dapat dipasang fleksibel sesuai jenis tanah proyek Anda.',
        ],
      },
      {
        heading: 'Tips Mandor Pemadatan: Aturan Jumlah Lintasan (Passing) & Kecepatan Kerja',
        content: [
          'Kunci efisiensi pemadatan adalah disiplin ketebalan hamparan. Jangan sekali-kali menghampar tanah gembur melebihi 30 cm per lapis dengan harapan bisa dipadatkan sekaligus.',
          '• Pola Lintasan Standar: Lakukan 2 lintasan awal tanpa getar (static roll) untuk meratakan permukaan, dilanjutkan 4–6 lintasan dengan getar aktif (vibratory roll), dan ditutup 1–2 lintasan static roll untuk menghaluskan jejak drum.',
          '• Kecepatan Aman: Jalankan alat pada kecepatan konstan 2.5 hingga 4 km/jam. Jangan pernah menghentikan alat dengan posisi vibrator menyala aktif di satu titik karena akan membuat permukaan tanah cekung dan amblas bergelombang.',
        ],
      },
    ],
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description:
        'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
        question: 'Kapan harus menggunakan drum halus (smooth) dan drum padfoot (kaki kambing)?',
        answer:
          'Drum halus (smooth drum) digunakan untuk pasir, kerikil, agregat base A/B, dan penyiapan perkerasan jalan. Drum padfoot (kaki kambing) digunakan untuk memadatkan tanah lempung basah (clay) agar gumpalan tanah terurai dan air pori terperas keluar.',
      },
      {
        question: 'Berapa lintasan (pass) rata-rata yang diperlukan untuk mencapai target CBR 95%?',
        answer:
          'Umumnya diperlukan 6 hingga 8 lintasan per lapis tebal 20–25 cm tanah padat, yang dibuktikan melalui pengujian sand cone test atau dynamic cone penetrometer (DCP) berkala di lapangan.',
      },
      {
        question: 'Mengapa vibro roller tidak boleh melintasi jalan raya umum saat mobilisasi?',
        answer:
          'Roda drum besi baja compactor dapat merusak permukaan aspal jalan raya umum dan berkecepatan tempuh sangat lambat. Mobilisasi wajib menggunakan trailer lowbed atau tronton self-loader.',
      },
      {
        question: 'Berapa tarif sewa vibro roller 10–12 ton per jam?',
        answer:
          'Tarif sewa vibro roller berkisar antara Rp 150.000 hingga Rp 200.000 per jam, tergantung tonase dan paket sewa yang disepakati.',
      },
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
        anchorText: 'pengadaan unit alat berat baru dan rekondisi',
        href: '/jual-alat-berat/',
        context: 'Cek opsi pembelian armada investasi jangka panjang pada katalog',
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
    title: 'Sewa Motor Grader untuk Perataan Jalan Tol & Hauling Tambang Se-Indonesia',
    metaDescription:
      'Layanan sewa motor grader pisau 12–14 kaki: pembentukan kemiringan jalan (camber), parit drainase talud, dan perawatan jalan hauling tambang batubara/nikel.',
    h1: 'Sewa Motor Grader untuk Perataan Badan Jalan & Hauling Road Se-Indonesia',
    leadParagraph:
      'Di kalangan praktisi alat berat, mengoperasikan motor grader sering disebut sebagai "seni tingkat tinggi". Berbeda dengan excavator atau bulldozer yang mengandalkan dorongan tenaga kasar, motor grader bertugas membentuk profil elevasi, kemiringan mahkota jalan (camber), hingga sudut lereng parit drainase dengan ketelitian sentimeter. Jalan yang dibentuk dengan grader yang tepat membuat air hujan langsung mengalir ke saluran samping, mencegah jalan berlubang dan ban dump truck tambang pecah.',
    image: '/images/units/motor-grader.webp',
    imageAlt: 'Motor grader meratakan lapisan tanah subgrade dengan moldboard blade',
    imageCaption: 'Motor grader dengan pisau moldboard 14 kaki siap membentuk elevasi akurat.',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-motor-grader', '#motor-grader-tambang', '#perataan-jalan', '#alat-berat-proyek'],
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    author: 'Tim Teknis Sentra Alat Berat',
    sections: [
      {
        heading: 'Fungsi Vital Motor Grader: Dari Trase Jalan Tol Sampai Hauling Tambang',
        content: [
          'Pada proyek infrastruktur jalan tol, motor grader bekerja berdampingan dengan vibro roller untuk menghampar dan meratakan lapis pondasi agregat kelas A dan B sebelum aspal atau beton rigid dihamparkan. Pisau moldboard panjang memotong tonjolan material dan mengisi cekungan hingga toleransi permukaan memenuhi standar uji Bina Marga.',
          'Sementara di sektor pertambangan batubara dan nikel, motor grader berpatroli tiada henti di sepanjang jalan angkut (hauling road). Hujan deras dan beban puluhan dump truck bertonase 30 ton ke atas cepat merusak permukaan jalan menjadi bubur lumpur. Grader mengikis lumpur licin ke bahu jalan agar truk bisa melaju kencang dengan aman tanpa boros solar.',
        ],
        subsections: [
          {
            heading: 'Sudut Putar Moldboard 360 Derajat dan Artikulasi Sasis',
            content:
              'Pisau moldboard dapat dimiringkan hingga sudut tegak 90 derajat untuk memotong tebing talud sisi jalan, atau diputar horisontal untuk menggeser timbunan agregat ke samping. Sasis grader juga dilengkapi engsel artikulasi hidrolik di tengah bodi agar unit bisa berbelok tajam di tikungan sempit lereng tambang.',
          },
        ],
        highlights: [
          'Panjang pisau standar 3.7 meter (12 kaki) hingga 4.3 meter (14 kaki) berbahan baja berkadar karbon tinggi tahan abrasi.',
          'Tenaga mesin berkisar 140 hingga 190 HP dengan transmisi kontrol perpindahan halus.',
          'Dilengkapi attachment ripper belakang untuk menggaruk permukaan keras dan scarifier tengah untuk memecah agregat padat.',
        ],
      },
      {
        heading: 'Mengapa Skill Operator Grader Menentukan Untung Rugi Proyek Anda',
        content: [
          'Menyewa grader dengan unit tercanggih sekalipun akan sia-sia jika dikemudikan oleh operator yang kurang jam terbang. Operator yang belum terbiasa bisa memotong elevasi terlalu dalam sehingga material agregat mahal terbuang percuma ke dalam parit, atau merusak patok-patok elevasi yang dipasang tim surveyor.',
          'Sentra Alat Berat menyediakan operator grader yang terbiasa membaca patok elevasi waterpass dan theodolite, memiliki koordinasi tangan-mata yang halus dalam memainkan tuas hidrolik kiri-kanan secara bersamaan, serta memahami standar kemiringan camber jalan 2–3% untuk kelancaran aliran air.',
        ],
        highlights: [
          'Semua operator kami mengantongi Surat Izin Operator (SIO) resmi dari Kemenaker.',
          'Tersedia opsi sewa unit lepas kunci maupun sewa include operator senior berpengalaman proyek jalan nasional dan pertambangan.',
        ],
      },
      {
        heading: 'Estimasi Tarif & Tips Logistik Sewa Motor Grader',
        content: [
          'Tarif sewa motor grader di Indonesia umumnya berada di kisaran Rp 220.000 hingga Rp 290.000 per jam operasi kerja aktif. Karena grader memiliki bodi yang panjang (mencapai lebih dari 8.5 meter), proses mobilisasi membutuhkan trailer lowbed berkepala panjang dengan supir towing berpengalaman.',
          'Pastikan radius tikungan jalan akses masuk menuju area proyek Anda cukup lebar untuk dilintasi kombinasi kepala trailer dan unit grader tanpa risiko terperosok ke parit jalan.',
        ],
      },
    ],
    locationTable: {
      heading: 'Jangkauan Layanan & Estimasi Mobilisasi Proyek Se-Indonesia',
      description:
        'Sentra Alat Berat melayani pengiriman armada dan dukungan teknisi ke seluruh wilayah proyek strategis Indonesia:',
      rows: INDONESIA_PROJECT_LOCATIONS,
    },
    faqs: [
      {
        question: 'Berapa panjang pisau (moldboard) motor grader standar yang disewakan?',
        answer:
          'Panjang pisau standar berkisar antara 3.7 meter (12 kaki) hingga 4.3 meter (14 kaki) dengan bilah pemotong (cutting edge) baja berkekuatan tinggi yang dapat dibalik atau diganti jika mulai aus.',
      },
      {
        question: 'Apakah motor grader bisa digunakan untuk membuat parit drainase V di samping jalan?',
        answer:
          'Bisa. Pisau moldboard dapat dimiringkan hingga sudut curam untuk membentuk lereng parit drainase berbentuk V di pinggir badan jalan tanpa memerlukan alat tambahan.',
      },
      {
        question: 'Berapa tarif sewa motor grader per jam di Sentra Alat Berat?',
        answer:
          'Tarif sewa berkisar antara Rp 220.000 hingga Rp 290.000 per jam kerja aktif tergantung tipe mesin, kapasitas tenaga (HP), dan lokasi mobilisasi proyek.',
      },
      {
        question: 'Apakah Sentra Alat Berat menyediakan operator grader yang paham baca gambar survei?',
        answer:
          'Tentu. Seluruh operator grader kami memiliki pengalaman bertahun-tahun di proyek jalan raya dan tambang, serta terbiasa berkoordinasi langsung dengan juru ukur (surveyor) di lapangan.',
      },
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
        anchorText: 'pengadaan unit alat berat baru dan rekondisi',
        href: '/jual-alat-berat/',
        context: 'Cek opsi pembelian armada investasi jangka panjang pada katalog',
      },
      {
        anchorText: 'pengajuan penawaran resmi via WhatsApp',
        href: '/kontak/',
        context: 'Dapatkan rincian penawaran tertulis dengan menghubungi',
      },
    ],
  },
];

export function getAllPublishedArticles(): SeoArticle[] {
  return INITIAL_SEO_ARTICLES;
}

export function getArticleBySlug(slug: string): SeoArticle | undefined {
  const cleanSlug = slug.replace(/^\/|\/$/g, '').replace(/^informasi-alat-berat\//, '');
  return INITIAL_SEO_ARTICLES.find((a) => a.slug === cleanSlug);
}
