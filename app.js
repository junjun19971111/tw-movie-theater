var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('/home/wgl/文档/tw-movie-theater-master/database/movieonline.db',function() {
            db.all("select * from Movies",function(err,res){
                if(!err)
                    console.log(res);
                else
                    console.log(err);
            });
            db.all("select * from MovieComment WHERE MovieId='AQ000001'",function(err,res){
                if(!err)
                    console.log(res);
                else
                    console.log(err);
            });
            db.all("select * from MovieDetails WHERE MovieId='AQ000001'",function(err,res){
                if(!err)
                    console.log(res);
                else
                    console.log(err);
            });
        });