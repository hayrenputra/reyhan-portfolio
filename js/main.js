/**
 * =========================================================================
 * JAVASCRIPT CONTROLLER - FRAMER AESTHETIC & HARDENED SECURITY
 * MUHAMMAD REYHAN AKBAR SYAHPUTRA
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupProjectModal();
  setupContactForm();
  setupNavigation();
  setupMobileMenu();
});

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

/* --- Project Modal Dialog (Framer Minimalist) --- */
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
    <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; color: var(--color-primary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em;">
      // STUDI KASUS PROYEK — ${escapeHTML(project.categoryLabel)}
    </div>
    
    <h2 id="modal-title" style="font-size: clamp(1.6rem, 3.2vw, 2.2rem); font-weight: 600; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1.5rem; color: var(--color-ink);">
      ${escapeHTML(project.title)}
    </h2>

    <div style="width: 100%; height: 320px; border-radius: var(--radius-lg); border: 1px solid var(--color-border); overflow: hidden; margin-bottom: 2rem; background: #000000;">
      <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1.25rem; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem; background: var(--color-input-bg);">
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-muted); text-transform: uppercase;">Klien / Instansi</div>
        <div style="font-weight: 600; font-size: 0.98rem; margin-top: 0.25rem; color: var(--color-ink);">${escapeHTML(project.client)}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-muted); text-transform: uppercase;">Durasi</div>
        <div style="font-weight: 600; font-size: 0.98rem; margin-top: 0.25rem; color: var(--color-ink);">${escapeHTML(project.duration)}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-muted); text-transform: uppercase;">Peran Utama</div>
        <div style="font-weight: 600; font-size: 0.98rem; margin-top: 0.25rem; color: var(--color-ink);">${escapeHTML(project.role)}</div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--color-ink);">Ringkasan & Deskripsi</h3>
      <p style="font-size: 0.95rem; line-height: 1.75; color: var(--color-body);">${escapeHTML(project.description)}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 2rem;">
      <div style="border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.25rem; background: var(--color-input-bg);">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; color: #EF4444; margin-bottom: 0.35rem;">[ TANTANGAN ]</div>
        <p style="font-size: 0.88rem; line-height: 1.65; color: var(--color-body);">${escapeHTML(project.challenge)}</p>
      </div>
      <div style="border: 1px solid rgba(0, 102, 255, 0.25); border-radius: var(--radius-md); padding: 1.25rem; background: var(--color-primary-glow);">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; color: var(--color-primary); margin-bottom: 0.35rem;">[ SOLUSI ]</div>
        <p style="font-size: 0.88rem; line-height: 1.65; color: var(--color-ink);">${escapeHTML(project.solution)}</p>
      </div>
    </div>

    <div style="margin-bottom: 2.25rem;">
      <h4 style="font-size: 0.92rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--color-ink);">Teknologi & Tools</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${project.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500; padding: 4px 10px; background: var(--color-primary-glow); border: 1px solid rgba(0, 102, 255, 0.25); border-radius: var(--radius-xs); color: var(--color-primary);">${escapeHTML(t)}</span>`).join('')}
      </div>
    </div>

    <a href="https://wa.me/${portfolioData.profile.whatsapp}?text=${encodeURIComponent('Halo Reyhan, saya ingin mendiskusikan tentang proyek ' + project.title)}" target="_blank" rel="noopener noreferrer" class="btn-framer-primary" style="display: inline-flex; width: auto; font-size: 0.88rem;">
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

    const text = `Halo Reyhan,\n\nNama: ${safeName}\nEmail: ${safeEmail}\nPerihal: ${safeSubject || '-'}\n\nPesan:\n${safeMsg}`;
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
