$(document).ready(function() {
    $("#owl-carousel-we-can-help").owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        nav: true,
        navText: ["<img src='./images/icon-arrow-prev.png'>", "<img src='./images/icon-arrow-next.png'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});