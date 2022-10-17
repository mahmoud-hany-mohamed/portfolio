/*
*   Author: Deniel Den
*   Author URI: https://www.linkedin.com/in/denielden
*   Version: 1.5.0
*/
// preload
(() => {
    if (window.addEventListener) {
        window.addEventListener('load', () => document.querySelector('#preload').style.display = 'none', false);
    } else {
        window.attachEvent('onload', () => document.querySelector('#preload').style.display = 'none');
    }
})();

// navbar
if (screen.width <= 780) {
    let myNavbar = document.querySelector('#denNavbar').getElementsByTagName('a');
    for(let i = 0; i < myNavbar.length; i++) {
        myNavbar[i].addEventListener('click', () => {
            var collapseElementList = [].slice.call(document.querySelectorAll('.collapse.navbar-collapse'));
            var collapseList = collapseElementList.map(collapseEl => new bootstrap.Collapse(collapseEl));
        });
    }
}

// whatappEvent
let whatappBtn = document.querySelectorAll('[title~="Whatsapp"], .card-whatsapp, #wachat');
for(let i = 0; i < whatappBtn.length; i++) {
    whatappBtn[i].addEventListener('click', () => {
        gtag('event', 'Chat Whatsapp', {'event_category': 'Chat Whatsapp', 'event_action': 'Aperta Chat'});
    });
}

// goTop & scroolDisplay
const toTop = document.querySelector('#toTop');
const waChat = document.querySelector('#wachat');
toTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0;
});
window.onscroll = () => {    
    (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? toTop.style.display = 'block' : toTop.style.display = 'none';
    if(waChat){
        (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? waChat.style.display = 'block' : waChat.style.display = 'none';
    }
}

// mapsPopUp
let mapPopUp = document.querySelector('[data-modal]');
if(mapPopUp){
    mapPopUp.addEventListener('click', e => {
        let modal = document.getElementById(mapPopUp.dataset.modal);
        e.preventDefault();
        modal.classList.add('open');
    });
    let exit = document.querySelector('#mapPopUp');
    exit.addEventListener('click', () => exit.classList.remove('open'));
}