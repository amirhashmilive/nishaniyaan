/* ═══════════════════════════════════════════════════════════
   PRESENTATION ENGINE
   - Progress dots generation & IntersectionObserver
   - Slide badge with jump dropdown
   - Keyboard navigation (arrows, Home/End, 1-9)
   - Wide-card magnification safeguard
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.slide-container');
  if (!container) return;

  const slides = Array.from(container.querySelectorAll('.slide'));
  if (slides.length === 0) return;

  // ── 1. Progress Dots (right side) ─────────────────────
  const dotsEl = document.querySelector('.ctrl-dots');
  if (dotsEl) {
    dotsEl.innerHTML = '';
    slides.forEach((slide, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.title = 'Slide ' + (i + 1);
      dot.addEventListener('click', () => {
        slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      dotsEl.appendChild(dot);
    });
  }

  // ── 2. Slide Number Badge & Jump Menu ─────────────────
  const badgeEl = document.querySelector('.ctrl-slide-num');
  const badgeLabel = badgeEl ? badgeEl.querySelector('.badge-label') : null;
  const jumpMenu = badgeEl ? badgeEl.querySelector('.slide-jump-menu') : null;

  if (jumpMenu) {
    jumpMenu.innerHTML = '';
    slides.forEach((slide, i) => {
      const heading = slide.querySelector('h1, h2, h3, h4');
      let title = heading ? heading.textContent.trim() : 'Slide ' + (i + 1);
      if (title.length > 34) title = title.slice(0, 32) + '…';

      const btn = document.createElement('button');
      btn.className = 'slide-jump-item' + (i === 0 ? ' active' : '');
      btn.innerHTML = `<span class="jnum">${i + 1}</span><span>${title}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
        badgeEl.classList.remove('open');
      });
      jumpMenu.appendChild(btn);
    });
  }

  if (badgeEl) {
    badgeEl.addEventListener('click', (e) => {
      e.stopPropagation();
      badgeEl.classList.toggle('open');
    });
    document.addEventListener('click', () => badgeEl.classList.remove('open'));
  }

  // ── 3. IntersectionObserver — update dots, badge, active chapter ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const idx = slides.indexOf(entry.target);
      if (idx === -1) return;

      // Update badge text
      if (badgeLabel) badgeLabel.textContent = `Slide ${idx + 1} of ${slides.length}`;

      // Update dots
      if (dotsEl) {
        dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
      }

      // Update jump menu
      if (jumpMenu) {
        jumpMenu.querySelectorAll('.slide-jump-item').forEach((it, i) => it.classList.toggle('active', i === idx));
      }
    });
  }, { root: container, threshold: 0.5 });

  slides.forEach(s => observer.observe(s));

  // ── 4. Keyboard Navigation ────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    const vh = window.innerHeight;
    const currentIdx = Math.round(container.scrollTop / vh);

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        if (currentIdx < slides.length - 1) slides[currentIdx + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        if (currentIdx > 0) slides[currentIdx - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Home':
        e.preventDefault();
        slides[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'End':
        e.preventDefault();
        slides[slides.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Escape':
        if (badgeEl) badgeEl.classList.remove('open');
        break;
      default:
        if (e.key >= '1' && e.key <= '9') {
          const n = parseInt(e.key, 10);
          if (n <= slides.length) { e.preventDefault(); slides[n - 1].scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
    }
  });

  // ── 5. Wide-card magnification safeguard ──────────────
  document.querySelectorAll('.hover-magnify').forEach(card => {
    requestAnimationFrame(() => {
      if (card.offsetWidth > 400) card.classList.add('wide-card');
    });
  });

  // ── 6. Highlight active chapter link ──────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ctrl-chapters a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
});
