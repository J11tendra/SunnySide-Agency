// Variables:-
const menu = document.querySelector(".menu");
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
    console.log("button is clicked.");

    if (menu.classList.contains('fade-in')) { // Closing the menu:-
        menu.classList.add('fade-out');
        menu.classList.remove('fade-in');
        body.classList.remove('noscroll');
        console.log('Closing the menu.');
    }
    else { //Opening the menu:-
        menu.classList.add('fade-in');
        body.classList.add('noscroll')
        menu.classList.remove('fade-out');
        console.log('Opening the menu.');
    }
})