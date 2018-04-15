﻿'use strict';
let user = null;
let users = ['sanya', 'Валай Александр', 'user', '1111'];
let passwords = ['sanya', 'valexx', 'password', '1111'];
let postsVisible = 10;
let currentFilter = {};
let dom = (function () {
    function setUserName(username = null) {
        let isUser = (username !== null);
        user = username;
        if (isUser) {
            document.getElementById('name').innerHTML = '<img src="img/avatar.png" width="12%" height="12%"/><span>' + username + '</span>';
            let logOut = document.querySelector('#logout');
            logOut.innerHTML = '';
            let image = document.createElement('img');
            image.src = 'img/logout.png';
            image.style.width = '13%';
            image.style.height = '13%';

            let logText = document.createElement('span');
            logText.innerText = 'Log out';

            logOut.appendChild(image);
            logOut.appendChild(logText);

            logOut.onclick = function () {
                setUser();
            };
        }
        else {
            document.getElementById('name').innerHTML = '';
            document.querySelector('#logout').innerHTML = '';
            let signIn = document.querySelector('#logout');
            let image = document.createElement('img');
            image.src = 'img/signin.png';
            image.style.width = '13%';
            image.style.height = '13%';

            let signText = document.createElement('span');
            signText.innerText = 'Sign in';

            signIn.appendChild(image);
            signIn.appendChild(signText);

        }
    }



    function showPhotoPost(post, pos) {
        let photoContainer = document.querySelector('aside');
        let isUser = (user === post.author);
        let postDiv = document.createElement('div');
        postDiv.className = 'post';

        let userPhoto = document.createElement('div');
        userPhoto.className = 'userphoto';
        userPhoto.innerHTML = '<img src="img/avatar.png" width="12%" height="12%"/><span>\ ' + post.author + '</span>';

        let dateItem = document.createElement('span');
        dateItem.id = 'date';
        let dateOptions = { hour: 'numeric', minute: 'numeric' };
        dateItem.innerHTML = post.createdAt.toLocaleDateString();

        let mainImg = document.createElement('img');
        mainImg.className = 'photopost';
        mainImg.src = post.photoLink;

        let postDescription = document.createElement('div');
        postDescription.className = 'description';

        let postHashtags = document.createElement('div');
        postHashtags.className = 'hashtags';
        postDescription.innerHTML = '<p>' + post.description + '</p>';
        function allhashtags() {
            let res = '';
            post.hashtags.forEach(hashtag => {
                res += (hashtag + ' ');
            });
            return res;
        }
        if (allhashtags() != '') {
            postHashtags.innerHTML = '<p>' + allhashtags() + '</p>';
            postDescription.appendChild(postHashtags);
        }

        let postButtons = document.createElement('div');
        postButtons.className = 'buttons';

        let postLike = document.createElement('img');

        let isLiked = false;
        post.likes.forEach(like => {
            if (like == user) {
                isLiked = true;
            }
        });

        if (isLiked) {
            postLike.src = 'img/like_push.png';
        }
        else {
            postLike.src = 'img/like.png';
        }
        postLike.className = 'like';

        postLike.setAttribute('onclick', 'addLike(' + post.id + ')');
        let likeText = document.createElement('b');
        likeText.innerText = ((post.likes.length > 0) ? (post.likes.length) : (''));
        postButtons.appendChild(postLike);
        postButtons.appendChild(likeText);
        postButtons.innerHTML += '<span>Like</span>';
        if (user == post.author) {
            let editImg = document.createElement('img');
            editImg.className = 'like';
            editImg.onclick = function (){
                initEdit(post);
            };
            editImg.src = 'img/edit.png';
            let editSpan = document.createElement('span');
            editSpan.innerText = 'Edit post';
            postButtons.appendChild(editImg);
            postButtons.appendChild(editSpan);

            let deleteImg = document.createElement('img');
            deleteImg.className = 'like';
            deleteImg.src = 'img/delete.png';
            deleteImg.onclick = function () {
                removePost(post.id);
            };
            let deleteSpan = document.createElement('span');
            deleteSpan.innerText = 'Delete post';
            postButtons.appendChild(deleteImg);
            postButtons.appendChild(deleteSpan);
        }
        postDiv.appendChild(userPhoto);
        postDiv.appendChild(dateItem);
        postDiv.appendChild(mainImg);
        postDiv.appendChild(postDescription);
        postDiv.appendChild(postButtons);
        photoContainer.appendChild(postDiv);
    }

    function addLike(id) {
        if (user === null) {
            return;
        }
        let photoPost = module.getPhotoPost(id);
        if (photoPost) {
            let postLikes = photoPost.likes;
            let changed = false;
            for (let i = 0; i < postLikes.length; i++) {
                if (postLikes[i] == user) {
                    postLikes.splice(i, 1);
                    changed = true;
                }
            }
            if (!changed) {
                postLikes.push(user);
            }
        }
        storageModule.saveArray();
    }

    function selectAuthors() {
        let setAuthors = new Set();
        for (let i = 0; i < photoPosts.length; i++) {
            setAuthors.add(photoPosts[i].author);
        }
        setAuthors.add('-');
        let select = document.querySelector('select');
        select.innerHTML = '';
        for (let author of setAuthors) {
            let option = document.createElement('option');
            option.innerHTML = author;
            select.appendChild(option);
        }
    }

    function selectHashtags() {
        let setHashtags = new Set();
        for (let i = 0; i < photoPosts.length; i++) {
            photoPosts[i].hashtags.forEach(hashtag => {
               setHashtags.add(hashtag);
            });
        }
        let selectHashtag = document.querySelectorAll('select')[1];
        selectHashtag.innerHTML = '';
        for (let hashtag of setHashtags) {
            let option = document.createElement('option');
            option.innerText = hashtag;
            selectHashtag.appendChild(option);
        }
    }

    function showPhotoPosts(skip = 0, top = 0, filterConfig = {}) {
        document.body.querySelector('aside').innerHTML = '';
        if (user !== null) {
            let addButton = document.createElement('div');
            addButton.id = 'create';
            addButton.innerHTML = '<span>What\'s new? Create a post to share</span><a href="#" "><img src="img/add.png" onclick="initNew()"></a>';
            document.querySelector('aside').insertBefore(addButton, document.querySelector('aside').firstChild);
        }
        let currentphotoPosts = module.getPhotoPosts(skip, postsVisible + top, filterConfig);
        currentphotoPosts.forEach((post, index) => {
            dom.showPhotoPost(post, index);
        });
        postsVisible = currentphotoPosts.length;
        if (module.getPhotoPosts(0, -1, filterConfig).length > currentphotoPosts.length) {
            let buttonMore = document.createElement('button');
            buttonMore.type = 'button';
            buttonMore.id = 'more';
            buttonMore.onclick = function () {
                paginate(currentphotoPosts.length);
            };

            let imgMore = document.createElement('img');
            imgMore.src = 'img/more.png';
            imgMore.style.width = '10%';
            imgMore.style.height = '10%';

            buttonMore.appendChild(imgMore);
            document.querySelector('aside').appendChild(buttonMore);
        }
    }

    function paginate(startNum) {
        startNum = startNum || 0;
        showPosts(0, startNum + 10, currentFilter);
    }

    function addPost(post) {
        module.addPhotoPost(post);
        showPosts();
        storageModule.saveArray();
    }

    function removePost(id) {
        module.removePhotoPost(id);
        showPosts();
        storageModule.saveArray();
    }

    function editPost(id, post) {
        module.editPhotoPost(id, post);
        showPosts();
        storageModule.saveArray();
    }

    return {
        showPhotoPost,
        setUserName,
        addLike,
        selectAuthors,
        selectHashtags,
        showPhotoPosts,
        addPost,
        removePost,
        editPost
    }

}());

