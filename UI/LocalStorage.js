let storageModule = function () {

    function saveArray() {
        localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
    }

    function backupArray() {
        let serializedArray = JSON.stringify(photoPostsBackUp);
        localStorage.setItem('photoPosts', serializedArray);
    }

    function loadArray() {
        photoPosts = JSON.parse(localStorage.getItem('photoPosts'));
        for (let i = 0; i < photoPosts.length; i++)
            photoPosts[i].createdAt = new Date(photoPosts[i].createdAt);
    }

    return {
        saveArray,
        loadArray,
        backupArray
    }
}();

let photoPostsBackUp = [
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
        photoLink: 'http://files.all-free-download.com//downloadfiles/wallpapers/1600_1200/germany_forest_road_wallpaper_landscape_nature_1228.jpg',
        likes: ['okman', 'userunknown'],
        hashtags: ['#onebyone', '#again']
    }, {
        id: '20',
        description: 'Пока последний',
        createdAt: new Date('2018-03-05T19:20:00'),
        author: 'Валай Александр',
        photoLink: 'https://www.powerfmbegabay.com.au/assets/images/dawn-service.jpg',
        likes: ['view_official', 'userunknown'],
        hashtags: ['#thelasttime', '#wesaygoodbye']
    }];

//Инициализация Local Storage для первого раза
//storageModule.backupArray();