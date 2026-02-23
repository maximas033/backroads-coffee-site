const btn = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');

if (btn && links) {
  const closeMenu = () => {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => closeMenu())
  );

  document.addEventListener('click', (e) => {
    if (!links.classList.contains('open')) return;
    if (e.target === btn || btn.contains(e.target)) return;
    if (links.contains(e.target)) return;
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });
}
