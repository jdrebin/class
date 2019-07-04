(function () {
    'use strict';
    window.app = (function (theModule) {
        theModule.createCounter = function () {
            return {
                number: 0,
                increment: function () {
                    this.number++;
                }
            };
        };
        return theModule;
    }(window.app || {}));
}());