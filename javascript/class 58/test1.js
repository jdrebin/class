(function () {
    'use strict';
    // SL - If loaded second, will blow away existing window.app
    // You should have same code as in test2 here to allow for any order...
    window.app = {
        counter: (function () {
            let number = 0;
            return {
                getNumber: function () {
                    return number;
                },
                increment: function () {
                    number++;
                }
            };
        }())
    };
}());