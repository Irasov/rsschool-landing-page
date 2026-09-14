const icon = document.querySelector('.menu');
const menu = document.querySelector('.header__icon');

if (icon) {
  menu.addEventListener('click', () => {
    toggleMenu();
  });
}

window.addEventListener('resize', () => {
  if (parseInt(window.innerWidth) >= 819.98 && menu.classList.contains('active')) {
    toggleMenu();
  }
});

function toggleMenu() {
  document.body.classList.toggle('lock');
  menu.classList.toggle('active');
  icon.classList.toggle('active');
}
