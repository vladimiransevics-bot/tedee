// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Language toggle (placeholder — real LV version to be added by developer)
document.querySelectorAll('.lang-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'LV') {
      alert('Прототип показан на RU. Латвийская версия будет подставлена разработчиком из файла landing_copy_v3.md (секции LV).');
      return;
    }
    document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Video sound toggle (default muted to allow autoplay)
function toggleVideoSound(btn) {
  const wrap = btn.closest('.feature-visual');
  const video = wrap && wrap.querySelector('video');
  if (!video) return;
  video.muted = !video.muted;
  btn.classList.toggle('is-unmuted', !video.muted);
  btn.setAttribute('aria-label', video.muted ? 'Включить звук' : 'Выключить звук');
}

// Subtle scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));