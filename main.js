let menuIcon = document.querySelector('.menu-icons-wrapper');
let menuItems = document.querySelector('.navbar');
let openIcon = document.querySelector('.icon-open');
let closeIcon = document.querySelector('.icon-close');

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('navbar-open');
    openIcon.classList.toggle('icon-opened');
    closeIcon.classList.toggle('icon-close');
});

