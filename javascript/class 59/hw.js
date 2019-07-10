(function () {
    'use strict';
    const textColor = document.getElementById('textColor');
    const textColorButton = document.getElementById('textColorButton');
    const backgroundColor = document.getElementById('backgroundColor');
    const backgroundColorButton = document.getElementById('backgroundColorButton');

    textColorButton.addEventListener('click', () => {
        textColor.style.color = textColor.value;
    });

    backgroundColorButton.addEventListener('click', () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = backgroundColor.value;
    });

}());