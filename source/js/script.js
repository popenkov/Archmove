//hamburger


let hamburgerBtn = document.querySelector('.hamburger-btn');
let navigation = document.querySelector('.header-nav__list');
let userList = document.querySelector('.header-user-info');

function toogleHamburger() {
    hamburgerBtn.classList.toggle("change");
};

function showMenu () {
    navigation.classList.toggle('header-nav__list--show');
    userList.classList.toggle('header-user-info--show');
}

hamburgerBtn.addEventListener('click', function () {
    toogleHamburger();
    showMenu();

}
)


//swiper
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.our-work__slider-next ',
        prevEl: '.our-work__slider-previous ',
      },

      spaceBetween: 10,


      initialSlide: 0,

      slidesPerView: 2,

      speed: 800,


});






///SLIDER

let slideIndex = 1;
let slides = document.querySelectorAll('.our-work__img');
let prev = document.querySelector('.our-work__slider-previous');
let next = document.querySelector('.our-work__slider-next');

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => {
    item.style.display = "none"
  });

   slides[slideIndex - 1].style.display = "block";

}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


prev.addEventListener('click', function (evt) {
  plusSlides(-1);
})

next.addEventListener('click', function (evt) {
  plusSlides(1);
})






//popup
/*




    var orderButton = document.querySelector('.item-of-the-week__button');
    var modalOrderWindow = document.querySelector('.modal-window');
    var pageBodyContainer = document.querySelector('.body_container');
    var siteBody = document.querySelector('body');
    var modalSendRequestButton = document.querySelector('.modal-window__button');
    var ESCAPE_BUTTON = '27';

    var closePopUp = function (evt) {
      evt.preventDefault();
      modalOrderWindow.classList.remove('modal-window--show');
      pageBodyContainer.classList.remove('body_container--filter');
      siteBody.classList.remove('body__no-scroll');

    }

    var closePopUpOnEsc = function (evt) {
      evt.preventDefault();
      if (evt.keyCode == ESCAPE_BUTTON && modalOrderWindow.classList.contains('modal-window--show')) {
        modalOrderWindow.classList.remove('modal-window--show');
        pageBodyContainer.classList.remove('body_container--filter');
        siteBody.classList.remove('body__no-scroll');
      }

    }


    var openPopUp = function (evt) {
      evt.preventDefault();

      pageBodyContainer.classList.toggle('body_container--filter');
      modalOrderWindow.classList.add('modal-window--show');
      siteBody.classList.add('body__no-scroll');

    }

    orderButton.addEventListener('click', openPopUp)
    document.addEventListener('keydown', closePopUpOnEsc);
    modalSendRequestButton.addEventListener('click', closePopUp);



//slider
    let slideIndex = 1;
    let slides = document.querySelectorAll('.reviews__item');
    let prev = document.querySelector('.slider__toggle--before');
    let next = document.querySelector('.slider__toggle--next');

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => {
        item.style.display = "none"
      });

      slides[slideIndex - 1].style.display = "block";

    }

    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }


    prev.addEventListener('click', function (evt) {
      plusSlides(-1);
    })

    next.addEventListener('click', function (evt) {
      plusSlides(1);
    })


 */
