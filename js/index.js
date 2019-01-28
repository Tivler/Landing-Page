(function () {
    const whatIDo = document.querySelector('.me-subhero');

    typer(whatIDo, 150)
        .pause(175)
        .line('Thomas McKyer...')
})();

const hero = document.querySelector('.main_hero')
hero.classList.add('animated', 'bounceInLeft');
