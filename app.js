const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const bodyParser = require('body-parser');
const scripts = require("./public/scripts.js");
const jsonFile = "posts.json";

app.use(express.static('./public'));

app.get('/getPost/:id', (req, res) => {

    let array = JSON.parse(fs.readFileSync(jsonFile));
    scripts.module.initPosts(array);
    let post = scripts.module.getPhotoPost(array, req.params.id);
    if(post) {
        fs.writeFile(jsonFile, JSON.stringify(array), function (error) {
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

app.listen(port, () => {
    console.log('Server is listening at ' + port);
});