function filtrate() {
    let authorName = document.querySelector('input').value;
    let date = new Date(document.querySelectorAll('input')[1].value);
    let hashs = document.querySelectorAll('input')[2].value.split(' ');
    hashs = hashs.filter(hashtag => {
       hashtag.trim();
       return hashtag != '';
    });
    currentFilter = {author: authorName, createdAt: date, hashtags: hashs};
    if(authorName == '-') {
        currentFilter = {createdAt: date, hashtags: hashs};
    }
    postsVisible = 0;
    showPosts();
}

function addHashtagOption(hash) {
    document.querySelectorAll('input')[2].value += ' ' + hash.options[hash.selectedIndex].text;
}

function setAuthorOption(author) {
    document.querySelector('input').value = author.options[author.selectedIndex].text;
}

function setUser(user) {
    currentFilter = {};
    postsVisible = 0;
    dom.setUserName(user);
    showPosts();
}

function addLike(id) {
    dom.addLike(id);
    showPosts();
}

function showPosts() {
    dom.showPhotoPosts(0, 10, currentFilter);
    dom.selectAuthors();
    dom.selectHashtags();
}

function addPost(post) {
    dom.addPost(post);
}

function removePost(id) {
    dom.removePost(id);
}

function editPost(id, post) {
    dom.editPost(id, post);
}

