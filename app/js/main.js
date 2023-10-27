// burger menu
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

// slider courses
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

// slider testimonials
$(document).ready(function(){
    $('.testimonials-slider').slick({
            slidesToShow:1,
            slidesToScroll:1,
            dots:true,
            arrows: false,
            autoplay:true,
            speed:500,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            autoplaySpeed: 10000,
    })
})

// slider mentors
$(document).ready(function(){
    $('.mentors__slider').slick({
        arrows: false,
        dots: true,
        autoplay:true,
        autoplaySpeed: 10000,
    })
})


// scrolling with the menu item 
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-100
    }, 500);
    return false;
});