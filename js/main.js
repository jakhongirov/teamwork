const elHamburgerBtn = document.querySelector('.hamburger-btn');
const elHeader = document.querySelector('.header-bottom');


elHamburgerBtn.addEventListener('click', function (){
    elHeader.classList.toggle('header-adaptive')
})