const icon = document.querySelector('.menu');
const menu = document.querySelector('.header__icon');
const dark = document.querySelector('.control_dark');
const light = document.querySelector('.control_light');
const logo = document.querySelector('.header__logo');
const menulink = document.querySelector('.menu__list');
const right = document.querySelector('.right');
const menuLinkHide = document.querySelector('.menu__item_hide');
const controlLight = document.querySelector('.control_light');
const controlDark = document.querySelector('.control_dark');
const headerIcon = document.querySelector('.header__icon');
const heroLink = document.querySelector('.hero__link');

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

function toggleDark() {
  logo.classList.toggle('dark');
  document.body.classList.toggle('dark');
  menulink.classList.toggle('dark');
  right.classList.toggle('dark');
  menuLinkHide.classList.toggle('dark');
  controlLight.classList.toggle('dark');
  controlDark.classList.toggle('dark');
  headerIcon.classList.toggle('dark');
  heroLink.classList.toggle('dark');
}

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    toggleMenu();
  }
  if (targetElement.closest('.control_dark')) {
    if (!logo.closest('.dark')) {
      toggleDark();
    }
  }
  if (targetElement.closest('.control_light')) {
    if (logo.closest('.dark')) {
      toggleDark();
    }
  }
});
