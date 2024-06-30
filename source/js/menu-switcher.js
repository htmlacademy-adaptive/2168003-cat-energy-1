const btn = document.querySelector('.main-menu__toggle-menu')
const menu = document.querySelector('.main-menu__items')

btn.addEventListener('click', function () {
  if (menu.classList.contains('main-menu__items--opened')) {
    menu.classList.remove('main-menu__items--opened');
    menu.classList.add('main-menu__items--closed');
  } else {
    menu.classList.remove('main-menu__items--closed');
    menu.classList.add('main-menu__items--opened');
  }
});

