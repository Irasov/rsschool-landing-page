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
const catalogTitle = document.querySelector('.catalog__title');
const slide = document.querySelector('.slide');
const slider = document.querySelector('.slider__body');
const sliderPagination = document.querySelector('.slider__pagination');
const app = document.querySelector('.app__body');
const appBtns = document.querySelector('.app__btns');
const filter = document.querySelector('.filter');
const catalogItems = document.querySelector('.catalog__items');
const sliderLeft = document.querySelector('._left');
const sliderRight = document.querySelector('._right');
let flag = 0;

if (!myStorage.getItem('theme')) {
  myStorage.setItem('theme', 'light');
}

if (myStorage.getItem('theme') == 'dark') {
  toggleDark();
}

window.addEventListener('resize', () => {
  if (parseInt(window.innerWidth) >= 768.98 && menu.classList.contains('active')) {
    toggleMenu();
  }
});

function toggleMenu() {
  document.body.classList.toggle('_lock');
  menu.classList.toggle('active');
  icon.classList.toggle('active');
}

function toggleDark() {
  if (logo) logo.classList.toggle('dark');
  document.body.classList.toggle('dark');
  if (menulink) menulink.classList.toggle('dark');
  if (right) right.classList.toggle('dark');
  if (menuLinkHide) menuLinkHide.classList.toggle('dark');
  if (controlLight) controlLight.classList.toggle('dark');
  if (controlDark) controlDark.classList.toggle('dark');
  if (headerIcon) headerIcon.classList.toggle('dark');
  if (heroLink) heroLink.classList.toggle('dark');
  if (menu) menu.classList.toggle('dark');
  if (resourceTitle) resourceTitle.classList.toggle('dark');
  if (productsTitle) productsTitle.classList.toggle('dark');
  if (slide) slide.classList.toggle('dark');
  if (sliderPagination) sliderPagination.classList.toggle('dark');
  if (app) app.classList.toggle('dark');
  if (catalogTitle) catalogTitle.classList.toggle('dark');
  if (filter) filter.classList.toggle('dark');
  if (catalogItems) catalogItems.classList.toggle('dark');
  if (slider) slider.classList.toggle('dark');
  if (flag) {
    if (myStorage.getItem('theme') == 'light') {
      myStorage.setItem('theme', 'dark');
    } else {
      myStorage.setItem('theme', 'light');
    }
  }
}

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    toggleMenu();
  }
  if (targetElement.closest('.menu__link')) {
    if (icon.closest('.active')) toggleMenu();
  }
  if (targetElement.closest('.control_dark')) {
    if (!logo.closest('.dark')) {
      flag = 1;
      toggleDark();
    }
  }
  if (targetElement.closest('.control_light')) {
    if (logo.closest('.dark')) {
      flag = 1;
      toggleDark();
    }
  }
  if (targetElement.closest('.block-catalog__open')) {
    targetElement.classList.toggle('_hide');
  }
  if (targetElement.closest('._left')) {
  }
  if (targetElement.closest('._right')) {
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    if (icon.classList.contains('active')) {
      toggleMenu();
    }
  }
});
