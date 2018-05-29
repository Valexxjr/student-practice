(function(exp) {
    let photoPosts;

    exp.initPosts = function initPosts(postArray) {
        photoPosts = postArray;
    }

    exp.getPhotoPosts = function getPhotoPosts(skip = 0, top = 10, filterConfig = {}) {
        let temp = photoPosts.filter(post => {
            if (filterConfig.author !== undefined && filterConfig.author.length > 0) {
                if (post.author != filterConfig.author)
                    return false;
            }
            if (filterConfig.createdAt !== undefined) {
                if (post.createdAt < filterConfig.createdAt)
                    return false;
            }
            let validHashtags = Array.isArray(filterConfig.hashtags) && 
                filterConfig.hashtags.every(hashtag => { return hashtag[0] == '#';}); 
            if (validHashtags) {
                return filterConfig.hashtags.every(hashtag => {
                    return post.hashtags.some(postHashtag => {
                        return postHashtag == hashtag;
                    })
                })
            }
            return true;
        });
        temp.sort((photopost1, photopost2) => {
            return photopost2.createdAt - photopost1.createdAt;
        });
        if(top == -1) {
            return temp;
        }
        return temp.slice(skip, skip + top);
    }

    exp.getPhotoPost = function getPhotoPost(id) {
        return photoPosts.filter(post => { if (post.id == id) return true; })[0];
    }

    function validatePhotoPost(photopost) {
        if (photopost.id === undefined || photopost.description === undefined || photopost.createdAt === undefined
            || photopost.author === undefined || photopost.photoLink === undefined)
            return false;
        if (photopost.description.length >= 200)
            return false;
        if (photopost.author.length == 0)
            return false;
        if (photopost.photoLink.length == 0)
            return false;
        if (!Array.isArray(photopost.hashtags) || !Array.isArray(photopost.likes))
            return false;
        let wrongIds = photoPosts.some(post => { 
            return post.id == photopost.id; 
        }); 
        if (wrongIds)
            return false;
        let wrongHashtags = !photopost.hashtags.every(hashtag => {
            return (typeof (hashtag) == 'string' && hashtag[0] == '#');
        }); 
        if (wrongHashtags)
            return false;
        let wrongLikes = !photopost.likes.every(like => { 
            return (typeof (like) == 'string'); 
        });
        if (wrongLikes)
            return false;
        return true;
    }

    exp.addPhotoPost = function addPhotoPost(photopost) {
        if (validatePhotoPost(photopost)) {
            photoPosts.push(photopost);
            return true;
        }
        return false;
    }

    exp.removePhotoPost = function removePhotoPost(id) {
        if (id === null || id === undefined)
            return false;
        return photoPosts.some((post, i) => {
            if (post.id == id) {
                photoPosts.splice(i, 1);
                return true;
            }
            return false;
        });
    }

    exp.editPhotoPost = function editPhotoPost(id, photopost = {}) {
        return photoPosts.some(post => {
            if (post.id != id)
                return false;
            if (typeof (photopost.photoLink) == 'string' && photopost.photoLink.length > 0)
                post.photoLink = photopost.photoLink;
            if (typeof (photopost.description) == 'string' && photopost.description.length < 200)
                post.description = photopost.description;
            if (Array.isArray(photopost.hashtags) && photopost.hashtags.every(hashtag => {
                return typeof (hashtag) == 'string' && hashtag[0] == '#';
            }))
                post.hashtags = photopost.hashtags;
            if (Array.isArray(photopost.likes) && photopost.likes.every(like => {
                return typeof (like) == 'string';
            }))
                post.likes = photopost.likes;
            return true;
        });
    }
})(this.photoPosts = {});
//storageModule.loadArray();
/*
console.log('Getting posts:');
console.log('\nDefault:');
console.log(postsModule.getPhotoPosts());

console.log('\n20 posts with author and hashtags:');
console.log(postsModule.getPhotoPosts(0, 20, { author: 'Валай Александр', hashtags: ['#belarus', '#2018', '#olimp'] }))

console.log('\nSame hashtags without author:');
console.log(postsModule.getPhotoPosts(0, 20, { hashtags: ['#belarus', '#2018', '#olimp'] }))

console.log('\n55 posts with date and hashtags:');
console.log(postsModule.getPhotoPosts(0, 55, { createdAt: new Date('2018-02-26T23:00:00'), hashtags: ['#again'] }));

console.log('\n3 posts starting from 12 with default filter:');
console.log(postsModule.getPhotoPosts(12, 3));

console.log('\n20 posts with author Валай Александр');
console.log(postsModule.getPhotoPosts(0, 20, { author: 'Валай Александр' }));

console.log('\n20 posts with wrong author');
console.log(postsModule.getPhotoPosts(0, 20, { author: 'noname' }));

console.log('\nWrong parameter 1');
console.log(postsModule.getPhotoPosts({ lalala: '11' }));

console.log('\nWrong parameter 2');
console.log(postsModule.getPhotoPosts({ hashtags: '11' }));


console.log('\nWrong parameter 3');
console.log(postsModule.getPhotoPosts([2, 4], [11, -4], { hashtags: '11' }));

console.log('\nWrong parameter 4');
console.log(postsModule.getPhotoPosts('array', { hashtags: '11' }));

console.log('\nGetting post by id 3:');
console.log(postsModule.getPhotoPost('3'));
console.log('\nGetting post by wrong id:');
console.log(postsModule.getPhotoPost('43'));

console.log('Removing post by id 10:');
console.log('Size of array = ' + photoPosts.length);
console.log(postsModule.removePhotoPost('10'));
console.log('Size of array now = ' + photoPosts.length);
console.log('Removing post by wrong id:');
console.log(postsModule.removePhotoPost('201'))
console.log('Size of array now = ' + photoPosts.length)

console.log('Adding post by id 22:');
console.log('Size of array = ' + photoPosts.length)
console.log(postsModule.addPhotoPost({
    id: '22',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Sanya',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
    likes: [],
    hashtags: []
}));
console.log('Size of array now = ' + photoPosts.length)
console.log('\nAdding post with wrong parameters:');
console.log(postsModule.addPhotoPost({
    id: '22',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Sanya',
    photoLink: ''
}));
console.log(postsModule.addPhotoPost({
    id: '22',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: [4, 12],
    photoLink: 'sd'
}));

console.log('\nEditing of first post:');
console.log(postsModule.editPhotoPost(1, { photoLink: 'https://s3-eu-west-1.amazonaws.com/jobbio-production/topic/edited-2202696999-logo.jpg', hashtags: ['#changed', '#all'], likes: ['also', 'changed'] }));
console.log(photoPosts[0]);
console.log('\nEditing with wrong id:');
console.log(postsModule.editPhotoPost(123, { photoLink: 'Changed', hashtags: '#changed', likes: ['also', 'changed'] }));
console.log('\nEditing with empty parameters:');
console.log(postsModule.editPhotoPost(1));
console.log(photoPosts[0]);*/