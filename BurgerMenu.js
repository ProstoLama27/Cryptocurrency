const btn = document.querySelector('.headerMenu__Burger');
const menu = document.querySelector('.main-nav');

const toggelMenu = () => {
    menu.classList.toggle('menu');
}
btn.addEventListener('click', toggelMenu);