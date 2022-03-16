$(document).ready(function () {
    $('.slider__header').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});