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
        autoplaySpeed: 2500
    })
});

$(document).ready(function () {
    $('.project__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        speed: 500,
        easing: 'ease',
        draggable: false,
        waitForAnimate: true,
        appendArrows: ('.project__header_arrows')
    })
});