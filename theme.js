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

window.addEventListener('scroll', () => {
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
const menuBtn    = document.getElementById('menuBtn');
const navDrawer  = document.getElementById('navDrawer');

if (menuBtn && navDrawer) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navDrawer.classList.toggle('open');
  });

  // Close when a link is tapped
  navDrawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navDrawer.classList.remove('open'));
  });

  // Close when tapping outside
  document.addEventListener('click', (e) => {
    if (!navDrawer.contains(e.target) && e.target !== menuBtn) {
      navDrawer.classList.remove('open');
    }
  });
}


// Wrap in a block to prevent "redeclaration" errors
{
  const menuBtn = document.getElementById('menuBtn');
  const navDrawer = document.getElementById('navDrawer');

  if (menuBtn && navDrawer) {
    menuBtn.addEventListener('click', () => {
      navDrawer.classList.toggle('open');
      
      // Optional: Visual feedback on the button
      if (navDrawer.classList.contains('open')) {
        menuBtn.style.color = 'var(--accent)';
      } else {
        menuBtn.style.color = '';
      }
    });

    // Close drawer when a link is clicked
    const drawerLinks = navDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('open');
        menuBtn.style.color = '';
      });
    });
  }
}