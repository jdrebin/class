(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.speedLog = function () {
        return 'now driving at speed ' + this.speed;
    };

    Vehicle.prototype.go = function (speed) {
        if (speed) {
            this.speed = speed;
        }
        console.log(this.speedLog());
    };

    Vehicle.prototype.print = function () {
        console.log('this vehicle is', this.color, 'and is', this.speedLog());
    };

    function Plane(color) {
        Vehicle.call(this, color);
    }

    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.speedLog = function () {
        return 'now flying at speed ' + this.speed;
    };

    let camry = new Vehicle('blue');
    camry.go(60);
    camry.print();

    let boeing = new Plane('white');
    boeing.go(600);
    boeing.print();
}());