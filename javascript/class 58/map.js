// SL - nice
(function () {
    'use strict';
    function newMap(array, callback) {
        let doubledArray = []; // SL - comment - calling it doubledArray is a bad idea. doubling numbers is just an example. You could use this mapping function to map people objects to names for example
        for (let index = 0; index < array.length; index++) {
            doubledArray[index] = callback(array[index]); // SL - comment - could just use doubledArray.push, youll get same order
        }
        return doubledArray;
    }

    // SL - comment - nice candidate for an arrow function where used in test below
    function double(num) {
        return num * 2;
    }
    let array1 = [2, 4, 6];
    let array2 = newMap(array1, double);
    console.log(array1, array2);
}());