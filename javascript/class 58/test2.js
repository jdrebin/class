(function () {
    'use strict';
    window.app = (function (theModule) {
        theModule.createCounter = {
            totalCounters: 0,
            new: function () {
                window.app.createCounter.totalCounters++;
                return {
                    number: 0,
                    increment: function () {
                        this.number++;
                    }
                };
            }
        };
        return theModule;
    }(window.app || {}));
}());