$(document).ready(function() {

    // navigation menu item  nav-link-solution
    $(".nav-link-solution").click(function() {
        $('.submenu-solution').removeClass('menu-inactive').addClass('menu-active');
        $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
    });
    // hover effects:
    $(".nav-link-solution").hover(function() {
        $('.submenu-solution').removeClass('menu-inactive').addClass('menu-active');
        $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
    });
    //outside click
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".nav-link-solution").length) {
            $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        }
    });

    //  code ends.. first nav *******



    // navigation menu item  nav-link-products *******
    $(".nav-link-products").click(function() {
        $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        $('.submenu-production').removeClass('menu-inactive').addClass('menu-active');
    });
    //hover products
    $(".nav-link-products").hover(function() {
        $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        $('.submenu-production').removeClass('menu-inactive').addClass('menu-active');
    });
    //outside
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".nav-link-products").length) {
            $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
        }
    });
    //  code ends.. second nav *************



    // navigation menu item  nav-link-success
    $(".nav-link-success").click(function() {
        $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
    });
    // hover effects:
    $(".nav-link-success").hover(function() {
        $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
    });
    //  code ends.. third nav *******


    // navigation menu item  nav-link-about
    $(".nav-link-about").click(function() {
        $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
    });
    // hover effects:
    $(".nav-link-about").hover(function() {
        $('.submenu-solution').removeClass('menu-active').addClass('menu-inactive');
        $('.submenu-production').removeClass('menu-active').addClass('menu-inactive');
    });
    //  code ends.. third nav *******
});

// mobile menu chenge icon js
$(document).ready(function() {
    $(".mobile-menu-solution").click(function() {
        $('.icon-down').toggleClass('icon-down icon-up');
    });
    $(".mobile-menu-products").click(function() {
        $('.icon-down').toggleClass('icon-down icon-up');
    });
});


$(document).ready(function() {

    // clamp js: 
    var module1 = document.getElementById("clamp-first");
    $clamp(module1, { clamp: 3 });
    var module2 = document.getElementById("clamp-second");
    $clamp(module2, { clamp: 3 });
    var module3 = document.getElementById("clamp-third");
    $clamp(module3, { clamp: 3 });
    var module4 = document.getElementById("clamp-four");
    $clamp(module4, { clamp: 3 });
    var module5 = document.getElementById("clamp-five");
    $clamp(module5, { clamp: 3 });
    var module6 = document.getElementById("clamp-six");
    $clamp(module6, { clamp: 3 });

    var module7 = document.getElementById("clamp-seven");
    $clamp(module7, { clamp: 6 });
    var module8 = document.getElementById("clamp-eight");
    $clamp(module8, { clamp: 6 });
    var module9 = document.getElementById("clamp-nine");
    $clamp(module9, { clamp: 6 });






});