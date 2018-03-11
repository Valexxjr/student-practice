'use strict';
let photoPosts = [
    {
        id: '1',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-22T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '2',
        description: 'Оскар-2018',
        createdAt: new Date('2018-03-04T11:00:00'),
        author: 'Александров Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['oscars_official', 'lalaman', 'kinofan', 'oscars2018'],
        hashtags: ['#oscars', '#belarus', '#2018', '#oscars2018']
    }, {
        id: '3',
        description: 'Родные места',
        createdAt: new Date('2018-03-15T10:00:00'),
        author: 'valexx',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'jas', 'vyartsinsky'],
        hashtags: ['#beauty', '#belarus', '#2018', '#nature']
    }, {
        id: '4',
        description: 'Красивое место',
        createdAt: new Date('2018-02-10T21:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'jas'],
        hashtags: ['#beauty', '#belarus', '#2018', '#nature', '#river']
    }, {
        id: '5',
        description: 'Это праздник какой-то',
        createdAt: new Date('2018-01-10T15:00:00'),
        author: 'Алексей',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '6',
        description: 'Новый пост',
        createdAt: new Date('2018-03-05T19:00:00'),
        author: 'Александров Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '7',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T22:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '8',
        description: 'Еще пост',
        createdAt: new Date('2018-02-23T05:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: [],
        hashtags: ['#more', 'add']
    }, {
        id: '9',
        description: 'Пост 3',
        createdAt: new Date('2018-02-28T23:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official'],
        hashtags: ['#3rd', '#belarus', '#2018', '#view']
    }, {
        id: '10',
        description: 'Пост н',
        createdAt: new Date('2018-03-01T10:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'userunknown'],
        hashtags: ['#view']
    }, {
        id: '11',
        description: 'Пост!!!',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: [],
        hashtags: []
    }, {
        id: '12',
        description: 'Женская сборная!!!',
        createdAt: new Date('2018-02-24T23:00:00'),
        author: 'Александров Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '13',
        description: 'Пост о Беларуси!!!',
        createdAt: new Date('2018-03-03T19:00:00'),
        author: 'Сидоров Петр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '14',
        description: 'Я на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-19T20:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '15',
        description: 'Пост 5!!!',
        createdAt: new Date('2018-03-03T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['view_official'],
        hashtags: ['#5yi', '#belarus', '#2018']
    }, {
        id: '16',
        description: 'Привет!!!',
        createdAt: new Date('2018-02-22T23:00:00'),
        author: 'Александров Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: [],
        hashtags: ['#hi', '#hello', 'nicetosee']
    }, {
        id: '17',
        description: 'Еще мой пост',
        createdAt: new Date('2018-03-01T15:00:00'),
        author: 'Сидоров Петр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['petry'],
        hashtags: []
    }, {
        id: '18',
        description: 'Пост за постом',
        createdAt: new Date('2018-02-27T06:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['ont_official', 'okman', 'userunknown'],
        hashtags: ['#onebyone', '#again']
    }, {
        id: '19',
        description: 'Посты!!!',
        createdAt: new Date('2018-03-05T19:15:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['okman', 'userunknown'],
        hashtags: ['#onebyone', '#again']
    }, {
        id: '20',
        description: 'Пока последний',
        createdAt: new Date('2018-03-05T19:20:00'),
        author: 'Валай Александр',
        photoLink: 'https://github.com/Valexxjr/student-practice/blob/master/UI/img/road.jpg?raw=true',
        likes: ['view_official', 'userunknown'],
        hashtags: ['#thelasttime', '#wesaygoodbye']
    }];

var module = (function () {

    function getPhotoPosts(skip = 0, top = 10, filterConfig = {}) {
        let temp = photoPosts.filter(post => {
            if (filterConfig.author !== undefined && filterConfig.author.length > 0) {
                if (post.author != filterConfig.author)
                    return false;
            }
            if (filterConfig.createdAt !== undefined) {
                if (post.createdAt < filterConfig.createdAt)
                    return false;
            }
            if (Array.isArray(filterConfig.hashtags) && filterConfig.hashtags.every(hashtag => {
                return hashtag[0] == '#';
            })) {
                return filterConfig.hashtags.every(hashtag => {
                    return post.hashtags.some(post_hashtag => {
                        return post_hashtag == hashtag;
                    })
                })
            }
            return true;
        });
        temp.sort((photopost1, photopost2) => {
            return photopost1.createdAt - photopost2.createdAt;
        });
        return temp.slice(skip, skip + top);
    }

    function getPhotoPost(id) {
        let returnpost = null;
        photoPosts.forEach(post => { if (post.id == id) returnpost = post; });
        return returnpost;
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
        if (photoPosts.some(post => { return post.id == photopost.id; }))
            return false;
        if (!photopost.hashtags.every(hashtag => {
            return (typeof (hashtag) == 'string' && hashtag[0] == '#');
        }))
            return false;
        if (!photopost.likes.every(like => { return (typeof (like) == 'string'); }))
            return false;
        return true;
    }

    function addPhotoPost(photopost) {
        if (validatePhotoPost(photopost)) {
            photoPosts.push(photopost);
            return true;
        }
        return false;
    }

    function removePhotoPost(id) {
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

    function editPhotoPost(id, photopost = {}) {
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
    return {
        getPhotoPost,
        getPhotoPosts,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }
}());

console.log('Getting posts:');
console.log('\nDefault:');
console.log(module.getPhotoPosts());

console.log('\n20 posts with author and hashtags:');
console.log(module.getPhotoPosts(0, 20, { author: 'Валай Александр', hashtags: ['#belarus', '#2018', '#olimp'] }))

console.log('\nSame hashtags without author:');
console.log(module.getPhotoPosts(0, 20, { hashtags: ['#belarus', '#2018', '#olimp'] }))

console.log('\n55 posts with date and hashtags:');
console.log(module.getPhotoPosts(0, 55, { createdAt: new Date('2018-02-26T23:00:00'), hashtags: ['#again'] }));

console.log('\n3 posts starting from 12 with default filter:');
console.log(module.getPhotoPosts(12, 3));

console.log('\n20 posts with author Валай Александр');
console.log(module.getPhotoPosts(0, 20, { author: 'Валай Александр' }));

console.log('\n20 posts with wrong author');
console.log(module.getPhotoPosts(0, 20, { author: 'noname' }));

console.log('\nWrong parameter 1');
console.log(module.getPhotoPosts({ lalala: '11' }));

console.log('\nWrong parameter 2');
console.log(module.getPhotoPosts({ hashtags: '11' }));


console.log('\nWrong parameter 3');
console.log(module.getPhotoPosts([2, 4], [11, -4], { hashtags: '11' }));

console.log('\nWrong parameter 4');
console.log(module.getPhotoPosts('array', { hashtags: '11' }));

console.log('\nGetting post by id 3:');
console.log(module.getPhotoPost('3'));
console.log('\nGetting post by wrong id:');
console.log(module.getPhotoPost('43'));

console.log('Removing post by id 10:');
console.log('Size of array = ' + photoPosts.length);
console.log(module.removePhotoPost('10'));
console.log('Size of array now = ' + photoPosts.length);
console.log('Removing post by wrong id:');
console.log(module.removePhotoPost('201'))
console.log('Size of array now = ' + photoPosts.length)

console.log('Adding post by id 22:');
console.log('Size of array = ' + photoPosts.length)
console.log(module.addPhotoPost({
    id: '22',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Sanya',
    photoLink: 'a',
    likes: [],
    hashtags: []
}));
console.log('Size of array now = ' + photoPosts.length)
console.log('\nAdding post with wrong parameters:');
console.log(module.addPhotoPost({
    id: '22',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Sanya',
    photoLink: ''
}));
console.log(module.addPhotoPost({
    id: '22',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: [4, 12],
    photoLink: 'sd'
}));

console.log('\nEditing of first post:');
console.log(module.editPhotoPost(1, { photoLink: 'Changed', hashtags: ['#changed', '#all'], likes: ['also', 'changed'] }));
console.log(photoPosts[0]);
console.log('\nEditing with wrong id:');
console.log(module.editPhotoPost(123, { photoLink: 'Changed', hashtags: '#changed', likes: ['also', 'changed'] }));
console.log('\nEditing with empty parameters:');
console.log(module.editPhotoPost(1));
console.log(photoPosts[0]);