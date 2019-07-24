(function () {
    'use strict';
    const clock = document.createElement('div');
    clock.innerHTML = 'ok';
    const ticker = setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let time = `${hour} : ${minute} : ${second}`;
        clock.innerHTML = time;
    }, 1000);

    clock.style.position = 'absolute';
    clock.style.top = '50%';
    clock.style.left = '50%';
    clock.style.width = '100px';
    clock.style.height = '100px';
    clock.style.marginLeft = '10px';
    clock.style.marginTop = '10px';
    clock.style.border = '1px solid black';
    clock.style.boxSizing = 'border-box';
    clock.style.padding = '4px';
    clock.style.textAlign = 'center';
}());