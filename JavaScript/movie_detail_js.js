document.getElementById("search_btn").addEventListener('click', printSearchResult);

function printSearchResult(){
    let keywords=document.getElementById("search").search_keywords;
    $.get(`/search_movie?search_keywords=${keywords}`, function (movieInfo, status) {
        let movie_name=document.getElementsByClassName("movie_name");
        for(let i=0;i<movie_name.length;i++){
            movie_name[i].innerHTML=movieInfo[0].MovieName;
        }

        let movie_img=document.getElementById("movie_img").setAttribute("src", movieInfo[0].ImgUrl);

        let director=document.getElementById("director");
        director.innerHTML=movieInfo[0].Direcrtor;
        let writers=document.getElementById("writers");
        writers.innerHTML=movieInfo[0].Writers;
        let stars=document.getElementById("stars");
        stars.innerHTML=movieInfo[0].Starring;
        let type=document.getElementById("type");
        type.innerHTML=movieInfo[0].Type;
        let areas=document.getElementById("areas");
        areas.innerHTML=movieInfo[0].Area;
    });
}
