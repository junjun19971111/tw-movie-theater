document.getElementById("search_btn").addEventListener('click', printSearchResult);

function printSearchResult(){
    let keywords=document.getElementById("search").search_keywords;
    $.get(`/search_movie?search_keywords=${keywords}`, function (movieInfo, status) {
        let movie_name=document.getElementsByClassName("movie_name");
        for(let i=0;i<movie_name.length;i++){
            movie_name.innerHTML=movieInfo[0].MovieName;
        }
        let movie_img=document.getElementById("movie_img").setAttribute("src", movieInfo.ImgUrl);
        let director=document.getElementById("director");
        director.innerHTML=movieInfo[0].Direcrtor;
    });
}
