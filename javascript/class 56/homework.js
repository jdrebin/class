const myApp = {
    utils: {}
};

myApp.utils = (function (theModule) {
    'use strict';
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    theModule.daysInWeek = {
        getDay: function (index) {
            return days[index - 1];
        },
        getIndex: function (day) {
            for (let index = 0; index < days.length; index++) {
                if (day === days[index]) {
                    return index + 1;
                }
            }
            return -1;
        }
    };
    return theModule;
}(myApp.utils || {}));

myApp.utils = (function (theModule) {
    'use strict';
    theModule.caseInsensitiveEquals = function (word1, word2) {
        return word1.toUpperCase() === word2.toUpperCase();
    }
    return theModule;
}(myApp.utils || {}));