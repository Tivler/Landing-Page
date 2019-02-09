function animateCss(element, a, b, c) {
    const heading = document.querySelector(element);
    window.addEventListener("load", function () {
        heading.classList.add('animated', a, b ,c);
    });
}

animateCss('.content-wrapper', 'fadeInUp');
animateCss('.wrapper', 'fadeIn', 'slow');