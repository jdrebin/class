(function () {
    'use strict';
    window.pcs = window.pcs || {};

    window.pcs.messageBox = (function () {

        const offset = 40;
        const initialTopOffset = -75;
        const initialLeftOffset = -150;
        const width = 300;
        const height = 150;
        let currentTopOffset = initialTopOffset;
        let currentLeftOffset = initialLeftOffset;
        let numberOfOpenMessages = 0;
        let nextZIndex = 1;

        function show(msg, callback, buttons) {
            const messageBoxDiv = document.createElement('div');
            const span = document.createElement('span');
            span.innerHTML = msg;
            messageBoxDiv.appendChild(span);

            const buttonDiv = document.createElement('div');
            if (buttons == undefined) {
                const button = document.createElement('button');
                button.innerHTML = 'ok';
                buttonDiv.appendChild(button);
                messageBoxDiv.appendChild(buttonDiv);
                button.addEventListener('click', () => {
                    if (--numberOfOpenMessages === 0) {
                        currentLeftOffset = initialLeftOffset;
                        currentTopOffset = initialTopOffset;
                    }
                    document.body.removeChild(messageBoxDiv);
                    try {
                        callback(button);
                    }
                    catch (error) {

                    }
                });
            } else {
                for (let index = 0; index < buttons.length; index++) {
                    const button = document.createElement('button');
                    button.innerHTML = buttons[index];
                    buttonDiv.appendChild(button);
                    messageBoxDiv.appendChild(buttonDiv);
                    button.addEventListener('click', () => {
                        if (--numberOfOpenMessages === 0) {
                            currentLeftOffset = initialLeftOffset;
                            currentTopOffset = initialTopOffset;
                        }
                        document.body.removeChild(messageBoxDiv);
                        callback(button);
                    });

                }
            }

            document.body.appendChild(messageBoxDiv);

            messageBoxDiv.style.backgroundColor = 'lightblue';
            messageBoxDiv.style.position = 'absolute';
            messageBoxDiv.style.top = '50%';
            messageBoxDiv.style.left = '50%';
            messageBoxDiv.style.width = `${width}px`;
            messageBoxDiv.style.height = `${height}px`;
            messageBoxDiv.style.marginLeft = `${currentLeftOffset}px`;
            messageBoxDiv.style.marginTop = `${currentTopOffset}px`;
            messageBoxDiv.style.border = '1px solid black';
            messageBoxDiv.style.boxSizing = 'border-box';
            messageBoxDiv.style.padding = '4px';
            messageBoxDiv.style.textAlign = 'center';
            messageBoxDiv.style.paddingBottom = '30px';

            span.style.overflow = 'auto';
            span.style.height = '100%';
            span.style.display = 'inline-block';

            buttonDiv.style.position = 'absolute';
            buttonDiv.style.bottom = '0';
            buttonDiv.style.left = '0';
            buttonDiv.style.width = '100%';
            buttonDiv.style.marginBottom = '4px';



            messageBoxDiv.addEventListener('click', () => {
                messageBoxDiv.style.zIndex = nextZIndex++;
            });

            currentLeftOffset += offset;
            currentTopOffset += offset;

            if (parseInt(getComputedStyle(messageBoxDiv).left, 10) + currentLeftOffset + width > window.innerWidth) {
                currentLeftOffset -= (window.innerWidth - width);
            }
            if (parseInt(getComputedStyle(messageBoxDiv).top, 10) + currentTopOffset + height > window.innerHeight) {
                currentTopOffset -= (window.innerHeight - height);
            }

            numberOfOpenMessages++;
        }

        return {
            show: show
        };
    }());
}());