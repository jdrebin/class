'use strict';
const dayOfWeek = (function () {

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    function getDay(index) {
        return days[index - 1];
    }

    return {
        getDay: getDay,
        getDayIndex: function (name) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i + 1;
                }
            }

            return 'No such much day';
        }
    };
}());

console.log(dayOfWeek.getDay(3));
console.log(dayOfWeek.getDayIndex('tuesday'));

const interestCalculator = (function () {
    let rate = 0;
    let years = 0;

    function setRate(interest) {
        rate = interest;
    }

    function setYears(term) {
        years = term;
    }

    return {
        setRate: setRate,
        setYears: setYears,
        calculateInterest: function (principle) {
            return principle * (rate / 100);
        }
    }
}());

interestCalculator.setRate(4);
interestCalculator.setYears(30);
console.log(interestCalculator.calculateInterest(500000));