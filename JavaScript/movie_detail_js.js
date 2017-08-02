document.getElementById("search_btn").addEventListener('click', printSearchResult);

function printSearchResult(){
    let keywords=document.getElementById("search").search_keywords;
    $.get(`/search_movie?search_keywords=${keywords}`, function (data, status) {
        alert(data.length + status);
    });
}
