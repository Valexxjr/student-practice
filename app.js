const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const bodyParser = require('body-parser');
const scripts = require("./public/scripts.js");
const jsonFile = "posts.json";

app.use(express.static('./public'));

app.get('/getPost/:id', (req, res) => {

    let allPosts = JSON.parse(fs.readFileSync(jsonFile));
    scripts.photoPosts.initPosts(allPosts);
    let post = scripts.photoPosts.getPhotoPost(req.params.id);
    if(post) {
        fs.writeFile(jsonFile, JSON.stringify(allPosts), function (error) {
            if (error) {
                throw error;
            }
        });
        console.log(post);
        res.send(post);
    }
    else {
        console.log(post);
        res.status(404).end();
    }
});

app.post('/add', (req, res) => {
    let post = req.body;
    post.createdAt = new Date();
    let allPosts = JSON.parse(fs.readFileSync(jsonFile));
    scripts.photoPosts.initPosts(allPosts);
    if (scripts.photoPosts.addPhotoPost(post)) {
        fs.writeFile(jsonFile, JSON.stringify(allPosts), function (error) {
            if (error) {
                throw error;
            }
        });
        res.send(post);
    }
    else {
        console.log(post);
        res.status(404).end();
    }
});

app.delete('/delPost/:id', (req, res) => {
    let allPosts = JSON.parse(fs.readFileSync(jsonFile));
    scripts.photoPosts.initPosts(allPosts);
    if (scripts.photoPosts.removePhotoPost(req.params.id)) {
        fs.writeFile(jsonFile, JSON.stringify(allPosts), function (error) {
            if (error) {
                throw error;
            }
        });
        res.send(allPosts[req.params.id]);
    } else {
        res.status(404).end();
    }
});

app.put('/editPost/:id', (req, res) => {
    let allPosts = JSON.parse(fs.readFileSync(jsonFile));
    if ( posts.photoPosts.editPhotoPost(allPosts, req.params.id, req.body)) {
        fs.writeFile(jsonFile, JSON.stringify(allPosts), function (error) {
            if (error) {
                throw error;
            }
        });
        res.status(200).end();
    } else {
        res.status(404).end();
    }

});

app.listen(port, () => {
    console.log('Server is listening at ' + port);
});