// ▶️ Pausar el video en el último frame
const video = document.getElementById('ironVideo');
if (video) {
  video.addEventListener('ended', () => {
    try { video.currentTime = Math.max(0, video.duration - 0.05); } catch (e) {}
    video.pause();
  });
}

// ⬇️ Smooth scroll para botón y links
document.querySelectorAll('[data-scroll], .nav-link').forEach(el => {
  el.addEventListener('click', (e) => {
    const target = el.getAttribute('data-scroll') || el.getAttribute('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 🔎 Scrollspy + navbar sólido al llegar a #proyecto
const nav = document.getElementById('navbar');
const navLinksContainer = document.getElementById('nav-links');
const navToggle = document.querySelector('.nav-toggle');
const links = [...document.querySelectorAll('.nav-link')];
const sections = ['#top', '#proyecto', '#jarvis'].map(sel => document.querySelector(sel)).filter(Boolean);

if (navToggle && navLinksContainer) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinksContainer.classList.toggle('is-open', !expanded);
  });

  navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinksContainer.classList.remove('is-open');
    });
  });

  const mq = window.matchMedia('(min-width: 641px)');
  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navLinksContainer.classList.remove('is-open');
  };

  mq.addEventListener
    ? mq.addEventListener('change', e => e.matches && closeMenu())
    : mq.addListener(e => e.matches && closeMenu());
}

function onScroll() {
  const y = window.scrollY + 120;
  let current = '#top';
  sections.forEach(sec => { if (sec.offsetTop <= y) current = `#${sec.id}`; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));

  const projectTop = document.getElementById('proyecto')?.offsetTop ?? Infinity;
  if (window.scrollY + 10 >= projectTop - (nav?.offsetHeight || 0)) nav?.classList.add('solid');
  else nav?.classList.remove('solid');
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll, { once: true });

// 🎬 Animaciones laterales al entrar
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.from-left, .from-right').forEach(el => io.observe(el));

// 🟦 Partículas HUD
const particles = document.getElementById('particles');
function makeDot() {
  if (!particles) return;
  const i = document.createElement('i');
  i.style.left = Math.random()*100 + '%';
  i.style.top  = Math.random()*100 + '%';
  i.style.opacity = (0.6 + Math.random()*0.4).toFixed(2);
  i.style.animationDuration = (5 + Math.random()*4).toFixed(2) + 's';
  particles.appendChild(i);
  setTimeout(()=> i.remove(), 9000);
}
let dotTimer;
if (particles) {
  for (let k=0;k<40;k++) makeDot();
  dotTimer = setInterval(makeDot, 450);
}

// 🎛️ Equalizer dinámico
const eq = document.querySelector('.eq');
let eqTimer;
if (eq) {
  const bars = [...eq.querySelectorAll('span')];
  const animate = () => {
    bars.forEach((b, i) => {
      const h = 8 + Math.random()*28 + Math.sin(Date.now()/250 + i)*10;
      b.style.height = Math.max(8, h) + 'px';
      b.style.transform = `scaleY(${0.8 + Math.random()*1.5})`;
    });
  };
  eqTimer = setInterval(animate, 120);
}

// 🌀 Parallax suave sobre la tarjeta HUD
const card = document.getElementById('parallax');
if (card) {
  const damp = 30; // menor = más “tilt”
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    const rx = ((cy - r.height/2) / damp);
    const ry = -((cx - r.width/2) / damp);
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    card.style.setProperty('--mx', (cx / r.width * 100) + '%');
    card.style.setProperty('--my', (cy / r.height * 100) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  });
}

// ⌨️ Typewriter suave para la tagline
const line = document.getElementById('typeLine');
if (line) {
  const base = 'Asistente por voz • LLM local • Control de PC';
  line.textContent = '';
  let i = 0;
  const tw = () => {
    line.textContent = base.slice(0, i++);
    if (i <= base.length) requestAnimationFrame(tw);
  };
  requestAnimationFrame(tw);
}

// ♿ Respeta “reducir movimiento”
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if (dotTimer) clearInterval(dotTimer);
  if (eqTimer) clearInterval(eqTimer);
  if (particles) particles.innerHTML = '';
}
