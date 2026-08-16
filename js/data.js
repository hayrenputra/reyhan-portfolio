/**
 * =========================================================================
 * KONFIGURASI DATA PORTOFOLIO - MUHAMMAD REYHAN AKBAR SYAHPUTRA
 * =========================================================================
 */

const portfolioData = {
  profile: {
    fullName: "Muhammad Reyhan Akbar Syahputra",
    shortName: "Reyhan Akbar",
    brandTitle: "REYHAN.DEV®",
    title: "Desain Grafis & Web Developer",
    location: "Sidoarjo, Jawa Timur, Indonesia",
    birthDate: "07 Februari 2004",
    email: "syahputraakbar0702@gmail.com",
    whatsapp: "6281231910568",
    whatsappDisplay: "+62 812-3191-0568",
    instagram: "arc_anyx",
    instagramUrl: "https://instagram.com/arc_anyx",
    avatar: "assets/images/reyhan-portrait.png",
    introTitle: "MUHAMMAD REYHAN AKBAR",
    introSubtitle: "DESAIN GRAFIS & WEB DEVELOPER",
    manifesto: "Mahasiswa S1 Teknik Informatika di UMSIDA dan praktisi Desain Grafis di Ensugi Holding yang berfokus menciptakan desain visual branding yang estetik serta pengembangan aplikasi web dan sistem informasi yang fungsional.",
    experienceYears: "2+",
    projectsCompleted: "20+",
  },

  socialLinks: [
    { name: "Instagram", url: "https://instagram.com/arc_anyx", icon: "fab fa-instagram", handle: "@arc_anyx" },
    { name: "WhatsApp", url: "https://wa.me/6281231910568", icon: "fab fa-whatsapp", handle: "+62 812-3191-0568" },
    { name: "Email", url: "mailto:syahputraakbar0702@gmail.com", icon: "fas fa-envelope", handle: "syahputraakbar0702@gmail.com" },
  ],

  // --- Klien Instagram & Social Media Management (Aesthetic Backgrounds) ---
  socialClients: [
    {
      name: "Sumo Rental Bali",
      handle: "@sumo.balirent",
      category: "Car Rental & Travel Bali",
      desc: "Pengelolaan konten visual feed, story promosi sewa mobil lepas kunci & driver di Bali, katalog armada kendaraan, dan highlight testimoni pelanggan.",
      url: "https://instagram.com/sumo.balirent",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      tag: "Social Media & Visual Marketing"
    },
    {
      name: "Chery Dwipa Bali",
      handle: "@cherybali",
      category: "Automotive & Dealership Bali",
      desc: "Desain visual promosi otomotif dealer resmi Chery di Bali, informasi spesifikasi unit SUV, pricelist interaktif, dan materi promosi event showroom.",
      url: "https://instagram.com/cherybali",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      tag: "Automotive Branding & Feed Design"
    },
    {
      name: "Treven Collection",
      handle: "@trevencollection",
      category: "Fashion & Lifestyle Brand",
      desc: "Konseptualisasi tema visual feeds, katalog fashion produk pakaian, layout story peluncuran koleksi baru, dan materi diskon musiman.",
      url: "https://www.instagram.com/trevencollection/?__pwa=1#",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      tag: "Fashion Catalog & Aesthetic Feed"
    },
    {
      name: "Arena Glamour",
      handle: "@arenaglamour",
      category: "Entertainment & Event Organizer",
      desc: "Pembuatan poster digital acara, visual teaser jadwal event hiburan, poster pengumuman line-up pengisi acara, dan dokumentasi story.",
      url: "https://www.instagram.com/arenaglamour/?__pwa=1#",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      tag: "Event Poster & Entertainment"
    },
    {
      name: "Ensugi Holding",
      handle: "@ensugi.id",
      category: "Corporate & Holding Company",
      desc: "Perancangan identitas visual korporat, infografis capaian bisnis, publikasi unit usaha holding, dan penjagaan standar brand guideline perusahaan.",
      url: "https://www.instagram.com/ensugi.id/?__pwa=1#",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      tag: "Corporate Identity & Social Media Kit"
    }
  ],

  skills: [
    { name: "Corel Draw", tag: "Vector & Print" },
    { name: "Adobe Photoshop", tag: "Visual & Photo Edit" },
    { name: "Figma", tag: "UI/UX & Prototyping" },
    { name: "Canva Pro", tag: "Social Media & Fast Design" },
    { name: "HTML5 & CSS3", tag: "Responsive Layout" },
    { name: "JavaScript", tag: "Interactive Logic" },
    { name: "Video Editing", tag: "YouTube & Event Recap" },
    { name: "Instagram Management", tag: "Feeds & Story Strategy" },
  ],

  projects: [
    {
      id: 1,
      title: "Sistem Informasi Warga RW 10 Pondok Jati",
      category: "web",
      categoryLabel: "Web Information System & Code",
      client: "Pengurus RW 10 Pondok Jati, Sidoarjo",
      duration: "Proyek Pengembangan Web",
      role: "Web Developer & UI Designer",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      summary: "Platform portal digital kependudukan terpadu dengan arsitektur web modern untuk pencatatan data warga dan transparansi administrasi.",
      description: "Sistem informasi berbasis web yang mempermudah warga dan pengurus RW dalam mengakses informasi, agenda lingkungan, serta memodernisasi tata kelola administrasi warga.",
      challenge: "Menyediakan antarmuka intuitif ramah pengguna dengan backend yang cepat dan struktur kode yang rapi.",
      solution: "Implementasi antarmuka responsif dengan skema navigasi jelas dan sistem pencatatan data terstruktur.",
      tags: ["Web System", "Source Code", "HTML5/CSS3", "JavaScript", "Responsive UI"],
    },
    {
      id: 2,
      title: "Ensugi Holding - Corporate Branding & Social Kit",
      category: "design",
      categoryLabel: "Corporate Graphic Design",
      client: "Ensugi Holding",
      duration: "Mei 2024 - Sekarang",
      role: "Desain Grafis In-House",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
      summary: "Perancangan identitas visual, materi promosi digital, konten sosial media @ensugi.id, dan aset visual marketing.",
      description: "Pembuatan materi visual perusahaan: feed/story media sosial, banner promosi, katalog produk, dan infografis yang konsisten.",
      challenge: "Mempertahankan konsistensi brand identity di berbagai unit bisnis holding dengan tempo kerja dinamis.",
      solution: "Template desain modular di Corel Draw & Photoshop serta standarisasi guideline visual yang konsisten.",
      tags: ["Brand Identity", "Corel Draw", "Photoshop", "Social Media Kit"],
    },
    {
      id: 3,
      title: "Masjid Al-Akbar Sidoarjo - Event Media & Publikasi",
      category: "design",
      categoryLabel: "Multimedia & Print Design",
      client: "Masjid Al-Akbar Sidoarjo",
      duration: "Apr 2022 - Agu 2023",
      role: "Freelance Desain Grafis & Multimedia",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
      summary: "Pembuatan flyer publikasi acara keagamaan, spanduk kegiatan, dan video dokumentasi kajian jamaah.",
      description: "Merancang media promosi visual cetak maupun digital untuk event tabligh akbar, kegiatan sosial, dan peringatan hari besar Islam.",
      challenge: "Menyampaikan informasi jadwal dan konten yang padat agar tetap nyaman dibaca dalam ukuran ponsel maupun banner cetak besar.",
      solution: "Hierarki visual yang proporsional, tipografi kontras, dan komposisi grafis yang harmonis.",
      tags: ["Event Flyer", "Banner Cetak", "Photoshop", "Corel Draw"],
    },
    {
      id: 4,
      title: "Video Production - YouTube Boxing & SMA Awards",
      category: "video",
      categoryLabel: "Video Editing & Motion",
      client: "Event Organizer & Content Creator",
      duration: "2022 - 2023",
      role: "Video Editor",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      summary: "Produksi dan penyuntingan video dinamis untuk YouTube Boxing serta video sinematik SMA Awards.",
      description: "Mengolah rekaman video menjadi konten menarik dengan teknik beat sync, color grading, transisi, dan tata suara yang dinamis.",
      challenge: "Menjaga ritme tayangan olahraga agar terasa intens, mengalir, dan nyaman dinikmati penonton.",
      solution: "Penerapan dynamic pacing, sound effect aksentuasi yang presisi, dan motion text pembuka yang memikat.",
      tags: ["Video Editing", "YouTube Content", "Color Grading", "Cinematic Motion"],
    }
  ],

  experiences: [
    {
      period: "Mei 2024 - Sekarang",
      role: "Desain Grafis & Social Media Specialist",
      organization: "Ensugi Holding",
      type: "Work",
      description: "Bertanggung jawab atas visual branding, promosi digital korporat, dan pengelolaan akun media sosial bisnis."
    },
    {
      period: "Sep 2021 - Sekarang",
      role: "S1 Teknik Informatika",
      organization: "Universitas Muhammadiyah Sidoarjo (UMSIDA)",
      type: "Education",
      description: "Mempelajari rekayasa perangkat lunak, perancangan web & sistem informasi, algoritma pemrograman, dan UI/UX."
    },
    {
      period: "2023 - 2024",
      role: "Social Media Designer & Content Creator (Freelance)",
      organization: "Sumo Rental Bali, Chery Dwipa Bali, Treven Collection, Arena Glamour",
      type: "Freelance Work",
      description: "Merancang visual feeds Instagram, story promo, katalog digital, dan banner promosi untuk berbagai brand di bidang otomotif, rental, fashion, dan event."
    },
    {
      period: "Apr 2022 - Agu 2023",
      role: "Desain Grafis & Multimedia (Freelance)",
      organization: "Masjid Al-Akbar Sidoarjo",
      type: "Freelance Work",
      description: "Merancang flyer publikasi kajian rutin, baliho acara keagamaan, dan video dokumentasi majelis."
    },
    {
      period: "2019 - 2022",
      role: "SMA - IPS Bahasa & Tim Publikasi Desain",
      organization: "SMA Antartika Sidoarjo",
      type: "Education",
      description: "Desain media publikasi kegiatan sekolah, editor video apresiasi SMA Awards, dan fotografer dokumentasi."
    }
  ]
};
