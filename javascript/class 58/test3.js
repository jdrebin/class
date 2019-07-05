(function () {
    'use strict';
    for (let index = 0; index < 10; index++) {
        window.app.counter.increment();
    }
    // SL - comment - why var? (maybe consider configuring that to be an error in jshint)
    var counter1 = window.app.createCounter();
    var counter2 = window.app.createCounter();
    for (let index = 0; index < 5; index++) {
        counter1.increment();
    }
    for (let index = 0; index < 15; index++) {
        counter2.increment();
    }
    console.log(window.app.counter.getNumber(), counter1.number, counter2.number);
}());