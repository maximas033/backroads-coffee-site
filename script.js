const btn = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (btn && links) {
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) links.classList.remove('open');
  });
}
