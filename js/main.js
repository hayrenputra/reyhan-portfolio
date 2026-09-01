/**
 * =========================================================================
 * JAVASCRIPT CONTROLLER - FRAMER & VETRA DESIGN SYSTEM
 * MUHAMMAD REYHAN AKBAR SYAHPUTRA
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
  setupVetraSpotlight();
  setupProjectFilters();
  setupCopyEmail();
  setupThemeToggle();
  setupProjectModal();
  setupBrandModal();
  setupContactForm();
  setupNavigation();
  setupMobileMenu();
});

/* --- Vetra Mouse Spotlight Card Glow (21st.dev / Vetra interaction) --- */
function setupVetraSpotlight() {
  const cards = document.querySelectorAll('.vetra-spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --- Vetra Category Filter Tabs --- */
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('#project-filters .filter-pill');
  const projectCards = document.querySelectorAll('#projects-grid .project-framer-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/* --- 1-Click Copy Email Pill --- */
function setupCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const textSpan = document.getElementById('copy-email-text');
  if (!copyBtn || !textSpan) return;

  copyBtn.addEventListener('click', () => {
    const email = "syahputraakbar0702@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const original = textSpan.textContent;
      textSpan.textContent = "Email Berhasil Disalin! ✓";
      copyBtn.style.borderColor = "var(--color-primary)";
      copyBtn.style.color = "var(--color-primary)";
      showToast("Alamat email disalin ke clipboard ✓");

      setTimeout(() => {
        textSpan.textContent = original;
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 2500);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  });
}

/* --- Framer Scroll Reveal Controller --- */
function setupScrollAnimations() {
  const revealElements = document.querySelectorAll('.framer-reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, (idx % 4) * 80);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* --- XSS Sanitization Helper --- */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}



/* --- Theme Toggle Controller (Framer Dark / Light) --- */
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!btn) return;

  const currentTheme = localStorage.getItem('framer_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme);

  btn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('framer_theme', next);
    } catch (e) {
      // Storage access handled gracefully
    }
    updateIcon(next);
    showToast(`Tema ${next === 'dark' ? 'Gelap (Dark Mode)' : 'Terang (Light Mode)'} Aktif`);
  });

  function updateIcon(th) {
    if (!icon) return;
    icon.className = th === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* --- Mobile Menu Toggle --- */
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('nav-links');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
    });
  });
}