function initLogin() {
    document.querySelector('#content').innerHTML = '<div id="form">\n' +
        '  <h1>Authorization</h1>\n' +
        '  <h3></h3>\n' +
        '    <h2>Login</h2>\n' +
        '    <input size="20">\n' +
        '    <h2>Password</h2>\n' +
        '    <input size="20">\n' +
        '\t<input type="button" value="Login" onclick="login()">\n' +
        '  </div>';
}

function currentDate() {
    let d = new Date();
    let dateOptions = { hour: 'numeric', minute: 'numeric' };
    return d.toLocaleDateString('ru-RU', dateOptions);
}

function initNew() {
    document.querySelector('#content').innerHTML = '<div id="formedit">\n' +
        '          <h1>Add/Edit photopost</h1>  \n' +
        '          <span>' + user + '</span>\n' +
        '          <span id="date">' + currentDate() +
        '          </span>\n' +
        '          <h3></h3>\n' +
        '          <div id = "editblock">\n' +
        '            <h2>Photo*</h2>\n' +
        '            <input size="30" placeholder="URL:">\n' +
        '            <h2>Hashtags</h2>\n' +
        '            <input size="30" placeholder="#put #hashtags #here">\n' +
        '            <h2>Description*</h2>\n' +
        '            <textarea cols="50" rows="5" type="text" placeholder="#what\'s that post about?"></textarea>\n' +
        '          </div>\n' +
        '        <input type="button" id="buttonedit" value="Apply" onclick="checkPost()">\n' +
        '          </div>';

}

function initEdit(post) {
    document.querySelector('#content').innerHTML = '<div id="formedit">\n' +
        '          <h1>Add/Edit photopost</h1>  \n' +
        '          <span>' + user + '</span>\n' +
        '          <span id="date">' + currentDate() +
        '          </span>\n' +
        '          <h3></h3>\n' +
        '          <div id = "editblock">\n' +
        '          <h2>Photo*</h2>\n' +
        '          <input size="20" placeholder="URL:" value="' + post.photoLink + '">\n' +
        '          <h2>Hashtags</h2>\n' +
        '          <input size="20" placeholder="#put #hashtags #here" value="' + post.hashtags.toString() + '">\n' +
        '          <h2>Description*</h2>\n' +
        '          <textarea cols="50" rows="5" type="text" placeholder="#what\'s that post about?">' + post.description + '</textarea>\n' +
        '          </div>\n' +
        '        <input type="button" id="buttonedit" value="Apply" onclick="checkPost(' + post.id + ')">\n' +
        '          </div>';

}

