'use strict';
let user = null;
let dom = (function() {
    function setUser(username = null) {
        let isUser = (username !== null);
        user = username;
        if (isUser) {
            document.getElementById('name').innerHTML = '<img src="img/avatar.png" width="12%" height="12%"/><span>' + username + '</span>';
            document.querySelector('#logout').innerHTML = '<img src="img/logout.png" width="13%" height="13%"/><span>Log out</span>';
        }
        else {
            document.getElementById('name').innerHTML ='';
            document.querySelector('#logout').innerHTML = '<img src="img/signin.png" width="13%" height="13%"/><span>Sign in</span>';
        }
    }

    let photoContainer = document.querySelector('aside');

    function showPhotoPost(post, pos) {
        let isUser = (user === post.author);
        let postDiv = document.createElement('div');
        postDiv.className = 'post';

        let userPhoto = document.createElement('div');
        userPhoto.className = 'userphoto';
        userPhoto.innerHTML = '<img src="img/avatar.png" width="12%" height="12%"/><span>\ ' + post.author + '</span>';
        
        let dateItem = document.createElement('span');
        dateItem.id = 'date';
        let dateOptions = { hour: 'numeric', minute: 'numeric' };
        dateItem.innerHTML = post.createdAt.toLocaleDateString('ru-RU', dateOptions);

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
        likeText.innerText =  ((post.likes.length > 0) ? (post.likes.length) : (''));
        postButtons.appendChild(postLike);
        postButtons.appendChild(likeText);
        postButtons.innerHTML += '<span>Like</span>';
        if(user == post.author) {
            postButtons.innerHTML += '<img src="img/edit.png" class="like"> Edit post<img src="img/delete.png" class="like"> Delete post';
        }
        postDiv.appendChild(userPhoto);
        postDiv.appendChild(dateItem);
        postDiv.appendChild(mainImg);
        postDiv.appendChild(postDescription);
        postDiv.appendChild(postButtons);
        photoContainer.appendChild(postDiv);
    }

    function addLike(id){
        if(user === null) {
            return;
        }
        let photoPost = module.getPhotoPost(id);
        if(photoPost) {
            let postLikes = photoPost.likes;
            let changed = false;
            for (let i = 0; i < postLikes.length; i++){
                if(postLikes[i] == user) {
                    postLikes.splice(i, 1);
                    changed = true;
                }
            }
            if(!changed) {
                postLikes.push(user);
            }
        }
    }

    function selectAuthors() {
        let setAuthors = new Set();
        for (let i = 0; i < photoPosts.length; i++) {
            setAuthors.add(photoPosts[i].author);
        }
        let select = document.querySelector('select');
        for (let author of setAuthors) { 
            let option = document.createElement('option');
            option.innerHTML = author;
            select.appendChild(option);
        }
    }

    function showPhotoPosts(skip = 0, top = 10, filterConfig = {}) {
        document.body.querySelector('aside').innerHTML="";
        if (user !== null) {
            let addButton = document.createElement('div');
            addButton.id = 'create';
            addButton.innerHTML = '<span>What\'s new? Create a post to share</span><a href=""><img src="img/add.png"></a>';
            document.querySelector('aside').insertBefore(addButton, document.querySelector('aside').firstChild);
        }
        let currentphotoPosts = module.getPhotoPosts(skip, top, filterConfig);
        currentphotoPosts.forEach((post, index) => {
            dom.showPhotoPost(post, index);
        });
        if(photoPosts.length > currentphotoPosts.length) {
            document.querySelector('aside').innerHTML += 
            '<button type="button" id="more"><img src="img/more.png" width="10%" height="10%"></button>';
        }
    }
    
    function addPost(post) {
        module.addPhotoPost(post);
        showPhotoPosts();
    }
    
    function removePost(id) {
        module.removePhotoPost(id);
        showPhotoPosts();
    }
    
    function editPost(id, post) {
        module.editPhotoPost(id, post);
        showPhotoPosts();
    }

    return {
        showPhotoPost,
        setUser,
        addLike,
        selectAuthors,
        showPhotoPosts,
        addPost,
        removePost,
        editPost
    }

}());

function setUser(user) {
    dom.setUser(user);
    showPosts();
}

function addLike(id) {
    dom.addLike(id);
    showPosts();
}

function showPosts(id) {
    dom.showPhotoPosts();
}

function addPost(id) {
    dom.addPost(id);
}

function removePost(id) {
    dom.removePost(id);
}

function editPost(id, post) {
    dom.editPost(id, post);
}

debugger;

showPosts(4, 15, {});

debugger;

showPosts(0, 20, {author: 'Валай Александр'});

debugger;

setUser('alexandr');

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

setUser('Валай Александр');

debugger;

dom.selectAuthors();