/* --- Project Modal Dialog (Framer & Vetra Minimalist) --- */
function setupProjectModal() {
  const overlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

window.openProjectModal = function(id) {
  const project = portfolioData.projects.find(p => p.id === id);
  if (!project) return;

  const overlay = document.getElementById('project-modal');
  const content = document.getElementById('modal-dynamic-content');

  content.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 500; color: var(--color-primary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">
      // STUDI KASUS PROYEK — ${escapeHTML(project.categoryLabel)}
    </div>
    
    <h2 id="modal-title" style="font-size: clamp(24px, 3.2vw, 32px); font-weight: 500; letter-spacing: -1px; line-height: 1.2; margin-bottom: 20px; color: var(--color-ink);">
      ${escapeHTML(project.title)}
    </h2>

    <div style="width: 100%; height: 320px; border-radius: var(--rounded-lg); border: 1px solid var(--color-border); overflow: hidden; margin-bottom: 24px; background: #000000;">
      <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; border: 1px solid var(--color-border); border-radius: var(--rounded-lg); padding: 20px; margin-bottom: 24px; background: var(--color-input-bg);">
      <div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-muted); text-transform: uppercase;">Klien / Instansi</div>
        <div style="font-weight: 500; font-size: 14px; margin-top: 4px; color: var(--color-ink);">${escapeHTML(project.client)}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-muted); text-transform: uppercase;">Durasi</div>
        <div style="font-weight: 500; font-size: 14px; margin-top: 4px; color: var(--color-ink);">${escapeHTML(project.duration)}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-muted); text-transform: uppercase;">Peran Utama</div>
        <div style="font-weight: 500; font-size: 14px; margin-top: 4px; color: var(--color-ink);">${escapeHTML(project.role)}</div>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 16px; font-weight: 500; margin-bottom: 8px; color: var(--color-ink);">Ringkasan & Deskripsi</h3>
      <p style="font-size: 14px; line-height: 1.7; color: var(--color-body);">${escapeHTML(project.description)}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
      <div style="border: 1px solid var(--color-border); border-radius: var(--rounded-md); padding: 16px; background: var(--color-input-bg);">
        <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 500; color: #EF4444; margin-bottom: 4px;">[ TANTANGAN ]</div>
        <p style="font-size: 13px; line-height: 1.6; color: var(--color-body);">${escapeHTML(project.challenge)}</p>
      </div>
      <div style="border: 1px solid rgba(0, 102, 255, 0.25); border-radius: var(--rounded-md); padding: 16px; background: var(--color-primary-glow);">
        <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 500; color: var(--color-primary); margin-bottom: 4px;">[ SOLUSI ]</div>
        <p style="font-size: 13px; line-height: 1.6; color: var(--color-ink);">${escapeHTML(project.solution)}</p>
      </div>
    </div>

    <div style="margin-bottom: 28px;">
      <h4 style="font-size: 13px; font-weight: 500; margin-bottom: 8px; color: var(--color-ink);">Teknologi & Tools</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${project.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 11px; font-weight: 500; padding: 4px 10px; background: var(--color-primary-glow); border: 1px solid rgba(0, 102, 255, 0.25); border-radius: var(--rounded-xs); color: var(--color-primary);">${escapeHTML(t)}</span>`).join('')}
      </div>
    </div>

    <a href="https://wa.me/${portfolioData.profile.whatsapp}?text=${encodeURIComponent('Halo Reyhan, saya ingin mendiskusikan tentang proyek ' + project.title)}" target="_blank" rel="noopener noreferrer" class="btn-framer-primary" style="display: inline-flex; width: auto; font-size: 13px; height: 38px;">
      <i class="fab fa-whatsapp"></i> <span>Diskusikan Proyek Ini</span> <span>↗</span>
    </a>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* --- Smooth Navigation Helper --- */
function setupNavigation() {
  window.scrollToSection = function(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
}

/* --- Contact Form to WhatsApp (Sanitized & Validated) --- */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const msg = document.getElementById('form-message').value.trim();

    if (!name || !email || !msg) {
      showToast('Harap isi semua kolom wajib (*)');
      return;
    }

    const safeName = name.substring(0, 100);
    const safeEmail = email.substring(0, 120);
    const safeSubject = subject.substring(0, 150);
    const safeMsg = msg.substring(0, 2000);

    const text = `Halo Reyhan,\n\nNama/Instansi: ${safeName}\nEmail: ${safeEmail}\nLayanan: ${safeSubject || '-'}\n\nDetail Kebutuhan:\n${safeMsg}`;
    const waUrl = `https://wa.me/${portfolioData.profile.whatsapp}?text=${encodeURIComponent(text)}`;

    showToast('Mengarahkan ke WhatsApp Reyhan...');
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      form.reset();
    }, 400);
  });
}

