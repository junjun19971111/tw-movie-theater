const sqlite3 = require('sqlite3');
const express = require('express');
const bodyparser = require('body-parser');
const app=express();
const db = new sqlite3.Database('../database/movieonline.db');


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/movie_detail.html',function (req ,res ) {
    res.sendFile(__dirname + '/HTML/'+'movie_detail.html');
});

app.get ('/search',function (req,res) {
    let movie_name =  req.body.search_keywords;
    db.all("select * from Movies WHERE MovieName='"+movie_name+"'", function (err, result) {
        if (!err) {
            console.log(result);
            res.send(result);
        }
        else
            console.log(err);
    });
});

db.all("select * from MovieComment", function (err, result) {
    if (!err) {
        console.log(result);
    }
    else
        console.log(err);
});

db.all("select * from MovieDetails", function (err, result) {
    if (!err) {
        console.log(result);
    }
    else
        console.log(err);
});

let server=app.listen(8080,function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("监听:%s%s",host,port);
})