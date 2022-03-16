$(function () {
    $('.ticker__first').marquee({
        duration: 10000,
        startVisible: true,
        duplicated: true,
        direction: 'down',
        easing: 'ease',
        speed: 100
    }),

        $('.ticker__second').marquee({
            duration: 10000,
            startVisible: true,
            duplicated: true,
            direction: 'up',
            easing: 'ease',
            speed: 100
        }),

        $('.ticker__third').marquee({
            duration: 10000,
            startVisible: true,
            duplicated: true,
            direction: 'down',
            easing: 'ease',
            speed: 100
        }),

        $('.ticker__fourth').marquee({
            duration: 10000,
            startVisible: true,
            duplicated: true,
            direction: 'up',
            easing: 'ease',
            speed: 100
        });
});