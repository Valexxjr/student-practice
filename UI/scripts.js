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
        photoLink: 'http://www.spletnik.ru/img/2018/01/liza/20180123-oscars-post.jpg',
        likes: ['oscars_official', 'lalaman', 'kinofan', 'oscars2018'],
        hashtags: ['#oscars', '#belarus', '#2018', '#oscars2018']
    }, {
        id: '3',
        description: 'Родные места',
        createdAt: new Date('2018-03-15T10:00:00'),
        author: 'valexx',
        photoLink: 'http://1.bp.blogspot.com/-wFbpZC3YXwQ/U2AkHNxiNUI/AAAAAAAAKtM/1o4Rn6zB9V0/s1600/357443-svetik.jpg',
        likes: ['ont_official', 'jas', 'vyartsinsky'],
        hashtags: ['#beauty', '#belarus', '#2018', '#nature']
    }, {
        id: '4',
        description: 'Красивое место',
        createdAt: new Date('2018-02-10T21:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRvQr4Q4f6Xq8BHoq91JOjosn_ueW1AURuMeTT6CBXTPIZiBmCA',
        likes: ['ont_official', 'jas'],
        hashtags: ['#beauty', '#belarus', '#2018', '#nature', '#river']
    }, {
        id: '5',
        description: 'Это праздник какой-то',
        createdAt: new Date('2018-01-10T15:00:00'),
        author: 'Алексей',
        photoLink: 'https://i.ytimg.com/vi/mXFeA64Zv-8/maxresdefault.jpg',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '6',
        description: 'Новый пост',
        createdAt: new Date('2018-03-05T19:00:00'),
        author: 'Александров Александр',
        photoLink: 'http://www.imanistudio.com/media/catalog/category/New.jpg',
        likes: ['ont_official'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '7',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T22:00:00'),
        author: 'Валай Александр',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '8',
        description: 'Еще пост',
        createdAt: new Date('2018-02-23T05:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://i.ytimg.com/vi/5784a6wKLUo/maxresdefault.jpg',
        likes: [],
        hashtags: ['#more', '#add']
    }, {
        id: '9',
        description: 'Пост 3',
        createdAt: new Date('2018-02-28T23:00:00'),
        author: 'Валай Александр',
        photoLink: 'http://www.prestig.ru/images/cache/products-53815-520x520.jpg',
        likes: ['ont_official'],
        hashtags: ['#3rd', '#belarus', '#2018', '#view']
    }, {
        id: '10',
        description: 'Пост н',
        createdAt: new Date('2018-03-01T10:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLQvDMDPblSG0cQ5fTmfCL-4dSyzdvaVs5i0VHLRYAevb5_sO',
        likes: ['ont_official', 'userunknown'],
        hashtags: ['#view']
    }, {
        id: '11',
        description: 'Пост!!!',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLQvDMDPblSG0cQ5fTmfCL-4dSyzdvaVs5i0VHLRYAevb5_sO',
        likes: [],
        hashtags: []
    }, {
        id: '12',
        description: 'Женская сборная!!!',
        createdAt: new Date('2018-02-24T23:00:00'),
        author: 'Александров Александр',
        photoLink: 'http://www.belta.by/images/storage/news/000028_371931_big.jpg',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '13',
        description: 'Пост о Беларуси!!!',
        createdAt: new Date('2018-03-03T19:00:00'),
        author: 'Сидоров Петр',
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iZlLP3BSnuTGGBQqlGXZKXkf8GCu3SN-oCx17R9A__YE2b3NkQ',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '14',
        description: 'Я на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-19T20:00:00'),
        author: 'Валай Александр',
        photoLink: 'http://images.filebase.ws/screenshots/344426071422463229-u.jpg',
        likes: ['ont_official', 'belarusian_biathlon', 'biathlon_fan', 'olimp2018'],
        hashtags: ['#victory', '#belarus', '#2018', '#olimp']
    }, {
        id: '15',
        description: 'Пост 5!!!',
        createdAt: new Date('2018-03-03T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://om-okt.ru/wp-content/uploads/2017/04/IMG_1228.jpg',
        likes: ['view_official'],
        hashtags: ['#5yi', '#belarus', '#2018']
    }, {
        id: '16',
        description: 'Привет!!!',
        createdAt: new Date('2018-02-22T23:00:00'),
        author: 'Александров Александр',
        photoLink: 'https://www.fenixsite.com/_bl/4/26745054.jpg',
        likes: [],
        hashtags: ['#hi', '#hello', '#nicetosee']
    }, {
        id: '17',
        description: 'Еще мой пост',
        createdAt: new Date('2018-03-01T15:00:00'),
        author: 'Сидоров Петр',
        photoLink: 'http://cdn.lenta.ru/images/0000/0298/000002986571/pic_1363102143.jpg',
        likes: ['petry'],
        hashtags: []
    }, {
        id: '18',
        description: 'Пост за постом',
        createdAt: new Date('2018-02-27T06:00:00'),
        author: 'Валай Александр',
        photoLink: 'https://cs5.pikabu.ru/images/big_size_comm/2014-09_4/14112376675128.jpg',
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
        photoLink: 'data:image/jpeg;base64,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',
        likes: ['view_official', 'userunknown'],
        hashtags: ['#thelasttime', '#wesaygoodbye']
    }];

let module = (function () {

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
            return photopost2.createdAt - photopost1.createdAt;
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
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
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
console.log(module.editPhotoPost(1, { photoLink: 'https://s3-eu-west-1.amazonaws.com/jobbio-production/topic/edited-2202696999-logo.jpg', hashtags: ['#changed', '#all'], likes: ['also', 'changed'] }));
console.log(photoPosts[0]);
console.log('\nEditing with wrong id:');
console.log(module.editPhotoPost(123, { photoLink: 'Changed', hashtags: '#changed', likes: ['also', 'changed'] }));
console.log('\nEditing with empty parameters:');
console.log(module.editPhotoPost(1));
console.log(photoPosts[0]);