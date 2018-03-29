'use strict';
let user = null;
let postsVisible = 10;
let dom = (function() {
    function setUserName(username = null) {
        postsVisible = 10;
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
            document.getElementById('name').innerHTML ='';
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
            
            signIn.onclick = function() { 
                setUser('Валай Александр') 
            };
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

    function showPhotoPosts(skip = 0, top = 0, filterConfig = {}) {
        document.body.querySelector('aside').innerHTML='';
        if (user !== null) {
            let addButton = document.createElement('div');
            addButton.id = 'create';
            addButton.innerHTML = '<span>What\'s new? Create a post to share</span><a href=""><img src="img/add.png"></a>';
            document.querySelector('aside').insertBefore(addButton, document.querySelector('aside').firstChild);
        }
        let currentphotoPosts = module.getPhotoPosts(skip, postsVisible + top, filterConfig);
        currentphotoPosts.forEach((post, index) => {
            dom.showPhotoPost(post, index);
        });
        postsVisible = currentphotoPosts.length;
        if(photoPosts.length > currentphotoPosts.length) {
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
        showPhotoPosts(0, startNum + 10);
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
        setUserName,
        addLike,
        selectAuthors,
        showPhotoPosts,
        addPost,
        removePost,
        editPost
    }

}());

function setUser(user) {
    dom.setUserName(user);
    showPosts();
}

function addLike(id) {
    dom.addLike(id);
    showPosts();
}

function showPosts() {
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

dom.selectAuthors();