/* --- Framer Minimalist Toast Notification --- */
function showToast(msg) {
  let t = document.getElementById('brutal-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'brutal-toast';
    t.className = 'toast-notification';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* =========================================================================
   BRAND DETAIL MODAL — Klik Logo = Popup Penjelasan Lengkap
   ========================================================================= */

const brandDetails = [
  {
    name: "Arena Glamour Sports Center",
    category: "Sports Center & Event Organizer",
    handle: "@arenaglamour",
    url: "https://www.instagram.com/arenaglamour/",
    logo: "assets/logos/logo-arena-glamour.png",
    logoClass: "logo-white-bg",
    desc: "Pembuatan poster digital jadwal acara musik & hiburan, teaser visual line-up pengisi acara, dokumentasi story interaktif, dan materi promosi event pertandingan olahraga.",
    tags: ["Event Poster", "Sports Center", "Teaser Video", "Entertainment"]
  },
  {
    name: "Glamour Fight Academy",
    category: "Martial Arts Academy (AG)",
    handle: "@arenaglamour",
    url: "https://www.instagram.com/arenaglamour/",
    logo: "assets/logos/logo-glamour-fight-academy.png",
    logoClass: "logo-white-bg",
    desc: "Desain visual promosi kelas bela diri, poster turnamen internal, highlight atlet, dan konten story Instagram untuk menarik peserta baru.",
    tags: ["Martial Arts", "Poster Design", "Social Media", "Highlight Reel"]
  },
  {
    name: "Sumo Rental Bali",
    category: "Car Rental Bali",
    handle: "@sumo.balirent",
    url: "https://instagram.com/sumo.balirent",
    logo: "assets/logos/logo-sumo-rental.png",
    logoClass: "logo-white-bg",
    desc: "Materi feed promosi sewa mobil lepas kunci & driver di Bali, highlight unit kendaraan, pricelist visual, serta story engagement testimoni pelanggan.",
    tags: ["Car Rental Bali", "Visual Marketing", "Feed Design", "Story Promo"]
  },
  {
    name: "Chery Dwipa Bali",
    category: "Otomotif & Dealer Resmi",
    handle: "@cherybali",
    url: "https://instagram.com/cherybali",
    logo: "assets/logos/logo-chery-bali.png",
    logoClass: "logo-dark-bg",
    desc: "Desain promosi dealer resmi mobil Chery Bali, spesifikasi unit SUV, pricelist visual, dan materi event pameran showroom.",
    tags: ["Automotive", "Feed Design", "Pricelist", "Event Promo"]
  },
  {
    name: "Ensugi Holding",
    category: "Corporate Holding",
    handle: "@ensugi.id",
    url: "https://www.instagram.com/ensugi.id/",
    logo: "assets/logos/logo-ensugi-holding.png",
    logoClass: "logo-dark-bg",
    desc: "Perancangan identitas visual korporat, infografis capaian bisnis, publikasi unit usaha holding, dan penjagaan standar brand guideline perusahaan.",
    tags: ["Corporate Identity", "Infographic", "Social Media Kit", "Brand Guideline"]
  },
  {
    name: "Treven Collection",
    category: "Fashion & Lifestyle",
    handle: "@trevencollection",
    url: "https://www.instagram.com/trevencollection/",
    logo: "assets/logos/logo-treven-collection.png",
    logoClass: "logo-white-bg",
    desc: "Konsep visual feed fashion estetis, katalog produk pakaian, layout story peluncuran koleksi baru, dan materi diskon musiman.",
    tags: ["Fashion Catalog", "Aesthetic Feed", "Product Shoot", "Story Design"]
  },
  {
    name: "Warung Cukur by deft barber",
    category: "Barbershop & Grooming",
    handle: "@warungcukur",
    url: "#",
    logo: "assets/logos/logo-warung-cukur.png",
    logoClass: "logo-dark-bg",
    desc: "Desain visual branding barbershop, konten promosi layanan potong rambut, story Instagram harian, dan materi promo paket grooming.",
    tags: ["Barbershop", "Branding", "Story Promo", "Grooming"]
  },
  {
    name: "Hamparan Project",
    category: "Creative Project",
    handle: "@hamparanproject",
    url: "#",
    logo: "assets/logos/logo-hamparan-project.png",
    logoClass: "logo-white-bg",
    desc: "Pembuatan identitas visual project kreatif, desain logo, aset grafis media sosial, dan konten promosi digital.",
    tags: ["Creative Project", "Logo Design", "Digital Content", "Visual Identity"]
  },
  {
    name: "AZ Project",
    category: "Creative Studio",
    handle: "@azproject",
    url: "#",
    logo: "assets/logos/logo-az-circle.png",
    logoClass: "logo-white-bg",
    desc: "Desain visual branding studio kreatif, pembuatan materi promosi event, konten feeds Instagram, dan konsep visual marketing.",
    tags: ["Studio Branding", "Event Promo", "Feed Design", "Visual Marketing"]
  }
];

function openBrandModal(index) {
  const brand = brandDetails[index];
  if (!brand) return;

  const modal = document.getElementById('brand-modal');
  const logoWrap = document.getElementById('brand-modal-logo-wrap');
  const titleEl = document.getElementById('brand-modal-title');
  const catEl = document.getElementById('brand-modal-category');
  const handleEl = document.getElementById('brand-modal-handle');
  const descEl = document.getElementById('brand-modal-desc');
  const tagsEl = document.getElementById('brand-modal-tags');
  const igLink = document.getElementById('brand-modal-ig-link');

  // Logo
  logoWrap.innerHTML = `<img src="${escapeHTML(brand.logo)}" alt="${escapeHTML(brand.name)}" class="brand-modal-logo ${escapeHTML(brand.logoClass)}">`;

  // Title & Category
  titleEl.textContent = brand.name;
  catEl.textContent = brand.category;

  // Handle
  handleEl.innerHTML = `<i class="fab fa-instagram"></i> <span>${escapeHTML(brand.handle)}</span>`;

  // Description
  descEl.textContent = brand.desc;

  // Tags
  tagsEl.innerHTML = brand.tags.map(t => `<span class="brand-modal-tag">${escapeHTML(t)}</span>`).join('');

  // Instagram link
  if (brand.url && brand.url !== '#') {
    igLink.href = brand.url;
    igLink.style.display = 'inline-flex';
  } else {
    igLink.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function setupBrandModal() {
  const modal = document.getElementById('brand-modal');
  const closeBtn = document.getElementById('brand-modal-close');
  if (!modal) return;

  function closeBrandModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeBrandModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeBrandModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeBrandModal();
  });
}
