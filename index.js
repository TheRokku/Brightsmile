let lang = 'en';

function setLang(l) {
  lang = l;
  document.getElementById('langBtn').textContent = lang === 'en' ? 'ES' : 'EN';

  document.querySelectorAll('[data-en]').forEach((el) => {
    const val = el.getAttribute('data-' + lang);
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll('[data-placeholder-en]').forEach((el) => {
    el.placeholder =
      el.getAttribute('data-placeholder-' + lang) || el.placeholder;
  });

  document.documentElement.lang = lang;
}

document.getElementById('langBtn').addEventListener('click', () => {
  setLang(lang === 'en' ? 'es' : 'en');
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('open');
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(
    '.service-card, .doctor-card, .gallery-card, .testimonial-card',
  )
  .forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
