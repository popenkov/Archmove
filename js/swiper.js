new Swiper('.image-slider', {
    navigation: {
        nextEl: '.our-work__slider-next ',
        prevEl: '.our-work__slider-previous ',
      },

      spaceBetween: 10,


      initialSlide: 0,



      speed: 800,

      height: 500,

      breakpoints: {
        '@0.45': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@0.75': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        /* '@1.60': {
          slidesPerView: 4,
          spaceBetween: 20,
        }, */
      }


});

//swiper reviews
new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.reviews-slider__toggle--next',
        prevEl: '.reviews-slider__toggle--before',
      },

      autoHeight: true,

      initialSlide: 0,

      slidesPerView: 1,

      speed: 800,


});

