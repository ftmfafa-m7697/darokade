const swiperSlider = new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

$(document).ready(function () {

    $(".hamburger-menu").click(function () {
        $(".navbar-navigation-right").addClass("open-burger-menu");
    });

    $(".close").click(function () {
        $(".navbar-navigation-right").removeClass("open-burger-menu");
    });

    $(".hamburger-menu-2").click(function () {
        $(".navbar-navigation-right").addClass("open-burger-menu");
    });

    $(".close-2").click(function () {
        $(".navbar-navigation-right").removeClass("open-burger-menu");
    });


    $(".slide-down-btn-1").click(function () {
        $(".dropdown-menu-1").removeClass("d-none");
    });

    $(".slide-down-btn-1").click(function () {
        $(".dropdown-menu-1").toggleClass("d-flex");
    });
    $(".slide-down-btn-1").click(function () {
        $(".dropdown-menu-1").slideUp("1000");
    });
   

    
    $(".slide-down-btn-2").click(function () {
        $(".dropdown-menu-2").removeClass("d-none");
    });

    $(".slide-down-btn-2").click(function () {
        $(".dropdown-menu-2").toggleClass("d-flex");
    });
    $(".slide-down-btn-2").click(function () {
        $(".dropdown-menu-2").slideUp("1000");
    });


    
    $(".slide-down-btn-3").click(function () {
        $(".dropdown-menu-3").removeClass("d-none");
    });

    $(".slide-down-btn-3").click(function () {
        $(".dropdown-menu-3").toggleClass("d-flex");
    });
    $(".slide-down-btn-3").click(function () {
        $(".dropdown-menu-3").slideUp("1000");
    });

    
    $(".slide-down-btn-4").click(function () {
        $(".dropdown-menu-4").removeClass("d-none");
    });

    $(".slide-down-btn-4").click(function () {
        $(".dropdown-menu-4").toggleClass("d-flex");
    });
    $(".slide-down-btn-4").click(function () {
        $(".dropdown-menu-4").slideUp("1000");
    });

});
