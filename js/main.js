/**
 * =========================================================================
 * JAVASCRIPT CONTROLLER - REYHAN.DEV® (HARDENED & SECURE)
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

/* --- Theme Toggle Controller --- */
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!btn) return;

  const currentTheme = localStorage.getItem('brutal_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme);

  btn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme') || 'light';
    const next = active === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('brutal_theme', next);
    } catch (e) {
      // Storage access gracefully handled
    }
    updateIcon(next);
    showToast(`MODE ${next === 'dark' ? 'GELAP 🌙' : 'TERANG ☀️'} DIAKTIFKAN`);
  });

  function updateIcon(th) {
    if (!icon) return;
    icon.className = th === 'light' ? 'fas fa-moon' : 'fas fa-sun';
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

/* --- Project Modal Dialog (Secure Rendering) --- */
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

  // Build clean sanitized HTML
  content.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: var(--color-blue-primary); margin-bottom: 0.6rem; text-transform: uppercase;">
      // STUDI KASUS PROYEK — ${escapeHTML(project.categoryLabel)}
    </div>
    
    <h2 id="modal-title" style="font-family: var(--font-display); font-weight: 800; font-size: clamp(1.8rem, 3.8vw, 2.6rem); text-transform: uppercase; line-height: 1.15; margin-bottom: 1.5rem;">
      ${escapeHTML(project.title)}
    </h2>

    <div style="width: 100%; height: 320px; border: 2px solid var(--border-ui); overflow: hidden; margin-bottom: 2rem; background: #0A0A0A;">
      <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1.25rem; border: 2px solid var(--border-ui); padding: 1.5rem; margin-bottom: 2rem; background: var(--bg-alt);">
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">KLIEN / INSTANSI</div>
        <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; margin-top: 0.25rem;">${escapeHTML(project.client)}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DURASI</div>
        <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; margin-top: 0.25rem;">${escapeHTML(project.duration)}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">PERAN UTAMA</div>
        <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.05rem; margin-top: 0.25rem;">${escapeHTML(project.role)}</div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.75rem;">RINGKASAN & DESKRIPSI</h3>
      <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main);">${escapeHTML(project.description)}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
      <div style="border: 2px solid var(--border-ui); padding: 1.35rem; background: var(--bg-alt);">
        <div style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: #EF4444; margin-bottom: 0.35rem;">[ TANTANGAN ]</div>
        <p style="font-size: 0.95rem; line-height: 1.7;">${escapeHTML(project.challenge)}</p>
      </div>
      <div style="border: 2px solid var(--border-ui); padding: 1.35rem; background: var(--color-blue-tint);">
        <div style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: var(--color-blue-primary); margin-bottom: 0.35rem;">[ SOLUSI ]</div>
        <p style="font-size: 0.95rem; line-height: 1.7;">${escapeHTML(project.solution)}</p>
      </div>
    </div>

    <div style="margin-bottom: 2.25rem;">
      <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800; margin-bottom: 0.75rem;">TOOLS & TEKNOLOGI</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${project.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; padding: 0.3rem 0.75rem; background: var(--color-blue-tint); border: 1px solid var(--color-blue-primary); color: var(--color-blue-primary);">${escapeHTML(t)}</span>`).join('')}
      </div>
    </div>

    <a href="https://wa.me/${portfolioData.profile.whatsapp}?text=${encodeURIComponent('Halo Reyhan, saya ingin mendiskusikan tentang proyek ' + project.title)}" target="_blank" rel="noopener noreferrer" class="btn-statement-blue" style="box-shadow: none; font-size: 0.92rem; padding: 1rem 2rem;">
      <i class="fab fa-whatsapp"></i> <span>DISKUSIKAN KARYA INI</span> <span>↗</span>
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

/* --- Contact Form to WhatsApp (Sanitized) --- */
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
      showToast('HARAP ISI SEMUA KOLOM WAJIB!');
      return;
    }

    // Sanitize lengths to prevent buffer overflow/injection
    const safeName = name.substring(0, 100);
    const safeEmail = email.substring(0, 120);
    const safeSubject = subject.substring(0, 150);
    const safeMsg = msg.substring(0, 2000);

    const text = `Halo Reyhan,\n\nNama: ${safeName}\nEmail: ${safeEmail}\nPerihal: ${safeSubject || '-'}\n\nPesan:\n${safeMsg}`;
    const waUrl = `https://wa.me/${portfolioData.profile.whatsapp}?text=${encodeURIComponent(text)}`;

    showToast('MENGARAHKAN KE WHATSAPP REYHAN...');
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      form.reset();
    }, 500);
  });
}

/* --- Toast Notification Helper --- */
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
  setTimeout(() => t.classList.remove('show'), 3000);
}
