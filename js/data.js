/**
 * =========================================================================
 * KONFIGURASI DATA PORTOFOLIO - MUHAMMAD REYHAN AKBAR SYAHPUTRA
 * =========================================================================
 */

const portfolioData = {
  profile: {
    fullName: "Muhammad Reyhan Akbar Syahputra",
    shortName: "Reyhan Akbar",
    brandTitle: "REYSTUDIO",
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

  // --- Klien Brand & Instagram Management ---
  socialClients: [
    {
      name: "Arena Glamour",
      handle: "@arenaglamour",
      category: "Sports Center & Event",
      logo: "assets/logos/logo-arena-glamour.png",
      bgType: "white",
      url: "https://www.instagram.com/arenaglamour/?__pwa=1#"
    },
    {
      name: "Sumo Rental Bali",
      handle: "@sumo.balirent",
      category: "Car Rental & Travel Bali",
      logo: "assets/logos/logo-sumo-rental.png",
      bgType: "white",
      url: "https://instagram.com/sumo.balirent"
    },
    {
      name: "Chery Bali",
      handle: "@cherybali",
      category: "Automotive Dealership",
      logo: "assets/logos/logo-chery-bali.png",
      bgType: "dark",
      url: "https://instagram.com/cherybali"
    },
    {
      name: "Ensugi Holding",
      handle: "@ensugi.id",
      category: "Corporate Holding",
      logo: "assets/logos/logo-ensugi-holding.png",
      bgType: "dark",
      url: "https://www.instagram.com/ensugi.id/?__pwa=1#"
    },
    {
      name: "Treven Collection",
      handle: "@trevencollection",
      category: "Fashion Apparel & Lifestyle",
      logo: "assets/logos/logo-treven-collection.png",
      bgType: "white",
      url: "https://www.instagram.com/trevencollection/?__pwa=1#"
    },
    {
      name: "Glamour Fight Academy",
      handle: "Fight Academy",
      category: "Combat Sports & Martial Arts",
      logo: "assets/logos/logo-glamour-fight-academy.png",
      bgType: "transparent",
      url: "https://www.instagram.com/arenaglamour/?__pwa=1#"
    },
    {
      name: "Hamparan Project",
      handle: "Architecture & Interior",
      category: "Property & Construction Design",
      logo: "assets/logos/logo-hamparan-project.png",
      bgType: "white",
      url: "#contact"
    },
    {
      name: "Warung Cukur",
      handle: "by Deft Barber",
      category: "Barbershop & Grooming",
      logo: "assets/logos/logo-warung-cukur.png",
      bgType: "dark",
      url: "#contact"
    },
    {
      name: "AZ Project",
      handle: "Creative Enterprise",
      category: "Visual Identity & Commerce",
      logo: "assets/logos/logo-az.png",
      bgType: "white",
      url: "#contact"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Sistem Informasi Warga RW 10 Pondok Jati",
      category: "web",
      categoryLabel: "Web Information System & Code",
      client: "Pengurus RW 10 Pondok Jati, Sidoarjo",
      duration: "3 Bulan (2024)",
      role: "Fullstack Web Developer & UI Designer",
      description: "Pengembangan sistem informasi kependudukan berbasis website untuk mempermudah digitalisasi data warga, pengajuan surat pengantar digital, monitoring kegiatan RT/RW, dan transparansi laporan iuran warga secara realtime.",
      challenge: "Pengelolaan data warga yang sebelumnya manual menggunakan buku arsip fisik sering mengalami duplikasi data dan keterlambatan administrasi.",
      solution: "Merancang database terstruktur, dashboard admin responsif dengan autentikasi aman, formulir pengajuan surat warga otomatis, serta portal pengumuman kegiatan warga.",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP/MySQL", "Figma UI", "Responsive Design"],
      image: "assets/images/project-siwarga.png"
    },
    {
      id: 2,
      title: "Ensugi Holding - Corporate Identity & Marketing Kit",
      category: "branding",
      categoryLabel: "Corporate Graphic Design & Social Media",
      client: "Ensugi Holding Indonesia",
      duration: "Mei 2024 - Sekarang",
      role: "Lead Graphic Designer",
      description: "Pembuatan identitas visual korporat, corporate brand guidelines, banner promosi bisnis, infografis presentasi investor, serta materi konten media sosial harian yang mencerminkan profesionalisme perusahaan holding.",
      challenge: "Menyatukan identitas visual dari beberapa unit anak perusahaan di bawah satu naungan brand holding yang konsisten dan berwibawa.",
      solution: "Menyusun panduan warna, tipografi standar, template feed dan story modular di Corel Draw & Photoshop untuk alur kerja publikasi yang cepat dan rapi.",
      tags: ["Corel Draw", "Adobe Photoshop", "Brand Guideline", "Corporate Identity", "Social Media Feeds"],
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Masjid Al-Akbar Sidoarjo - Publikasi & Media Dakwah",
      category: "branding",
      categoryLabel: "Graphic Design & Event Publication",
      client: "DKM Masjid Al-Akbar Sidoarjo",
      duration: "Apr 2022 - Agu 2023",
      role: "Desainer Grafis & Multimedia",
      description: "Perancangan media publikasi visual untuk seluruh agenda keagamaan, spanduk event tabligh akbar, flyer pengajian rutin mingguan, jadwal sholat digital, dan konten media dakwah Instagram.",
      challenge: "Tingginya frekuensi jadwal kajian mingguan menuntut pembuatan materi publikasi yang cepat namun tetap memiliki tipografi yang mudah dibaca oleh semua kalangan usia jamaah.",
      solution: "Membuat template desain flyer tematik yang variatif dengan kontras tinggi, ilustrasi ornamen islami modern, dan susunan tipografi hierarki yang jelas.",
      tags: ["Adobe Photoshop", "Corel Draw", "Flyer Publikasi", "Event Poster", "Social Media Banner"],
      image: "assets/images/masjid-alakbar.jpg"
    },
    {
      id: 4,
      title: "Video Production - YouTube Boxing & SMA Awards",
      category: "video",
      categoryLabel: "Video Editing & Motion Graphics",
      client: "Kanal YouTube & SMA Antartika Sidoarjo",
      duration: "2022 - 2023",
      role: "Video Editor & Colorist",
      description: "Penyuntingan video pertarungan tinju YouTube dengan teknik beat sync yang memicu adrenalin penonton, pembuatan highlight reels, serta video apresiasi penghargaan SMA Awards dengan motion titles sinematik.",
      challenge: "Memilah rekaman multi-kamera berdurasi panjang dan menyelaraskan ritme aksi gerakan cepat dengan ketukan musik latar secara akurat.",
      solution: "Menerapkan dynamic pacing, sound design yang bertenaga, transisi seamless, dan color grading sinematik untuk memaksimalkan emosi penonton.",
      tags: ["Video Editing", "Color Grading", "Beat Sync", "Motion Graphics", "Sound Design"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};
