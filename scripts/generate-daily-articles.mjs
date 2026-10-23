import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const articlesDataPath = path.join(projectRoot, 'src', 'data', 'articlesData.ts');

// Topics library with high-intent SEO heavy equipment topics written in natural practitioner Indonesian
const ARTICLE_TOPICS_POOL = [
  {
    slug: 'sewa-dump-truck-tronton-indeks-24',
    keyword: 'sewa dump truck tronton',
    title: 'Sewa Dump Truck Tronton Indeks 24 m³ untuk Angkut Tanah & Tambang',
    metaDescription:
      'Rental dump truck tronton 10 roda indeks 24 kubik untuk angkutan tanah galian cut & fill, batu quarry, pasir, dan batubara di seluruh Indonesia.',
    h1: 'Sewa Dump Truck Tronton Indeks 24 m³ untuk Proyek Tanah & Tambang Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#sewa-dump-truck', '#dump-truck-tronton', '#indeks-24', '#angkut-material'],
    image: '/images/units/dump-truck.webp',
    imageAlt: 'Armada dump truck tronton 10 roda mengangkut material proyek tanah',
    imageCaption: 'Dump truck tronton indeks 24 kubik siap melayani ritase angkutan tanah dan material tambang.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph:
      'Menghitung efisiensi pemindahan tanah jarak jauh (hauling) dari galian ke area disposal sangat bergantung pada daya muat dan keandalan armada dump truck. Menggunakan dump truck engkel isi 8 kubik untuk jarak tempuh di atas 10 km sering kali bikin tekor solar dan upah sopir. Di sinilah dump truck tronton 10 roda berindeks 24 m³ jadi pilihan paling ekonomis bagi para kontraktor sipil dan tambang.',
    sections: [
      {
        heading: 'Kenapa Tronton 10 Roda Indeks 24 m³ Jadi Standar Hauling Efisien?',
        content: [
          'Dump truck tronton 10 roda berpenggerak 6x4 dirancang untuk menahan beban muatan tanah timbunan atau batubara hingga 25–30 ton tanpa membuat sasis melengkung. Gardan ganda di roda belakang memberikan traksi kuat saat merayap di tanjakan licin disposal tambang maupun medan proyek yang berlumpur sehabis hujan.',
          'Dengan kapasitas bak 24 m³, satu unit tronton bisa memangkas separuh frekuensi ritase jika dibandingkan dump truck standar 12 kubik. Hal ini berdampak langsung pada kelancaran antrean loading di dekat excavator dan memperkecil kemacetan di pintu keluar area proyek.',
        ],
        subsections: [
          {
            heading: 'Sistem Hidrolik Silinder Teleskopik Dump',
            content:
              'Bak dump menggunakan sistem hidrolik teleskopik bertenaga tinggi yang mampu mengangkat bak penuh material basah hingga sudut 50 derajat dalam tempo kurang dari 25 detik, memastikan material tidak lengket di dasar bak.',
          },
        ],
        highlights: [
          'Konfigurasi penggerak 6x4 dengan transmisi heavy-duty dan differential lock roda belakang.',
          'Plat bak baja tahan gesek tebal 6–8 mm, aman untuk muatan batu belah andesit dan sirtu.',
          'Pilihan skema kontrak bulanan, sewa lepas unit, atau sistem borongan ritase kubikasi.',
        ],
      },
      {
        heading: 'Tips Estimator: Menentukan Rasio Jumlah Dump Truck per Excavator',
        content: [
          'Kesalahan paling fatal di lapangan adalah membiarkan excavator menganggur menunggu truk datang (idle time), atau sebaliknya: belasan dump truck menumpuk mengantre panjang membakar solar sia-sia.',
          'Untuk jarak disposal 3 sampai 5 kilometer, perbandingan ideal adalah 1 unit excavator PC200 melayani 4 hingga 5 unit dump truck tronton 24 m³. Jika jarak tempuh melar hingga di atas 10 km melewati jalur umum yang padat lalu lintas, tambahkan 2 sampai 3 unit truk agar ritme kerja galian tetap stabil tanpa jeda.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah sewa dump truck tronton tersedia skema include solar dan supir?',
        answer:
          'Tersedia. Kami melayani skema sewa lepas armada (unit only) maupun skema all-in lengkap dengan supir berpengalaman SIM B2 Umum dan pasokan solar industri resmi di lokasi kerja.',
      },
      {
        question: 'Berapa tarif sewa bulanan untuk dump truck tronton 24 kubik?',
        answer:
          'Tarif sewa bulanan berkisar antara Rp 35.000.000 hingga Rp 50.000.000 per unit tergantung rute medan kerja, tahun rakitan armada, dan ketentuan jam shift kerja.',
      },
    ],
  },
  {
    slug: 'sewa-excavator-long-arm-normalisasi-sungai',
    keyword: 'sewa excavator long arm',
    title: 'Sewa Excavator Long Arm Jangkauan 15–18 Meter untuk Normalisasi Sungai',
    metaDescription:
      'Rental excavator long arm super reach jangkauan 15 hingga 18 meter untuk pengerukan lumpur sungai, pembuatan tanggul kolam tambak, dan galian basement dalam.',
    h1: 'Sewa Excavator Long Arm Jangkauan 15–18 Meter Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#excavator-long-arm', '#sewa-long-arm', '#normalisasi-sungai', '#pengerukan-lumpur'],
    image: '/images/services/sewa-alat-berat.webp',
    imageAlt: 'Excavator long arm dengan boom panjang mengeruk lumpur dan sedimen di saluran air',
    imageCaption: 'Excavator long reach 16 meter siap menangani pengerukan tebing dan saluran air luas.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph:
      'Mengeruk sedimentasi lumpur di palung sungai lebar, membersihkan enceng gondok dan sedimentasi danau, atau membentuk tanggul tambak pesisir sering kali mustahil dikerjakan excavator arm standar. Jika unit dipaksa maju mendekati bibir air, risiko unit tergelincir atau amblas ke dalam lumpur hidup sangat besar. Excavator long arm dengan jangkauan 15 hingga 18 meter adalah solusi mutlak untuk pekerjaan galian radius jauh dari atas tanggul yang kokoh.',
    sections: [
      {
        heading: 'Karakteristik & Keseimbangan Excavator Super Long Front (SLF)',
        content: [
          'Excavator long arm bukan sekadar excavator standar yang disambung besinya secara sembarangan. Struktur boom dan arm panjang didesain khusus oleh pabrikan dengan bobot balance counterweight belakang yang jauh lebih berat guna menjaga titik pusat gravitasi mesin saat mengayun.',
          'Kapasitas bucket excavator long arm umumnya sengaja diturunkan ke ukuran 0.4 hingga 0.5 m³ (setengah dari bucket PC200 standar). Pengurangan volume bucket ini krusial untuk mencegah beban jungkit (tipping load) pada struktur swing bearing saat arm terentang penuh sejauh belasan meter di atas air.',
        ],
        highlights: [
          'Jangkauan galian horisontal mencapai 15.5 hingga 18.2 meter dari poros swing bodi.',
          'Kedalaman galian vertikal ke dasar palung sungai mencapai 11.5 hingga 13 meter.',
          'Pilihan bucket pembersih parit (ditch cleaning bucket) berpola lebar untuk mengeruk lumpur cair dan eceng gondok secara cepat.',
        ],
      },
      {
        heading: 'SOP Keselamatan Kerja: Hindari Unit Terguling ke Aliran Sungai',
        content: [
          'Bekerja di bibir tebing sungai menuntut kehati-hatian ekstra. Terapkan SOP berikut:',
          '1. Pastikan posisi travel motor track crawler berada di bagian belakang menghadap daratan kering, bukan menghadap ke arah bibir tebing air, agar alat bisa langsung mundur bila tebing runtuh mendadak.',
          '2. Jangan pernah melakukan gerakan mengayun mendadak (sudden swing stop) saat bucket penuh lumpur cair pada posisi lengan terentang maksimal.',
          '3. Gunakan matras kayu (wooden swamp mats) bila tanah tumpuan di bibir tanggul mulai lembek atau retak.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa kapasitas bucket excavator long arm dibandingkan unit standar?',
        answer:
          'Kapasitas bucket excavator long arm sengaja dirancang 0.4 hingga 0.5 m³ guna mencegah risiko tipping load (kehilangan keseimbangan) pada struktur lengan yang panjang saat menjangkau titik terjauh.',
      },
      {
        question: 'Apakah excavator long arm bisa dimobilisasi menggunakan trailer biasa?',
        answer:
          'Mobilisasi excavator long arm membutuhkan trailer lowbed dengan panjang geladak khusus. Untuk rute jalan berliku atau sempit, arm terkadang dilepas terpisah demi keselamatan ruang bebas jalan raya.',
      },
    ],
  },
  {
    slug: 'panduan-ganti-undercarriage-alat-berat',
    keyword: 'spare part undercarriage alat berat',
    title: 'Panduan Ganti Spare Part Undercarriage: Track Shoe, Roller & Sprocket',
    metaDescription:
      'Cara memeriksa tingkat keausan undercarriage alat berat crawler (excavator & bulldozer). Spesifikasi suku cadang track shoe, link, idler, dan sprocket.',
    h1: 'Panduan Penggantian Suku Cadang Undercarriage Alat Berat Se-Indonesia',
    category: 'Spare Part Alat Berat',
    tags: ['#undercarriage', '#track-shoe', '#spare-part-alat-berat', '#roller-sprocket'],
    image: '/images/services/spare-part-alat-berat.webp',
    imageAlt: 'Komponen undercarriage track link roller dan sprocket alat berat crawler',
    imageCaption: 'Pemeriksaan ketebalan link dan keausan sprocket mencegah rantai crawler lepas di lapangan.',
    relatedService: { label: 'Layanan Jual Spare Part', href: '/spare-part-alat-berat/' },
    leadParagraph:
      'Tahukah Anda bahwa hampir 50% dari total pengeluaran biaya perawatan alat berat crawler (tipe rantai besi) tersedot untuk sistem kaki-kaki atau undercarriage? Di area kerja berpasir kuarsa tajam atau tanah cadas tambang, gesekan besi ketemu batu terjadi setiap detik. Memahami batas toleransi aus komponen undercarriage adalah kunci agar dompet perusahaan tidak kebobolan akibat kerusakan berantai pada final drive motor.',
    sections: [
      {
        heading: '4 Komponen Vital Undercarriage & Batas Kritis Toleransi Aus',
        content: [
          'Sistem undercarriage menopang beban puluhan ton alat berat sekaligus mentransfer tenaga gerak putar menjadi daya dorong di atas tanah. Ada empat komponen utama yang wajib diinspeksi secara rutin:',
          '1. Track Link & Pin Bushing: Titik tumpu rantai. Bila jarak antar pin (pitch) sudah melar melampaui toleransi 100%, rantai akan terasa kendur dan gampang copot dari jalurnya.',
          '2. Track Roller & Carrier Roller: Roda penumpu beban bodi. Periksa apakah seal oli internal roller masih rapat. Roller yang macet berputar akan membuat tapak rantai tergerus tajam seperti dipahat.',
          '3. Drive Sprocket: Gigi bintang penggerak putaran rantai. Jika mata gigi sprocket sudah menipis runcing menyerupai sirip hiu, segera lakukan penggantian bersamaan dengan rantai link baru.',
          '4. Front Idler & Spring Recoil: Roda pemandu depan penahan hentakan batu. Periksa ketebalan bibir pemandu idler agar rantai tidak goyang melintir saat unit berbelok.',
        ],
        highlights: [
          'Lakukan rotasi bushing (turning pin & bushing) saat tingkat keausan mencapai 70–80% untuk memperpanjang usia pakai rantai hingga 30%.',
          'Jangan pasang rantai track link baru pada gigi sprocket yang sudah aus runcing karena akan merusak bushing baru dalam tempo singkat.',
        ],
      },
      {
        heading: 'Pentingnya Penyetelan Ketegangan Rantai (Track Sag)',
        content: [
          'Setiap jenis tanah membutuhkan setelan kelenturan rantai yang berbeda. Di tanah lempung basah, kendorkan setelan sag 10–15 mm lebih longgar dibanding standar karena tanah yang menempel di sela rel undercarriage akan membuat rantai menegang dengan sendirinya saat berputar.',
          'Rantai yang disetel terlalu kencang meningkatkan gesekan beban mesin hingga 15% dan memicu panas ekstrem pada bearing travel motor hidrolik.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kapan saat yang paling tepat mengganti satu set rantai undercarriage?',
        answer:
          'Saat ketebalan link height dan diameter luar bushing sudah menipis mendekati batas service limit manual book (keausan di atas 100%), atau ketika rantai sudah berulang kali lepas (anjlok) meski sudah disetel pompa gemuk recoil.',
      },
      {
        question: 'Apakah Sentra Alat Berat menjual undercarriage OEM dan Genuine?',
        answer:
          'Ya, kami menyediakan suku cadang undercarriage Genuine pabrikan maupun OEM berkualitas heavy-duty (seperti Berco, ITR, dan CH) untuk unit Komatsu, Caterpillar, Kobelco, dan Hitachi.',
      },
    ],
  },
  {
    slug: 'service-pompa-hidrolik-silinder-excavator',
    keyword: 'service hidrolik alat berat',
    title: 'Service Pompa Hidrolik & Silinder Excavator Bocor: Solusi Cepat Lapangan',
    metaDescription:
      'Layanan service perbaikan pompa hidrolik utama, seal kit silinder bocor, dan control valve alat berat excavator ke lokasi proyek di Indonesia.',
    h1: 'Service Perbaikan Sistem Hidrolik & Pompa Excavator Se-Indonesia',
    category: 'Service Alat Berat',
    tags: ['#service-hidrolik', '#pompa-hidrolik-excavator', '#seal-silinder-bocor', '#mekanik-alat-berat'],
    image: '/images/services/service-alat-berat.webp',
    imageAlt: 'Teknisi memeriksa tekanan pompa hidrolik utama excavator dengan pressure gauge',
    imageCaption: 'Pengujian tekanan hidrolik utama (main relief valve) untuk memulihkan tenaga galian unit.',
    relatedService: { label: 'Layanan Service Alat Berat', href: '/service-alat-berat/' },
    leadParagraph:
      'Saat excavator Anda mulai loyo mengangkat beban galian, gerakan silinder arm melambat saat oli mulai panas, atau arm boom turun sendiri secara perlahan (hydraulic drift), jangan biarkan operator memaksakan kerja unit. Gejala tersebut adalah tanda peringatan bahwa sistem hidrolik mengalami kebocoran internal atau pompa hidrolik utama (main pump) mulai aus. Menunda perbaikan hidrolik bisa memicu kontaminasi serpihan gram besi ke seluruh sirkuit kontrol valve yang biaya perbaikannya berkali lipat lebih mahal.',
    sections: [
      {
        heading: 'Penyebab Tekanan Hidrolik Drop & Gejala Kerusakan Utama',
        content: [
          'Tekanan kerja hidrolik excavator 20 ton modern berada di kisaran 34.3 hingga 37.3 MPa (sekitar 350–380 bar). Begitu tekanan ini drop akibat ausnya barel piston atau piringan klep (valve plate), daya gali unit akan merosot drastis.',
          'Penyebab umum meliputi temperatur oli hidrolik yang berlebihan (overheating) akibat pendingin oli tersumbat debu, atau keterlambatan penggantian filter return oli hidrolik sehingga partikel kotoran menggores dinding silinder hidrolik.',
        ],
        highlights: [
          'Penanganan seal kit silinder boom, arm, dan bucket menggunakan bahan polyurethane tahan temperatur tinggi.',
          'Kalibrasi ulang tekanan main relief valve dan pilot pressure menggunakan instrumen pressure gauge digital presisi.',
          'Flushing total tangki dan sirkuit selang hidrolik untuk memastikan bebas gram serpihan logam.',
        ],
      },
      {
        heading: 'Keuntungan Layanan Mekanik Panggilan Sentra Alat Berat',
        content: [
          'Membawa excavator rusak dari lokasi tambang atau proyek perbukitan ke bengkel kota butuh biaya sewa lowbed dan waktu berhari-hari. Tim mekanik Sentra Alat Berat siap datang langsung ke lokasi kerja Anda dengan membawa tooling hidrolik portabel, kit seal pengganti, dan unit tester tekanan untuk penanganan cepat di tempat.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa lama waktu perbaikan kebocoran seal silinder arm excavator di lokasi?',
        answer:
          'Penggantian seal kit silinder arm di lapangan umumnya membutuhkan waktu 4 hingga 8 jam kerja jika batang as piston silinder tidak mengalami luka baret yang parah.',
      },
      {
        question: 'Apakah ada garansi setelah service sistem hidrolik?',
        answer:
          'Ya, Sentra Alat Berat memberikan garansi service hidrolik hingga 3 bulan atau 500 jam operasi dengan ketentuan penggunaan oli dan filter hidrolik sesuai standar rekomendasi pabrikan.',
      },
    ],
  },
  {
    slug: 'tips-memilih-filter-solar-oli-alat-berat',
    keyword: 'filter alat berat komatsu caterpillar',
    title: 'Tips Memilih Filter Solar & Filter Oli Alat Berat Komatsu & Caterpillar',
    metaDescription:
      'Panduan memilih filter solar (fuel water separator) dan filter oli mesin alat berat untuk mencegah kerusakan common rail injector akibat solar kotor.',
    h1: 'Panduan Memilih Filter Solar & Oli Alat Berat Komatsu & Caterpillar',
    category: 'Spare Part Alat Berat',
    tags: ['#filter-solar-alat-berat', '#filter-oli-mesin', '#komatsu-caterpillar', '#suku-cadang'],
    image: '/images/services/spare-part-alat-berat.webp',
    imageAlt: 'Deretan filter oli dan filter bahan bakar diesel untuk alat berat',
    imageCaption: 'Filter solar dengan efisiensi mikron tinggi melindungi injector mesin diesel generasi baru.',
    relatedService: { label: 'Layanan Jual Spare Part', href: '/spare-part-alat-berat/' },
    leadParagraph:
      'Mesin diesel alat berat generasi terkini menggunakan teknologi Common Rail Direct Injection (CRDi) dengan tekanan semprot bahan bakar mencapai lebih dari 1.800 bar. Lubang nozel injector pada sistem ini berukuran mikroskopis dan sangat rentan tersumbat atau aus akibat partikel kotoran dan endapan air dalam solar B35. Memilih filter solar berkualitas tinggi dengan filtrasi 2–5 mikron adalah asuransi termurah untuk melindungi injector mesin berharga puluhan juta rupiah.',
    sections: [
      {
        heading: 'Sistem Filtrasi Bertingkat: Pre-Filter Water Separator & Main Fuel Filter',
        content: [
          'Pada alat berat Komatsu, Cat, Kobelco, maupun Hitachi, sistem bahan bakar diesel dibagi menjadi dua lapis proteksi:',
          '1. Pre-Filter / Fuel Water Separator: Menyaring kotoran kasar berukuran 10–30 mikron dan memisahkan butiran air yang terperangkap dalam solar. Air yang mengendap di dasar mangkuk kaca separator wajib dibuang (drain) setiap pagi sebelum memutar kunci kontak.',
          '2. Main Fuel Filter: Terletak setelah supply pump, memiliki pori kertas filter ultra-padat 2–5 mikron untuk menangkap partikel mikroskopis sebelum masuk ke pipa common rail bertekanan tinggi.',
        ],
        highlights: [
          'Jangan pernah menggunakan filter imitasi tanpa sertifikasi efisiensi mikron.',
          'Ganti filter solar setiap 250 hingga 500 jam operasi, atau lebih cepat bila indikator perbedaan tekanan di kabin menyala.',
          'Olesi karet seal filter dengan oli bersih sebelum dipasang, dan kencangkan dengan tangan tanpa menggunakan kunci rantai agar kaleng filter tidak penyok.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Bagaimana cara memastikan nomor part filter cocok dengan unit alat berat saya?',
        answer:
          'Cukup kirimkan foto pelat nama (nameplate) unit mesin atau nomor part lamanya via WhatsApp ke 0851 8300 3060. Tim suku cadang kami akan mencocokkan nomor part secara presisi di katalog suku cadang resmi pabrikan.',
      },
    ],
  },
  {
    slug: 'sewa-excavator-breaker-pemecah-batu',
    keyword: 'sewa excavator breaker batu',
    title: 'Sewa Excavator Breaker untuk Pemecahan Batu Cadas & Bongkar Beton',
    metaDescription:
      'Layanan sewa excavator breaker hidrolik (hydraulic rock breaker) untuk quarry batu kali, galian cadas perbukitan, dan pembongkaran struktur beton se-Indonesia.',
    h1: 'Sewa Excavator Breaker Hidrolik untuk Pemecah Batu & Pembongkaran Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#excavator-breaker', '#rock-breaker', '#pemecah-batu', '#sewa-alat-berat'],
    image: '/images/services/sewa-alat-berat.webp',
    imageAlt: 'Excavator dengan attachment hydraulic breaker memecah bongkahan batu cadas keras',
    imageCaption: 'Excavator breaker hidrolik siap menuntaskan pekerjaan pembongkaran cadas dan beton bertulang.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph:
      'Saat pekerjaan galian tanah terbentur formasi batuan cadas padat atau fondasi beton bertulang lama yang tidak mempan dikeruk bucket gigi excavator biasa, menggunakan hydraulic breaker adalah satu-satunya jalan keluar. Getaran pukulan pahat baja (chisel) berenergi impak ribuan joule sanggup meretakkan batu gunung dan membongkar struktur jembatan lama dalam tempo hitungan menit.',
    sections: [
      {
        heading: 'Kapasitas Pukulan Hydraulic Breaker & Pemilihan Chisel Pahat',
        content: [
          'Memilih excavator breaker yang tepat harus menyesuaikan kelas tonase unit dengan ukuran chisel pahatnya. Untuk excavator kelas 20 ton, breaker yang digunakan biasanya memiliki bobot 1.6 hingga 1.8 ton dengan diameter pahat batang 135–140 mm.',
          'Bentuk mata pahat juga menentukan kecepatan kerja: tipe Moil Point (kerucut runcing) untuk batuan keras tak beraturan, tipe Chisel (pipih seperti obeng min) untuk memotong lapisan batu berlapis, dan tipe Blunt (tumpul rata) untuk meremukkan bongkahan batu besar di area stockpile crusher.',
        ],
        highlights: [
          'Energi pukulan impak mencapai 4.500 hingga 5.500 Joule per hantaman.',
          'Frekuensi pukulan berkisar 350 hingga 600 pukulan per menit (blows per minute).',
          'Sistem peredam getaran internal dan accumulator gas nitrogen untuk meredam hentakan balik ke boom excavator.',
        ],
      },
      {
        heading: 'Tips Operasional: Jangan Memukul Batu Lebih dari 15 Detik di Titik yang Sama',
        content: [
          'Operator breaker wajib menerapkan teknik kerja yang benar untuk mencegah kerusakan pahat dan silinder arm:',
          '1. Jangan pernah memukul pada satu titik batuan melebihi 15 detik berturut-turut. Bila batu belum retak, segera pindahkan posisi chisel beberapa inci ke sisi tepi batuan agar tercipta bidang patah bebas (free face).',
          '2. Jangan menggerakkan arm untuk mengungkit batu saat posisi pahat masih tertancap dalam rongga rekahan karena as pahat chisel bisa patah seketika.',
          '3. Lumasi pelat bush pahat menggunakan pasta gemuk khusus tahan panas (chisel paste molybdenum) setiap 2 jam pemakaian terus menerus.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa tarif sewa excavator breaker per jam?',
        answer:
          'Tarif sewa excavator breaker kelas 20 ton berkisar antara Rp 300.000 hingga Rp 420.000 per jam kerja aktif, sebanding dengan beban kerja ekstrem pada sistem hidrolik dan konsumsi solar yang lebih tinggi.',
      },
      {
        question: 'Apakah pahat chisel yang patah saat kerja ditanggung penyewa?',
        answer:
          'Keausan wajar pada pahat chisel sudah termasuk dalam paket sewa kami. Namun patah akibat kelalaian operasional (seperti mengungkit batu secara paksa) diatur sesuai klausul perjanjian kerja sama sewa.',
      },
    ],
  },
  {
    slug: 'sewa-bulldozer-rawa-lgp-lahan-gambut',
    keyword: 'sewa bulldozer rawa lgp',
    title: 'Sewa Bulldozer Rawa LGP untuk Pembersihan Lahan Gambut & Kanal Sawit',
    metaDescription:
      'Rental bulldozer rawa tipe LGP (Low Ground Pressure) bertapak sepatu lebar untuk pembukaan perkebunan kelapa sawit di tanah gambut lunak se-Indonesia.',
    h1: 'Sewa Bulldozer Rawa LGP untuk Pembukaan Lahan Gambut & Perkebunan Se-Indonesia',
    category: 'Sewa Alat Berat',
    tags: ['#bulldozer-rawa', '#bulldozer-lgp', '#lahan-gambut', '#kebun-sawit'],
    image: '/images/units/bulldozer.webp',
    imageAlt: 'Bulldozer rawa tipe LGP melintasi lahan gambut lunak tanpa amblas',
    imageCaption: 'Bulldozer rawa LGP dengan tapak segitiga ekstra lebar siap bekerja di lahan basah gambut.',
    relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
    leadParagraph:
      'Membuka lahan gambut untuk perkebunan kelapa sawit atau penataan kanal drainase di wilayah Riau, Jambi, maupun Kalimantan Barat memiliki tantangan yang sangat khas: daya dukung tanahnya sangat rendah. Bulldozer standar berbobot 20 ton bertapak sepatu sempit dijamin langsung amblas ke dalam kubangan gambut. Solusi satu-satunya adalah mengerahkan Bulldozer Rawa bertipe LGP (Low Ground Pressure) seperti Komatsu D85P atau D65P.',
    sections: [
      {
        heading: 'Teknologi Low Ground Pressure: Mencegah Alat Amblas di Atas Rawa',
        content: [
          'Kunci keunggulan bulldozer rawa terletak pada distribusi tekanan tapak tanah (ground pressure). Dengan menggunakan sepatu track berbentuk segitiga bertapak lebar (swamp shoe) selebar 910 mm hingga 1.100 mm, tekanan alat berat ke atas tanah dipangkas hingga hanya sekitar 0.28–0.34 kg/cm²—bahkan lebih ringan dibanding injakan telapak kaki manusia.',
          'Track frame yang diperpanjang juga memberikan daya apung (flotation) yang stabil saat mendorong tumpukan gambut basah dan meratakan jalur rintisan tanggul kanal perkebunan.',
        ],
        highlights: [
          'Lebar tapak sepatu track segitiga 910–1.100 mm untuk daya apung optimal di lahan lunak.',
          'Pisau Straight Tilt Blade berpola lebar untuk mendorong vegetasi pakis dan gambut basah dalam volume besar.',
          'Sistem seal undercarriage kedap air untuk mencegah lumpur gambut masuk ke bearing roller.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah bulldozer rawa aman melintasi tunggul kayu tajam di lahan gambut?',
        answer:
          'Aman, asalkan operator dibekali pengalaman merobohkan dan memotong tunggul secara bertahap agar tapak track shoe tidak tersangkut pada akar kayu keras.',
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

  if (candidates.length < count) {
    console.log('[ARTICLE-GENERATOR] Generating additional topics to fulfill request count...');
    const unitTemplates = [
      {
        name: 'Mini Excavator PC50',
        slugPrefix: 'sewa-mini-excavator-pc50',
        role: 'Galian Drainase Perkotaan & Ruang Sempit',
        desc: 'Panduan sewa mini excavator 5 ton untuk proyek saluran air perumahan dan galian pipa jalan sempit.',
        lead: 'Proyek galian di gang sempit perkotaan atau halaman fasilitas umum tidak memungkinkan masuknya excavator 20 ton. Mini excavator PC50 dengan lebar bodi di bawah 2 meter dan zero tail swing adalah solusi lincah tanpa merusak pagar warga.',
      },
      {
        name: 'Motor Grader 14 Kaki',
        slugPrefix: 'sewa-motor-grader-tambang',
        role: 'Perawatan Rutin Jalan Hauling Tambang Batubara & Nikel',
        desc: 'Layanan rental motor grader pisau 14 kaki untuk pemeliharaan jalan hauling tambang agar kecepatan truk stabil dan ban awet.',
        lead: 'Jalan angkut tambang yang bergelombang dan berlumpur bikin konsumsi solar dump truck boros dan ban mudah robek. Motor grader dengan moldboard 14 kaki menjaga kemiringan permukaan tetap rata dan bebas genangan air.',
      },
      {
        name: 'Vibro Roller Padfoot',
        slugPrefix: 'sewa-vibro-padfoot-lempung',
        role: 'Pemadatan Tanah Lempung Kohesif & Tanggul Waduk',
        desc: 'Rental compactor drum kaki kambing (sheepfoot) 12 ton untuk memadatkan tanah timbunan liat basah dan oprit jembatan.',
        lead: 'Memadatkan tanah lempung basah dengan roller drum halus hanya akan mengilapkan lapisan atas sementara bagian dalamnya tetap gembur. Drum kaki kambing (padfoot) meremas butiran tanah liat hingga air pori terperas keluar sempurna.',
      },
    ];

    const regions = ['Jawa Timur', 'Kalimantan Timur', 'Sumatera Selatan', 'Sulawesi Tenggara'];

    for (let i = candidates.length; i < count; i++) {
      const u = unitTemplates[i % unitTemplates.length];
      const r = regions[i % regions.length];
      const generatedSlug = `${u.slugPrefix}-${r.toLowerCase().replace(/\s+/g, '-')}-${Date.now().toString().slice(-4)}`;
      candidates.push({
        slug: generatedSlug,
        keyword: `sewa ${u.name.toLowerCase()} ${r.toLowerCase()}`,
        title: `Sewa ${u.name} di ${r}: Solusi Proyek ${u.role}`,
        metaDescription: `${u.desc} Tersedia armada prima, operator bersertifikat SIO, dan dukungan teknisi siaga di ${r}.`,
        h1: `Sewa ${u.name} di ${r} untuk Kebutuhan ${u.role}`,
        category: 'Sewa Alat Berat',
        tags: [
          `#sewa-${u.name.toLowerCase().replace(/\s+/g, '-')}`,
          `#alat-berat-${r.toLowerCase().replace(/\s+/g, '-')}`,
          '#rental-proyek',
        ],
        image: '/images/services/sewa-alat-berat.webp',
        imageAlt: `Unit ${u.name} beroperasi di proyek ${r}`,
        imageCaption: `Armada ${u.name} siap mobilisasi ke lokasi kerja Anda di ${r}.`,
        relatedService: { label: 'Layanan Sewa Alat Berat', href: '/sewa-alat-berat/' },
        leadParagraph: `${u.lead} Sentra Alat Berat siap memobilisasi armada ke lokasi proyek Anda di wilayah ${r} dengan dukungan teknisi berpengalaman.`,
        sections: [
          {
            heading: `Spesifikasi Kerja & Keunggulan ${u.name} di Wilayah ${r}`,
            content: [
              `Pekerjaan ${u.role.toLowerCase()} di area ${r} menuntut armada dengan kondisi hidrolik dan mesin diesel prima. Setiap unit yang kami berangkatkan telah lolos uji checklist 30 titik untuk memastikan tidak ada waktu terbuang akibat kendala mesin di lokasi.`,
              'Dukungan ketersediaan suku cadang fast-moving dan mekanik yang siap meluncur ke basecamp proyek Anda menjamin operasional kerja berjalan sesuai jadwal.',
            ],
            highlights: [
              'Inspeksi menyeluruh pada mesin, transmisi, dan kebocoran silinder hidrolik sebelum mobilisasi.',
              'Operator berpengalaman dengan kepemilikan Surat Izin Operator (SIO) aktif dari Kemenaker.',
              'Jaminan jam breakdown transparan: argo jam sewa dihentikan bila unit mengalami gangguan teknis.',
            ],
          },
        ],
        faqs: [
          {
            question: `Berapa lama estimasi mobilisasi ${u.name} ke lokasi kerja di ${r}?`,
            answer: `Waktu mobilisasi berkisar 1–3 hari kerja menggunakan trailer lowbed darat atau penyeberangan kapal ferry terkoordinasi.`,
          },
          {
            question: `Apakah unit bisa disewa include operator dan bahan bakar solar?`,
            answer: `Bisa. Kami melayani skema sewa kering (unit saja) maupun skema sewa basah (include operator bersertifikat SIO dan solar industri resmi).`,
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
  const newArticlesCode = toPublish
    .map((art) => {
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
        anchorText: 'pengadaan unit alat berat baru dan rekondisi',
        href: '/jual-alat-berat/',
        context: 'Cek katalog unit kerja siap pakai pada opsi',
      },
      {
        anchorText: 'pengajuan penawaran resmi via WhatsApp',
        href: '/kontak/',
        context: 'Dapatkan rincian penawaran tertulis dengan menghubungi',
      },
    ],
  }`;
    })
    .join(',\n');

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
