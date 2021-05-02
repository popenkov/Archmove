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

//escape

function closeMenuOnEsc  (evt) {
    evt.preventDefault();
    if (evt.keyCode == ESCAPE_BUTTON && navigation.classList.contains('header-nav__list--show')) {
        navigation.classList.remove('header-nav__list--show');
        userList.classList.remove('header-user-info--show');
    }
}



    document.addEventListener('keydown', closeMenuOnEsc);







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









//popup



    var searchButton = document.querySelector('.header-user-info__search-button');
    var modalSearchWindow = document.querySelector('.popup');
    var searchInput = document.querySelector('.popup-input');



    var siteBody = document.querySelector('body');

    var modalSendRequestButton = document.querySelector('.popup__submit-input');
    var ESCAPE_BUTTON = '27';

    function openSearchPanel () {
        modalSearchWindow.classList.remove('popup');
        modalSearchWindow.classList.add('popup-show');

    }

    function closeSearchPanel () {
        modalSearchWindow.classList.add('popup');
        modalSearchWindow.classList.remove('popup-show');
    }


    function closeHamburger () {
        navigation.classList.remove('header-nav__list--show');
    userList.classList.remove('header-user-info--show');
    hamburgerBtn.classList.toggle("change");
    }

    searchButton.addEventListener ('click', function () {
        /* modalSearchWindow.classList.toggle('popup-show'); */
        closeHamburger();
        openSearchPanel();
    })







/*
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
    modalSendRequestButton.addEventListener('click', closePopUp); */


