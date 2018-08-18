(function () {
    const whatIDo = document.querySelector('.what-i-do');

    typer(whatIDo, 80)
        .pause(100)
        .line('Creative Thinker')
        .pause(1250)
        .back('all', 50)
        .continue('Highly Motivated')
        .pause(1250)
        .back('all', 50)
        .continue('Self-Taught')
        .pause(1250)
        .back('all', 50)
        .continue('The Life of Tivler')
        .pause(1250)
        .back('all', 50)
        .continue('A Full-Stack Software Engineer...')
})();