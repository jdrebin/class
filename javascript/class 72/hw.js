(function () {
    'use strict';
    class Vehicle {
        constructor(color) {
            this.color = color;
        }
        speedLog() {
            return 'now driving at speed ' + this.speed;
        }
        go(speed) {
            if (speed) {
                this.speed = speed;
            }
            console.log(this.speedLog());
        }
        print() {
            console.log('this vehicle is', this.color, 'and is', this.speedLog());
        }
    }

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }
        speedLog() {
            return 'now flying at speed ' + this.speed;
        }
    }

    const camry = new Vehicle('red');
    camry.go(60);
    camry.print();

    const boeing = new Plane('white');
    boeing.go(600);
    boeing.print();
}());