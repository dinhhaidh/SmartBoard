

// $(window).scroll(function(){
//     $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
//     $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
// })
$(document).ready(function() {
    $('#for-you-toggle').click(function(){
        $("#for-you-menu").addClass("show-menu");
    })
    $('#for-you-close').click(function(){
        $("#for-you-menu").removeClass("show-menu");
    })
    $('.for-you-link').click(function(){
        $("#for-you-menu").removeClass("show-menu");
    })
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }else{
        sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== for-you SWIPER slider ===============*/
let swiperFor = new Swiper('.for-you-content', {
    loop: true,
    spaceBetween: 22,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

/*=============== for-you SWIPER slider ===============*/
let swiperImage = new Swiper('.for-you__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: false,


    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
      },
});

let swiperCart = new Swiper('.for-you__data', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: false,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
      },
});
let swiperNail = new Swiper('.nail-data', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
      },
});

let swiperNailswiper = new Swiper('.nail-swiper', {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 'auto',
    centeredSlides: false,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
      },
});
let swiperNailImage = new Swiper('.nail__images', {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 'auto',
    centeredSlides: false,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
      },
});