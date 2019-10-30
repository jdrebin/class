(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const SNAKE_SIZE = 64;
    const spacesX = Math.floor(window.innerWidth / SNAKE_SIZE);
    const spacesY = Math.floor(window.innerHeight / SNAKE_SIZE);
    const spaces = spacesX * spacesY;
    const spacesArray = [];

    class space {
        constructor(id) {
            this.id = id;
            this.x = (id % spacesX) * SNAKE_SIZE - SNAKE_SIZE;
            this.y = Math.floor(id / spacesX) * SNAKE_SIZE;
        }
    }

    for (let i = 0; i < spaces; i++) {
        let x = new space(i, i % spacesX, Math.floor(i / spacesX));
        x.occupancy = 'empty';
        spacesArray.push(x);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let direction = 'ArrowRight';
    let currentIndex = 0;
    let currentSpaces = [spacesArray[currentIndex]];
    const img2 = new Image();
    img2.src = "snakehead.png";

    const img3 = new Image();
    img3.src = "apple.png";

    let start = true;
    let score = 0;

    function addApple() {
        while (true) {
            let randomSpace = spacesArray[Math.floor(Math.random() * spacesArray.length)];
            if (randomSpace.occupancy === 'empty') {
                context.drawImage(img3, randomSpace.x, randomSpace.y, SNAKE_SIZE, SNAKE_SIZE);
                randomSpace.occupancy = 'apple';
                break;
            }
        }
    }

    function gameOver(interval) {
        clearInterval(interval);
        context.strokeText(`SCORE: ${score}`, 250, 250);
    }

    img2.addEventListener('load', () => {
        let snakeMove = setInterval(() => {
            context.clearRect(currentSpaces[currentSpaces.length - 1].x, currentSpaces[currentSpaces.length - 1].y, SNAKE_SIZE, SNAKE_SIZE);
            currentSpaces[currentSpaces.length - 1].occupancy = 'empty';
            currentSpaces.pop();
            switch (direction) {
                case 'ArrowLeft':
                    if (currentIndex % spacesX === 1) {
                        gameOver(snakeMove);
                        break;
                    }
                    currentIndex -= 1;
                    break;
                case 'ArrowRight':
                    if (currentIndex % spacesX === 0 && currentIndex !== 0) {
                        gameOver(snakeMove);
                        break;
                    }
                    currentIndex += 1;
                    break;
                case 'ArrowUp':
                    if (currentIndex <= spacesX) {
                        gameOver(snakeMove);
                        break;
                    }
                    currentIndex -= spacesX;
                    break;
                case 'ArrowDown':
                    if (currentIndex >= spacesX * spacesY - spacesX) {
                        gameOver(snakeMove);
                        break;
                    }
                    currentIndex += spacesX;
                    break;
            }
            currentSpaces.unshift(spacesArray[currentIndex]);
            if (currentSpaces[0].occupancy === 'snake') {
                gameOver(snakeMove);
            } else if (currentSpaces[0].occupancy === 'apple') {
                addApple();
                score++;
                currentSpaces.push(spacesArray[currentIndex]);
            }
            context.drawImage(img2, currentSpaces[0].x, currentSpaces[0].y, SNAKE_SIZE, SNAKE_SIZE);
            spacesArray[currentIndex].occupancy = 'snake';
            if (start) {
                addApple();
                start = false;
            }
        }, 100);

    });
    img2.addEventListener('error', () => {
        context.strokeText('OOPS', 250, 250);
    });



    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = event.key;
        }
    });

}());