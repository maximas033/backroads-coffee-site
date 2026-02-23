const btn = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (btn && links) {
  btn.addEventListener('click', () => links.classList.toggle('open'));
}
