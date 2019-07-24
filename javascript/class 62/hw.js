(function () {
    'use strict';
    window.pcs = window.pcs || {};

    window.pcs.tools = (function () {

        function get(id) {
            return document.getElementById(id);
        }

        function setCss(element, property, style) {
            element.style[property] = style;
        }

        function getCss(element, property) {
            return element.style[property];
        }

        const dataSet = {};

        return function (id) {
            const elem = get(id);

            return {
                css: function (property, style) {
                    if (arguments.length < 2) {
                        return getCss(elem, property);
                    }
                    setCss(elem, property, style);
                    return this;
                },
                hide: function () {
                    setCss(elem, 'display', 'none');
                    return this;
                },
                show: function () {
                    setCss(elem, 'display', 'block');
                    return this;
                },
                click: function (callback) {
                    elem.addEventListener('click', callback);
                    return this;
                },
                colorChanger: function (color, flashTimeInSeconds = 30, flashInterval = 2000) {
                    let currentColor = getCss(elem, 'color');
                    let totalSeconds = 0.0;
                    let secondIncrementor = flashInterval / 1000;
                    const timer = setInterval(() => {
                        if (getCss(elem, 'color') === currentColor) {
                            setCss(elem, 'color', color);
                        } else {
                            setCss(elem, 'color', currentColor);
                        }
                        totalSeconds += secondIncrementor;
                        if (totalSeconds >= flashTimeInSeconds) {
                            setCss(elem, 'color', currentColor);
                            clearInterval(timer);
                        }
                    }, flashInterval);
                    return this;
                },
                data: function (key, value) {
                    if (key === undefined) {
                        return dataSet;
                    } else if (value === undefined) {
                        return dataSet[key];
                    } else {
                        dataSet[key] = value;
                        return this;
                    }
                }
            };
        };
    }());
}());