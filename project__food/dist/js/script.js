import tabs from './modules/tabs';
import timer from'./modules/timer';
import forms from'./modules/forms';
import slider from'./modules/slider';
import calc from './modules/calc';
import cards from'./modules/cards';
import modal from'./modules/modal';
import {openModal} from './modules/modal';


document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId ), 20000);

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    timer('.timer','2020-07-11');
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calc();
    cards();
    modal('[data-modal]','.modal', modalTimerId);      
});