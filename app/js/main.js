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

$(document).ready(function(){
    $('.course-slider__items').slick({
        Infinity: true,
        arrows: false,
        dots:$('.course-slider__item').length > 3,
        slidesToShow:3,
        slidesToScroll:3,
        responsive:[
            {
                breakpoint: 850,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    dots:true,
                }
                
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:true,
                }
            }
        ]
    })
})