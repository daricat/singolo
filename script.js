// Header
const menu = document.getElementById('menu');

menu.addEventListener("click", (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('header__item-active')); 
    event.target.classList.add('header__item-active');
});

// Portfolio Tab Switching
const portfolio_gallery = document.getElementById('portfolio__gallery');
const portfolio_nav = document.getElementsByClassName('portfolio__navigation')[0];

let items = portfolio_gallery.children;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function mix_image() {
    for (let i = 0; i < items.length; i++) {    
        let random_int = randomInteger(0, items.length);
        let class_name = '.gallery__item:nth-of-type('+(i+1)+')';
        items[i].classList.add(class_name);
        portfolio_gallery.getElementsByClassName(class_name)[0].style.order = random_int;
    }
}

portfolio_nav.addEventListener('click', (event) => {
    portfolio_nav.querySelectorAll('button').forEach(mix_image);
});


