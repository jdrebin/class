(function () {
    'use strict';
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