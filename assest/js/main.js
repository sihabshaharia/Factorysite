jQuery(function ($) {
  'use strict';



  // team-item owl-carousel js start //
  $('.slider-item').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    timeOut:2000
  });

  $('.partner-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        },
        1200:{
            items:5,
        }
    }
})


$(window).scroll(function(){
  if($(this).scrollTop() >1){
    $('.menu-section').addClass('stiky');
  }
  else{
    $('.menu-section').removeClass('stiky');
  }
});

  $('.btn').magnificPopup({
    type: 'iframe'
  });

  new WOW().init();

}(jQuery));