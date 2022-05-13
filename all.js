$(document).ready(function () {

    $('.click').on('mouseover', function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp(500);
        $(this).siblings(".open").slideToggle();
    });

    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        }, 700);
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        speed: 1000,
        loop: true,
        autoplay: {delay: 2000,},
        effect: 'Nested',
    
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    });


    lightbox.option({
        'resizeDuration': 2000,
        'wrapAround': true
      });
    $(window).load(function() {
      $('#slider').nivoSlider(); 
    });



});