/* =========================================================
   Eisha Tur Razia — Portfolio scripts
   Everything here is plain JavaScript, no libraries needed.
   ========================================================= */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  /* ---------- 1. Header shadow on scroll ---------- */
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 2. Mobile menu ---------- */
  const closeMenu = () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- 3. Highlight the current section in the menu ---------- */
  const sections = [...document.querySelectorAll('main section[id]')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- 4. Fade-in on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- 5. Portfolio filter ---------- */
  const filters = document.querySelectorAll('.filter');
  const projects = document.querySelectorAll('.project-card');
  filters.forEach(btn => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filters.forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    projects.forEach(card => {
      const show = f === 'all' || card.dataset.category === f;
      card.classList.toggle('is-hidden', !show);
      if (show) card.classList.add('visible');
    });
  }));

  /* ---------- 6. Case study pop-ups ---------- */
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dlg = document.getElementById(btn.dataset.open);
      if (dlg && typeof dlg.showModal === 'function') {
        dlg.showModal();
        dlg.scrollTop = 0;
      }
    });
  });
  document.querySelectorAll('dialog').forEach(dlg => {
    dlg.querySelector('.case-close')?.addEventListener('click', () => dlg.close());
    // Click on the dark background closes the pop-up
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  });

  /* ---------- 7. Certificate lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('img');
  const lbCap = lightbox.querySelector('.lightbox-caption');
  document.querySelectorAll('[data-lightbox]').forEach(btn => {
    btn.addEventListener('click', () => {
      lbImg.src = btn.dataset.lightbox;
      lbImg.alt = btn.querySelector('img')?.alt || '';
      lbCap.textContent = btn.dataset.caption || '';
      lightbox.showModal();
    });
  });

  /* ---------- 8. "Discuss ..." buttons pre-select the service in the form ---------- */
  const serviceSelect = document.getElementById('service');
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      serviceSelect.value = link.dataset.service;
      link.closest('dialog')?.close();
    });
  });

  /* ---------- 9. Contact form (Formspree) ---------- */
  const form = document.getElementById('contact-form');
  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const EMAIL = 'eishaturrazia25@gmail.com';

  const setStatus = (msg, type) => { status.className = 'form-status ' + (type || ''); status.innerHTML = msg; };

  const validate = () => {
    let ok = true;
    form.querySelectorAll('.field').forEach(f => { f.classList.remove('invalid'); f.querySelector('.field-error')?.remove(); });
    form.querySelectorAll('[required]').forEach(input => {
      const empty = !input.value.trim();
      const badEmail = input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      if (empty || badEmail) {
        ok = false;
        const field = input.closest('.field');
        field.classList.add('invalid');
        const err = document.createElement('span');
        err.className = 'field-error';
        err.textContent = badEmail ? 'Please enter a valid email address.' : 'This field is required.';
        field.appendChild(err);
      }
    });
    if (!ok) form.querySelector('.invalid input, .invalid select, .invalid textarea')?.focus();
    return ok;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate()) { setStatus('Please fill in the highlighted fields.', 'err'); return; }

    // Form not connected yet → be honest and offer email instead
    if (form.action.includes('YOUR_FORM_ID')) {
      setStatus(`The contact form isn't connected yet. Please email me directly at <a href="mailto:${EMAIL}">${EMAIL}</a>.`, 'info');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Sending…');
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) {
        form.reset();
        setStatus('Thank you! Your message has been sent. I\'ll reply by email soon.', 'ok');
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      setStatus(`Sorry, something went wrong. Please email me at <a href="mailto:${EMAIL}">${EMAIL}</a>.`, 'err');
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* ---------- 10. Current year in footer ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
