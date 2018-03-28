
//initial variables;
const searchBase = 'https://api.themoviedb.org/3/search/movie?api_key=cd3a47da827b844b8115468bdc9acd9e&query=';
var input, searchQuery, searchUrl;

var buttonNode = document.getElementById('search-button');

//api request function:
function movieSearch(searchUrl, callback){

/// changing the search query based on input text...
  input = document.getElementById('input').value.split(' ');
  searchQuery = input.join('+');
  searchUrl = searchBase + searchQuery;
  console.log(searchUrl);

/// actual function syntax...
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
    var response = JSON.parse(xhr.responseText);
    console.log(response);
    callback(response);
  }
  }
  xhr.open('GET', searchUrl)
  xhr.send();
}





/// accessing the object through the DOM event listener...
buttonNode.addEventListener('click', function(event){
  movieSearch(searchUrl, function(response){

    var ul = document.createElement('ul');
    var div = document.getElementById('result')
    var result = response.results[0];
    var posterLink = result.poster_path;
    document.getElementById('image').src = 'http://image.tmdb.org/t/p/w400//' + posterLink;
    var title = document.createElement('li');
    title.textContent = 'Title: ' + result.title;
    console.log(result.title);
    console.log(result.vote_average);
    console.log(result.id);
    console.log(result.release_date);

    ul.appendChild(title);
    div.appendChild(ul);
  });
});






/*
id = result.id;
title = result.original_title;
vote average = result.vote_average;
release date = result.release_date;
*/
//link to poster
///https://api.themoviedb.org/3/movie/id/images?api_key=cd3a47da827b844b8115468bdc9acd9e

///http://image.tmdb.org/t/p/w500//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg example movie poster, w500 means width is 500px, the height is responsive on its own. works for any pic.

/// response.results[0] is the most relevant result.
