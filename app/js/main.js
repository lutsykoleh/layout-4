const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__menu-burger')

const body = document.body;

if(menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}