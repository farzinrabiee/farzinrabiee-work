// start plugin swiper
// var swiper = new Swiper('.swiper-container', {
//     effect:'slide',
//     loop:true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//
//     },
// });


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    loop:true,
    breakpoints: {
       576:{
           slidesPerView: 1,
           spaceBetween: 10,

       },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
    }
});
// end plugin swiper
AOS.init({

    offset:10,





});
$('#facts').parallax("50%", 0.3);

$('.timer').countTo({
    scroll:true

})

$('#navbar-nav').onePageNav()
$('#navbar-nav2').onePageNav()