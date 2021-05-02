//hamburger
let ESCAPE_BUTTON = '27';

let hamburgerBtn = document.querySelector('.hamburger-btn');
let navigation = document.querySelector('.header-nav__list');
let userList = document.querySelector('.header-user-info');

function toogleHamburger() {
    hamburgerBtn.classList.toggle("change");
};

function showMenu () {
    navigation.classList.toggle('header-nav__list--show');
    userList.classList.toggle('header-user-info--show');
    document.addEventListener('keydown', closeMenuOnEsc);
}

document.removeEventListener('keydown', closeMenuOnEsc);

hamburgerBtn.addEventListener('click', function () {
    toogleHamburger();
    showMenu();

}
)

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
var searchButton = document.querySelector('.header-user-info__search-button');
var modalSearchWindow = document.querySelector('.popup');
var searchInput = document.querySelector('.popup-input');
var searchCloseBtn = document.querySelector('.popup__close-input');
let submitSearchBtn = document.querySelector('.popup__close-input');
var modalSendRequestButton = document.querySelector('.popup__submit-input');




    function openSearchPanel () {
        modalSearchWindow.classList.remove('popup');
        modalSearchWindow.classList.add('popup-show');
        searchInput.focus()

    }

    function closeSearchPanel () {

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
        searchInput.value= null;
    }


    searchButton.addEventListener ('click', function () {

        closeHamburger();
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
        closeSearchPanel();
    })









//popup



 /*


     */







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


