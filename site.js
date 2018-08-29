(function () {
    const whatIDo = document.querySelector('.what-i-do');

    typer(whatIDo, 80)
        .pause(100)
        .line('Creator')
        .pause(1250)
        .back('all', 50)
        .continue('Forward Thinker')
        .pause(1250)
        .back('all', 50)
        .continue('Self-Taught')
        .pause(1250)
        .back('all', 50)
        .continue('Software Engineer')
})();