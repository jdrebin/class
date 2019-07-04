(function () {
    'use strict';
    function newMap(array, callback) {
        let doubledArray = [];
        for (let index = 0; index < array.length; index++) {
            doubledArray[index] = callback(array[index]);
        }
        return doubledArray;
    }
    function double(num) {
        return num * 2;
    }
    let array1 = [2, 4, 6];
    let array2 = newMap(array1, double);
    console.log(array1, array2);
}());