const myStorage = window.localStorage;

const menu = document.querySelector('.menu');
const icon = document.querySelector('.header__icon');
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
const resourceTitle = document.querySelector('.resource__title');
const productsTitle = document.querySelector('.products__title');
const slide = document.querySelector('.slide');
const sliderPagination = document.querySelector('.slider__pagination');
const app = document.querySelector('.app__body');
const appBtns = document.querySelector('app__btns');
let flag = 0;

console.log(myStorage.getItem('theme'));
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') == 'dark') {
  toggleDark();
}

window.addEventListener('resize', () => {
  if (parseInt(window.innerWidth) >= 819.98 && menu.classList.contains('active')) {
    toggleMenu();
  }
});

function toggleMenu() {
  document.body.classList.toggle('_lock');
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
  menu.classList.toggle('dark');
  resourceTitle.classList.toggle('dark');
  productsTitle.classList.toggle('dark');
  slide.classList.toggle('dark');
  sliderPagination.classList.toggle('dark');
  app.classList.toggle('dark');
  console.log('toggle flag', flag);
  if (flag == 1) {
    if (myStorage.getItem('theme') == 'light') {
      myStorage.setItem('theme', 'dark');
    } else {
      myStorage.setItem('theme', 'light');
    }
  } else {
    flag = 1;
  }
  console.log('toggle flag', flag);
  console.log('toggle', myStorage.getItem('theme'));
}

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    toggleMenu();
  }
  if (targetElement.closest('.menu__link')) {
    console.log('GO');
    if (icon.closest('.active')) toggleMenu();
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
