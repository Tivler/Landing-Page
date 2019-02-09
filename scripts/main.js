function animateCss(element, animation) {
    const selector = document.querySelector(element);
    window.addEventListener("load", function () {
        selector.classList.add('animated', animation);
    });
}

animateCss('.main-hero', 'bounceInUp');
animateCss('.social-icon-list', 'bounceInUp');
animateCss('.nav-menu-main', 'bounceInUp');
animateCss('.footer-main', 'bounceInUp');

animateCss('.nav-menu', 'bounceInUp');
animateCss('.about-hero', 'bounceInUp');
animateCss('.description', 'bounceInUp');
animateCss('.main-hero', 'bounceInUp');
animateCss('.social-icon-about', 'bounceInUp');
animateCss('.footer', 'bounceInUp');