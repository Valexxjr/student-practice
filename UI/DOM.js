'use strict';
let user = null;
let dom = (function() {
    function setUser(username = null) {
        var isUser = (username !== null);
        user = username;
        if (isUser) {
            document.getElementById('name').innerHTML = " <img src=\"img/avatar.png\" width=\"12%\" height=\"12%\"/><span>" + username + "</span>";
            document.querySelector('#logout').innerHTML = "<img src=\"img/logout.png\" width=\"13%\" height=\"13%\"/><span>Log out</span>";
        }
        else {
            document.getElementById('name').innerHTML ='';
            document.querySelector('#logout').innerHTML = "<img src=\"img/signin.png\" width=\"13%\" height=\"13%\"/><span>Sign in</span>";
        }
    };

    let photoContainer = document.querySelector('aside');

    function showPhotoPost(post, pos) {
        var isUser = (user == post.author);
        let postDiv = document.createElement('div');
        postDiv.className = 'post';

        let userPhoto = document.createElement('div');
        userPhoto.className = 'userphoto';
        userPhoto.innerHTML = '<img src=\"img/avatar.png\" width=\"12%\" height=\"12%\"/><span>\ ' + post.author + '</span>';
        
        let dateItem = document.createElement('span');
        dateItem.id = 'date';
        dateItem.innerHTML = getTime(post);

        let mainImg = document.createElement('img');
        mainImg.className = 'photopost';
        mainImg.src = 'img/road.jpg';

        let postDescription = document.createElement('div');
        postDescription.className = "description";

        let postHashtags = document.createElement('div');
        postHashtags.className = 'hashtags';
        postDescription.innerHTML = "<p>" + post.description + "</p>";
        function allhashtags() {
            var res = '';
            post.hashtags.forEach(hashtag => {
                res += (hashtag + ' ');
            });
            return res;
        }
        if (allhashtags() != '') {
            postHashtags.innerHTML = "<p>" + allhashtags() + "</p>";
            postDescription.appendChild(postHashtags);
        }
        let postButtons = document.createElement('div');
        postButtons.className = 'buttons';
        postButtons.innerHTML = "<img src=\"img/like.png\" class=\"like\"><b>" + 
            ((post.likes.length > 0) ? (post.likes.length) : ('')) + "  </b>Like it";
        if(user == post.author) {
            postButtons.innerHTML += "<img src=\"img/edit.png\" class=\"like\"> Edit post<img src=\"img/delete.png\" class=\"like\"> Delete post";
        }
        postDiv.appendChild(userPhoto);
        postDiv.appendChild(dateItem);
        postDiv.appendChild(mainImg);
        postDiv.appendChild(postDescription);
        postDiv.appendChild(postButtons);
        photoContainer.appendChild(postDiv);
    };

    function getTime(post) {
        var date = post.createdAt;
        var days = date.getDate();
        if (days < 10) 
            days = '0' + days;
        var months = date.getMonth() + 1;
        if (months < 10) 
            months = '0' + months;
        var years = date.getFullYear();
        var hours = date.getHours();
        if (hours < 10)
            hours = "0" + hours;
        var minutes = date.getMinutes();
        if (minutes < 10)
            minutes = "0" + minutes;
        return days + '.' + months + '.' + years + ' ' + hours + ':' + minutes;
    }

    return {
        showPhotoPost,
        setUser
    }

}());

function showPosts(skip, top, filterConfig) {
    document.body.querySelector('aside').innerHTML="";
    if (user !== null) {
        let addButton = document.createElement('div');
        addButton.id = 'create';
        addButton.innerHTML = "<span>What's new? Create a post to share</span><a href=\"\"><img src=\"img/add.png\"></a>";
        document.querySelector('aside').insertBefore(addButton, document.querySelector('aside').firstChild);
    }
    let currentphotoPosts = module.getPhotoPosts(skip, top, filterConfig);
    for (let i = 0; i < currentphotoPosts.length; i++)
        dom.showPhotoPost(currentphotoPosts[i], i);
    if(module.getPhotoPosts(skip, 1000, filterConfig).length > currentphotoPosts.length) {
        document.querySelector('aside').innerHTML += 
        '<button type="button" id="more"><img src="img/more.png" width="10%" height="10%"></button>';
    }
}

function addPost(post) {
    module.addPhotoPost(post);
    showPosts();
}

function removePost(id) {
    module.removePhotoPost(id);
    showPosts();
}

function editPost(id, post) {
    module.editPhotoPost(id, post);
    showPosts();
}

function setUser(user) {
    dom.setUser(user);
    showPosts();
}