function checkPost(id) {
    let newPhotolink = document.querySelectorAll('input')[0].value;
    let newHashtags = document.querySelectorAll('input')[1].value.split(' ');
    let newDescription = document.querySelector('textarea').value;
    let newId = 1;
    while(photoPosts.some(post => { return post.id == newId;})) {
        newId++;
    }
    newId += '';
    if(id) {
        let newlikes = module.getPhotoPost(id).likes;
        newId = id + '';
        let newPost = {id: newId, description: newDescription,
        createdAt: new Date(), author: user,
        photoLink: newPhotolink, likes: newlikes, hashtags: newHashtags};
        initMain();
        editPost(id, newPost);
    }
    else {
        let newPost = {id: newId, description: newDescription,
            createdAt: new Date(), author: user,
            photoLink: newPhotolink, likes: [], hashtags: newHashtags};
        if(module.validatePhotoPost(newPost)) {
            initMain();
            addPost(newPost);
        }
    }
}

function login(){
    let username = document.querySelector('input').value;
    let password = document.querySelectorAll('input')[1].value;
    let valid;
    for(let i = 0; i < users.length; i++) {
        if(username == users[i] && password == passwords[i]) {
            user = users[i];
            initMain();
            return true;
        }
    }
    document.querySelector('h3').innerText = 'Invalid Login/Password!';
    return false;
}

function reset() {
    setUser();
    initMain();
}
function initMain() {
    if(user) {
        document.querySelector('#name').innerHTML = user;
        document.querySelector('#logout').innerHTML = '<a href="#" onclick="reset()"> ' +
            '<img src="img/logout.png" width="13%" height="13%"/> ' +
            '<span>Log out</span> </a>';
    }
    else {
        document.querySelector('#name').innerHTML = '';
        document.querySelector('#logout').innerHTML = '<a href="#" onclick="initLogin()"> ' +
            '<img src="img/signin.png" width="13%" height="13%"/> ' +
            '<span>Sign in</span> ' +
            '</a>';
    }
    document.querySelector('#content').innerHTML = '<main>\n' +
        '    <div id="filter">\n' +
        '      <span>Authors name:</span>\n' +
        '<input placeholder="Author" size="20">' +
        '<p><select onchange="setAuthorOption(this)">Hashs</select></p>' +
        '      <br><br>\n' +
        '      <p>\n' +
        '        <span>Date:</span>\n' +
        '      </p>\n' +
        '      <input placeholder="27/02/2018" size="20">\n' +
        '      <br><br>\n' +
        '      <p>\n' +
        '        <span>Hashtags:</span>\n' +
        '      </p>\n' +
        '      <input value="" size="20">\n' +
        '      <p><select onchange="addHashtagOption(this)">Hashs</select></p>\n' +
        '      <input type="button" value="Apply" id="apply" onclick="filtrate()">\n' +
        '    </div>\n' +
        '  </main>\n' +
        '  <aside></aside>';
        showPosts();
}

/*
debugger;

showPosts(4, 15, {});

debugger;

showPosts(0, 20, { author: 'Валай Александр' });

debugger;

//setUser('alexandr');

debugger;

addPost({
    id: '26',
    description: 'Демо-пост добавлен',
    createdAt: new Date('2018-03-29T14:00:00'),
    author: 'alexandr',
    photoLink: 'https://blogs.colum.edu/demomagazine/files/2014/09/demo.png',
    likes: ['userinknown', 'someone', 'valexx', 'eddie', 'lookview', 'daem'],
    hashtags: ['#demopost', '#new', '#fresh']
});

debugger;

addLike('26');

debugger;

addLike('26');

debugger;

setUser();

debugger;

editPost('26', {
    description: 'Демо-пост добавлен да еще и изменен',
    likes: ['valexx', 'eddie', 'lookview', 'daem'],
    hashtags: ['#demopost', '#new', '#fresh', '#changed', '#different']
});

debugger;

removePost('26');

//setUser('Валай Александр');

debugger;
*/
showPosts();