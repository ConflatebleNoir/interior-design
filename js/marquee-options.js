$(function () {
    $('.ticker__first').marquee({
        duration: 5000,
        startVisible: true,
        duplicated: true,
        direction: 'down',
        easing: 'ease',
        speed: 30,
        gap: 10,
        delayBeforStart: 0,
        pauseOnCycle: true,
        pauseOnHover: true
    })

    $('.ticker__second').marquee({
        duration: 5000,
        startVisible: true,
        duplicated: true,
        direction: 'up',
        easing: 'ease',
        speed: 30,
        gap: 10,
        delayBeforStart: 0,
        pauseOnCycle: true,
        pauseOnHover: true
    })

    $('.ticker__third').marquee({
        duration: 5000,
        startVisible: true,
        duplicated: true,
        direction: 'down',
        easing: 'ease',
        speed: 30,
        gap: 10,
        delayBeforStart: 0,
        pauseOnCycle: true,
        pauseOnHover: true
    })

    $('.ticker__fourth').marquee({
        duration: 5000,
        startVisible: true,
        duplicated: true,
        direction: 'up',
        easing: 'ease',
        speed: 30,
        gap: 10,
        delayBeforStart: 0,
        pauseOnCycle: true,
        pauseOnHover: true
    });
});