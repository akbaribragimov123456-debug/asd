const modal = document.getElementById('aboutModal');
const aboutButton = document.getElementById('aboutButton');
const detailsButton = document.getElementById('detailsButton');
const closeModal = document.getElementById('closeModal');
const modalOk = document.getElementById('modalOk');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

function openAboutModal() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  closeModal.focus();
}
function hideAboutModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

aboutButton.addEventListener('click', openAboutModal);
detailsButton.addEventListener('click', openAboutModal);
closeModal.addEventListener('click', hideAboutModal);
modalOk.addEventListener('click', hideAboutModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) hideAboutModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) hideAboutModal();
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
