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
let searchButton = document.querySelector('.header-user-info__search-button');
let modalSearchWindow = document.querySelector('.popup');
let searchInput = document.querySelector('.popup-input');
let searchCloseBtn = document.querySelector('.popup__close-input');
let submitSearchBtn = document.querySelector('.popup__close-input');
let modalSendRequestButton = document.querySelector('.popup__submit-input');
let siteBody = document.querySelector('body');



    function openSearchPanel () {
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











