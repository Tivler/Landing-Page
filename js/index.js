(function () {
    const whatIDo = document.querySelector('.me-hero');

    typer(whatIDo, 150)
        .pause(250)
        .line('Thomas McKyer...')
})();

const hero = document.querySelector('.me-hero')
hero.classList.add('animated', 'bounceInLeft');