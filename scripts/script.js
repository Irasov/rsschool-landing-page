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
const slides = Array.from(document.querySelectorAll('.slide'));
const slider = document.querySelector('.slider__line');
const sliderPagination = document.querySelector('.slider__pagination');
const app = document.querySelector('.app__body');
const appBtns = document.querySelector('.app__btns');
const filter = document.querySelector('.filter');
const catalog = document.querySelector('.catalog__body');
const dots = document.querySelectorAll('.slider__btn');
const filters = document.querySelectorAll('.item-filter');
const TYPE = ['coffee', 'tea', 'dessert'];
let currentType = TYPE[0];
let flag = 0;

if (slider) {
  const totalSlides = slides.length;
  let currentSlide = 1;
  let isAnimate = false;
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);
}

function start() {
  if (!myStorage.getItem('theme')) {
    myStorage.setItem('theme', 'light');
  }

  if (myStorage.getItem('theme') == 'dark') {
    toggleDark();
  }
  if (slider) {
    setPosition(false);
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        if (isAnimate) return;
        isAnimate = true;
        currentSlide = i + 1;
        setPosition(true);
        updateDots(i);
        setTimeout(() => {
          isAnimate = false;
        }, 500);
      });
    });
  }

  if (catalog) {
    catalog.appendChild(createCatalog(currentType));
  }
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
  if (sliderPagination) sliderPagination.classList.toggle('dark');
  if (app) app.classList.toggle('dark');
  if (catalogTitle) catalogTitle.classList.toggle('dark');
  if (filter) filter.classList.toggle('dark');
  if (catalog) catalog.classList.toggle('dark');
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
  if (targetElement.closest('._left') || targetElement.closest('.slider__arrow_left')) {
    goPrev();
  }
  if (targetElement.closest('._right') || targetElement.closest('.slider__arrow_right')) {
    goNext();
  }
  if (targetElement.closest('.slider__btn')) {
    if (targetElement.classList.contains('slider__btn_one')) {
      console.log('0');
    }
  }
  if (targetElement.closest('.item-filter_coffee')) {
    toggleType(0);
    currentType = TYPE[0];
    const oldItems = catalog.lastElementChild;
    catalog.removeChild(oldItems);
    catalog.appendChild(createCatalog(currentType));
  }
  if (targetElement.closest('.item-filter_tea')) {
    toggleType(1);
    currentType = TYPE[1];
    const oldItems = catalog.lastElementChild;
    catalog.removeChild(oldItems);
    catalog.appendChild(createCatalog(currentType));
  }
  if (targetElement.closest('.item-filter_dessert')) {
    toggleType(2);
    currentType = TYPE[2];
    const oldItems = catalog.lastElementChild;
    catalog.removeChild(oldItems);
    catalog.appendChild(createCatalog(currentType));
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    if (icon.classList.contains('active')) {
      toggleMenu();
    }
  }
});

function setPosition(withAnimation = true) {
  slider.classList.toggle('animate', withAnimation);
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateDots(index) {
  dots.forEach((dot, i) => dot.classList.toggle('act', i === index));
}

function goNext() {
  if (isAnimate) return;
  isAnimate = true;
  currentSlide++;
  setPosition(true);
  updateDots((currentSlide - 1) % totalSlides);
}

function goPrev() {
  if (isAnimate) return;
  isAnimate = true;
  currentSlide--;
  setPosition(true);
  updateDots((currentSlide - 1 + totalSlides) % totalSlides);
}
if (slider) {
  slider.addEventListener('transitionend', () => {
    if (currentSlide === totalSlides + 1) {
      currentSlide = 1;
      setPosition(false);
    } else if (currentSlide === 0) {
      currentSlide = totalSlides;
      setPosition(false);
    }
    isAnimate = false;
  });
}

function createItem(image, name, text, price) {
  const item = document.createElement('div');
  item.classList.add('catalog__item', 'item-catalog');
  const itemImage = document.createElement('div');
  itemImage.classList.add('item-catalog__image');
  const itemImg = document.createElement('img');
  itemImg.classList.add('item-catalog__img');
  itemImg.setAttribute('src', image);
  itemImg.setAttribute('alt', name);
  itemImage.appendChild(itemImg);
  item.appendChild(itemImage);
  const itemBody = document.createElement('div');
  itemBody.classList.add('item-catalog__body');
  const itemName = document.createElement('span');
  itemName.classList.add('item-catalog__title');
  itemName.textContent = name;
  itemBody.appendChild(itemName);
  const itemText = document.createElement('p');
  itemText.textContent = text;
  itemText.classList.add('item-catalog__subtitle');
  itemBody.appendChild(itemText);
  const itemPrice = document.createElement('div');
  itemPrice.classList.add('item-catalog__price');
  itemPrice.textContent = price;
  itemBody.appendChild(itemPrice);
  item.appendChild(itemBody);
  return item;
}

function createCatalog(type) {
  const catalogItems = document.createElement('div');
  catalogItems.classList.add('catalog__items');
  let limit = 1;
  let hide = 0;
  const blockVisible = document.createElement('div');
  blockVisible.classList.add('catalog__block', 'block-catalog');
  const blockVisibleBody = document.createElement('div');
  blockVisibleBody.classList.add('block-catalog__body');
  const blockHide = document.createElement('div');
  blockHide.classList.add('catalog__block', 'block-catalog', '_hide');
  const open = document.createElement('div');
  open.classList.add('block-catalog__open');
  blockHide.appendChild(open);
  const blockHideBody = document.createElement('div');
  blockHideBody.classList.add('block-catalog__body');
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].category === currentType) {
      const item = createItem(
        products[i].image,
        products[i].name,
        products[i].description,
        products[i].price,
      );
      if (limit <= 4) {
        limit += 1;
        blockVisibleBody.appendChild(item);
      } else {
        hide = 1;
        blockHideBody.appendChild(item);
      }
    }
  }
  blockVisible.appendChild(blockVisibleBody);
  catalogItems.appendChild(blockVisible);
  if (hide) {
    blockHide.appendChild(blockHideBody);
    catalogItems.appendChild(blockHide);
  }
  return catalogItems;
}

function toggleType(type) {
  for (let i = 0; i < TYPE.length; i++) {
    if (filters[i].classList.contains('act')) {
      filters[i].classList.toggle('act');
    }
    if (i === type) {
      filters[i].classList.toggle('act');
    }
  }
}

start();
