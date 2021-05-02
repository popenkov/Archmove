//swiper images
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.our-work__slider-next ',
        prevEl: '.our-work__slider-previous ',
      },

      spaceBetween: 10,


      initialSlide: 1,

      slidesPerView: 2,

      speed: 800,


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

