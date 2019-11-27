/*global $*/
(function () {
    'use strict';
    const sidebar = $("#sidebar");
    const blog = $('#blog');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            json.forEach(user => {
                const newUser = $(`<h2>${user.name}</h2>`).click(() => {
                    blog.empty();
                    blog.append(
                        `<h2>${user.username}</h2>
                        <h2>${user.website}</h2>
                        <h2>${user.company.name}</h2>
                        <h2>${user.company.catchPhrase}</h2>
                        <h2>${user.company.bs}</h2>`
                    );
                    const seePosts = $(`<button>see posts</button>`).click(() => {
                        blog.empty();
                        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                            .then(response => response.json())
                            .then(json => {
                                loadPosts(json);
                            });
                    });
                    $('#blog').append(seePosts);
                });
                sidebar.append(newUser);
            });
        });
    let blogNum = 0;
    function loadPosts(json) {
        blog.empty();
        let i = 0;
        while (i < 3) {
            if (blogNum + i < json.length) {
                let thisBlog = json[blogNum + i];
                const blogTitle = $(`<h2>${thisBlog.title}</h2>`).click(() => {
                    blog.empty();
                    blog.append(`<h2>${thisBlog.body}</h2>`);
                    const backButton = $(`<button>back</button>`).click(() => {
                        loadPosts(json);
                    });
                    const showCommentsButton = getCommentsButton(thisBlog);
                    blog.append(backButton);
                    blog.append(showCommentsButton);
                });
                blog.append(blogTitle);
                i++;
            } else {
                break;
            }
        }
        if (blogNum !== 0) {
            const previousPosts = $(`<button>previous posts</button>`).click(() => {
                blogNum -= 3;
                loadPosts(json);
            });
            blog.append(previousPosts);
        }
        if (blogNum + i < json.length) {
            const morePosts = $(`<button>more posts</button>`).click(() => {
                blogNum += 3;
                loadPosts(json);
            });
            blog.append(morePosts);
        }
    }
    function getCommentsButton(thisBlog) {
        const showCommentsButton = $(`<button>show comments</button>`).click(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${thisBlog.id}`)
                .then(response => response.json())
                .then(json => {
                    json.forEach(comment => {
                        blog.append(`<div id='comments' class='comments'>
                                        <h3>${comment.name}</h3>
                                        <h3>${comment.body}</h3>
                                        <h3>${comment.email}</h3>
                                    </div>`);
                    });
                });
            showCommentsButton.replaceWith(getHideCommentsButton(thisBlog));
        });
        return showCommentsButton;
    }
    function getHideCommentsButton(thisBlog) {
        const hideCommentsButton = $(`<button>hide comments</button>`).click(() => {
            $('.comments').hide();
            hideCommentsButton.replaceWith(getCommentsButton(thisBlog));
        });
        return hideCommentsButton;
    }
}());