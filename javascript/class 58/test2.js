(function () {
    'use strict';
    window.app = (function (theModule) {
        theModule.createCounter = function () {
            // SL -5
            // number is exposed in returned object. not private.
            // why not exact same as other one? declare number in function and object 
            // has closures that use it
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