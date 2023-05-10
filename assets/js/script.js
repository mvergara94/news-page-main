const botaoAbreMenu = document.querySelector('#menu-open');
const botaoFechaMenu = document.querySelector('#menu-close');
const imgFecha = document.querySelector('.menu__label__img-close');
const listaMenu = document.querySelector('.header__menu__list');
const overlay = document.querySelector('.overlay');

botaoAbreMenu.addEventListener('click', () => {
  toogleClasseAberto(listaMenu, imgFecha, overlay);
});

botaoFechaMenu.addEventListener('click', () => {
  toogleClasseAberto(listaMenu, imgFecha, overlay);
});

function toogleClasseAberto() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].classList.toggle('aberto');
  }
}
