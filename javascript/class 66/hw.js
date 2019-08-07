/*global $*/
(function () {
    'use strict';
    // const title1 = $('title1');
    // const video1 = $('video1');
    // const title2 = $('title2');
    // const video2 = $('video2');
    // const title3 = $('title3');
    // const video3 = $('video3');

    fetch('hw.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(videos => {
            let counter = 1;
            videos.forEach(video => {
                $(`#title${counter}`).html(video.title);
                $(`#video${counter}`).attr('src', video.url);
                $(`#video${counter}`).attr('poster', video.thumbNail);
                counter++;
            });
        })
        .catch(() => { });
}());