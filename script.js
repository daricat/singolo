// Header
const menu = document.getElementById('menu');

menu.addEventListener("click", (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('header__item-active')); 
    event.target.classList.add('header__item-active');
});


// Slider. Slides switching

const slider = document.getElementsByClassName('slider__background')[0];

const section_slider = document.getElementsByClassName('slider')[0];

const next = document.getElementsByClassName('fa-chevron-right')[0];
const prev = document.getElementsByClassName('fa-chevron-left')[0];

let slides = slider.getElementsByClassName('slide');

let count = 0;

slides[0].classList.add('active_slide');
section_slider.classList.add('slide1_bg');

function next_slide() {
    count += 1;    
    
    if ( count == slides.length ) {        
        slides[count-1].classList.remove('active_slide');        
        count = 0;                
        slides[count].classList.add('active_slide');
        section_slider.classList.remove('slide2_bg');
        section_slider.classList.add('slide1_bg');
    } else {
        slides[count-1].classList.remove('active_slide');
        slides[count].classList.add('active_slide');
        section_slider.classList.remove('slide1_bg');
        section_slider.classList.add('slide2_bg');
    }    
}

function prev_slide() {
    count -= 1;
    
    if ( count < 0 ) {
        slides[0].classList.remove('active_slide');
        count = slides.length - 1;
        slides[count].classList.add('active_slide');
        section_slider.classList.remove('slide1_bg');
        section_slider.classList.add('slide2_bg');
    } else {
        slides[count+1].classList.remove('active_slide');
        slides[count].classList.add('active_slide');
        section_slider.classList.remove('slide2_bg');
        section_slider.classList.add('slide1_bg');
    }
}

next.addEventListener('click', next_slide);
prev.addEventListener('click', prev_slide);


// Phone Activating Phone Screens

const phone_button_vertical = document.getElementsByClassName('bg_button-vertical')[0];
const phone_button_horizontal = document.getElementsByClassName('bg_button-horizontal')[0];
const phone_button_slide2 = document.getElementsByClassName('bg_button_slide2')[0];

const bg_black_vertical = document.getElementsByClassName('bg_black-vertical')[0];
const bg_black_horizontal = document.getElementsByClassName('bg_black-horizontal')[0];
const bg_black_slide2 = document.getElementsByClassName('bg_black_slide2')[0];

function on_off_vertical() {
    let style_vertical = getComputedStyle(document.getElementsByClassName('bg_black-vertical')[0]);    
    
    if ( style_vertical.display == 'none' ) {
        bg_black_vertical.classList.add('bg_black-active');
    } else {
        bg_black_vertical.classList.remove('bg_black-active');
    }
}

function on_off_horizontal() {
    let style_horizontal = getComputedStyle(document.getElementsByClassName('bg_black-horizontal')[0]);

    if ( style_horizontal.display == 'none' ) {
        bg_black_horizontal.classList.add('bg_black-active');
    } else {
        bg_black_horizontal.classList.remove('bg_black-active');
    }
}

function on_off_slide2() {
    let style_slide2 = getComputedStyle(document.getElementsByClassName('bg_black_slide2')[0]);

    if ( style_slide2.display == 'none' ) {
        bg_black_slide2.classList.add('bg_black-active');
    } else {
        bg_black_slide2.classList.remove('bg_black-active');
    }
}

phone_button_vertical.addEventListener('click', on_off_vertical);
phone_button_horizontal.addEventListener('click', on_off_horizontal);
phone_button_slide2.addEventListener('click', on_off_slide2);

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

// Portfolio active image

portfolio_gallery.addEventListener("click", (event) => {
    portfolio_gallery.querySelectorAll('img').forEach(el => el.classList.remove('gallery_item-active')); 

    let element = event.target;
    let element_a = element.classList.contains("gallery__item");
    let element_div = element.classList.contains("portfolio__gallery");

    if ( element_a == true || element_div == true ) {
        element.classList.remove('gallery_item-active');
    } else {
        element.classList.add('gallery_item-active');
    }    
});


// Quote message 

const form_submit = document.getElementsByClassName('email_submit')[0];
const message_block = document.getElementsByClassName('quote__message')[0];
const message_close = document.getElementsByClassName('message_close')[0];


let message_theme = document.getElementsByClassName('message_theme')[0];
let message_describe = document.getElementsByClassName('message_describe')[0];


function get_info () {
    let theme_value = document.getElementById('quote_theme').value;
    let describe_value = document.getElementById('quote_describe').value;

    if ( theme_value.length == 0) {
        message_theme.textContent = 'Без темы';
    } else {
        message_theme.textContent = 'Тема:' + theme_value;
    }

    if ( describe_value.length == 0 ) {
        message_describe.textContent = 'Без описания ';
    } else {
        message_describe.textContent = 'Описание: ' + describe_value;
    }

    message_block.classList.add('quote__message-active');

}

function mess_close () {
    message_block.classList.remove('quote__message-active');
    document.getElementsByClassName('quote__email')[0].reset();
}

form_submit.addEventListener('click', get_info);
message_close.addEventListener('click', mess_close);