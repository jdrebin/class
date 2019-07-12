(function () {
    'use strict';
    function getElem(id) {
        return document.getElementById(id);
    }
    const theBody = document.getElementsByTagName('body')[0];
    const theButton = getElem('theButton');
    const theTable = getElem('theTable');
    let start = false;
    let colorChange = 0;
    theButton.addEventListener('click', () => {
        start = !start;
        if (start) {
            colorChange = setInterval(() => {

                function randomRGB() {
                    return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
                }
                theBody.style.backgroundColor = randomRGB();
                theBody.style.color = randomRGB();

                const row = theTable.insertRow();
                const textColorCell = row.insertCell();
                const bgColorCell = row.insertCell();
                const dateCell = row.insertCell();
                const theDate = new Date();
                textColorCell.innerHTML = theBody.style.color;
                bgColorCell.innerHTML = theBody.style.backgroundColor;
                dateCell.innerHTML = theDate.toLocaleTimeString();
                textColorCell.addEventListener('mouseenter', () => {
                    textColorCell.style.backgroundColor = textColorCell.innerHTML;
                });
                textColorCell.addEventListener('mouseleave', () => {
                    textColorCell.style.backgroundColor = '';
                });
                textColorCell.addEventListener('click', () => {
                    theBody.style.color = textColorCell.innerHTML;
                });
                bgColorCell.addEventListener('click', () => {
                    theBody.style.backgroundColor = bgColorCell.innerHTML;
                });
                bgColorCell.addEventListener('mouseenter', () => {
                    bgColorCell.style.backgroundColor = bgColorCell.innerHTML;
                });
                bgColorCell.addEventListener('mouseleave', () => {
                    bgColorCell.style.backgroundColor = '';
                });
            }, 2000);
        } else {
            clearInterval(colorChange);
        }
    });
}());