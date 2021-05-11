
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





//hamburger
let ESCAPE_BUTTON = '27';

let hamburgerBtn = document.querySelector('.hamburger-btn');
let navigation = document.querySelector('.header-nav__list');
let userList = document.querySelector('.header-user-info');
let menuContainer = document.querySelector('.header__menu-container');
let siteBody = document.querySelector('body');

function toogleHamburger() {
    hamburgerBtn.classList.toggle("change");
};

function showMenu () {
    navigation.classList.toggle('header-nav__list--show');
    userList.classList.toggle('header-user-info--show');
    /* menuContainer.classList.toggle('header__menu-container--show'); */
    document.addEventListener('keydown', closeMenu);
    siteBody.classList.add('body__no-scroll');
    document.addEventListener('keydown', closeMenuOnEsc);
    
}

function closeMenu () {
    navigation.classList.remove('header-nav__list--show');
    userList.classList.remove('header-user-info--show');
    /* menuContainer.classList.remove('header__menu-container--show'); */
    hamburgerBtn.classList.remove("change");
    siteBody.classList.remove('body__no-scroll');
}

document.removeEventListener('keydown', closeMenuOnEsc);

hamburgerBtn.addEventListener('click', function () {
    toogleHamburger();
    showMenu();
}
)

window.addEventListener(`resize`, () => {
    closeMenu();
  });



//escape

function closeMenuOnEsc  (evt) {
    /* closeSearchPanel(); */
    if (evt.keyCode == ESCAPE_BUTTON && navigation.classList.contains('header-nav__list--show')) {
        navigation.classList.remove('header-nav__list--show');
        userList.classList.remove('header-user-info--show');
        hamburgerBtn.classList.toggle("change");
    }
}














//popup
let form = document.querySelector('.popup-form');
let searchButton = document.querySelector('.header-user-info__search-button');
let modalSearchWindow = document.querySelector('.popup');
let searchInput = document.querySelector('.popup-input');
let searchCloseBtn = document.querySelector('.popup__close-input');
let submitSearchBtn = document.querySelector('.popup__close-input');
let modalSendRequestButton = document.querySelector('.popup__submit-input');



    function openSearchPanel () {
        if (document.body.offsetHeight > window.innerHeight) {
            siteBody.classList.add('body__no-scrollbar');
           
        }

        siteBody.classList.add('body__no-scroll');
        
        modalSearchWindow.classList.remove('popup');
        modalSearchWindow.classList.add('popup-show');
        searchInput.focus();

    }

    function closeSearchPanel () {
        siteBody.classList.remove('body__no-scroll');
        modalSearchWindow.classList.add('popup');
        modalSearchWindow.classList.remove('popup-show');
        searchInput.value= null;
    }


    function closeHamburger () {
        navigation.classList.remove('header-nav__list--show');
    userList.classList.remove('header-user-info--show');
    hamburgerBtn.classList.toggle("change");
    }

    function sendSearchRequest () {
        alert(`You have enterered: ${searchInput.value}`);
        searchInput.value = null;
    }


    searchButton.addEventListener ('click', function () {
        console.log('123');
        closeMenu();
        if (hamburgerBtn.classList.contains('change')) {
            closeHamburger();
        }

        openSearchPanel();
    })


    searchCloseBtn.addEventListener('click', function () {
        closeSearchPanel();
    })

    modalSendRequestButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        sendSearchRequest();
        closeSearchPanel();
    })

     form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        sendSearchRequest();
        closeSearchPanel();
    })


    searchInput.addEventListener("blur", function () {
        if (searchInput.value == null || searchInput.value =="") {
            closeSearchPanel();
        }

    })











