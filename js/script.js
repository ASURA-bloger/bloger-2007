'use strict';

document.addEventListener('DOMContentLoaded', e => {
    const btn = document.querySelector('.header__burger'),
          menu = document.querySelector('.header__menu');

    btn.addEventListener('click', e => {
        btn.classList.toggle('header__burger-active');
        menu.classList.toggle('header__menu-active');
    })

    document.body.addEventListener('click', e => {
        if (!e.target.closest('.header__menu') && !e.target.closest('.header__burger')) {
            btn.classList.remove('header__burger-active');
            menu.classList.remove('header__menu-active');
        }
    })
});
