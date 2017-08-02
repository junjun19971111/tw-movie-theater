/**
 * Created by tw on 17-8-1.
 */

document.getElementById("search_btn").addEventListener('click', printSearchResult);

function printSearchResult(){
    let keywords=document.getElementById("search_keywords").value;
    $.get(`/search_movie?search_keywords=`, function (ans) {
            alert(ans);
    });
}
