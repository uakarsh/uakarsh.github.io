// ── Theme toggle (checkbox slider) ───────────────────────────
const html     = document.documentElement;
const checkbox = document.getElementById('themeCheck');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  checkbox.checked = (theme === 'dark');
  localStorage.setItem('theme', theme);
}

// Follow OS preference on first visit, then remember user choice
const saved  = localStorage.getItem('theme');
const osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved || (osDark ? 'dark' : 'light'));

checkbox.addEventListener('change', () => {
  applyTheme(checkbox.checked ? 'dark' : 'light');
});

// ── Nav hide / show on scroll ─────────────────────────────────
const nav = document.getElementById('nav');
let lastY = 0;
let idleTimer;

let scrollTimer = null;
window.addEventListener('scroll', () => {
  if (scrollTimer) return;
  scrollTimer = setTimeout(() => {
    const y = window.scrollY;
    if (y > lastY && y > 80) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
      nav.style.opacity   = '1';
    }
    lastY = y;
    clearTimeout(idleTimer);
    if (y > 80) {
      idleTimer = setTimeout(() => { nav.style.opacity = '0.5'; }, 2000);
    }
    scrollTimer = null;
  }, 16);
}, { passive: true });

document.addEventListener('mousemove', (e) => {
  if (e.clientY < 80) {
    nav.style.transform = 'translateY(0)';
    nav.style.opacity   = '1';
  }
});

document.addEventListener('keydown', () => {
  nav.style.transform = 'translateY(0)';
  nav.style.opacity   = '1';
});

// ── Mobile hamburger menu ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const navDrawer = document.getElementById('navDrawer');

  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      navDrawer.classList.toggle('open');
    });
  }

  // Close when a link is tapped
  if (navDrawer) {
    navDrawer.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(e) {
      navDrawer.classList.remove('open');
      if (this.hash && window.location.pathname === this.pathname) {
        e.preventDefault();
        setTimeout(() => {
          const target = document.querySelector(this.hash);
          if (target) {
            target.scrollIntoView({ behavior: 'auto' });
            history.pushState(null, null, this.hash);
          }
        }, 300);
      }
    });
    });
  }
});
