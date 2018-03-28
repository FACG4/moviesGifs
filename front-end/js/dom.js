
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


(function searchGifs () {
  var xhr = new XMLHttpRequest();
  var btn = document.getElementById('btn');
  var result = document.getElementById('search-result');
  btn.addEventListener('click', function (event) {
    var searchInput = document.getElementById('movies').value;
  //  console.log(searchInput);
    var url="http://api.giphy.com/v1/gifs/search?q=" + searchInput + '&limit=10' + "&api_key=Ju3NuG8L17eBWI3hyZ71jiL3KVQGVTJY";
    xhr.onreadystatechange = function () {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        var response = JSON.parse(xhr.responseText);
        var data = response.data;
        data.forEach(function (res) {
          const img =  document.createElement("img");
          img.src = res.images.fixed_height.url;
          result.appendChild(img);
        })
      }
    };
    xhr.open('GET', url);
    xhr.send();
  })
  }
)()










// window.onload = searchGifs;
//
// url="http://api.giphy.com/v1/gifs/search?q=" +danial+ '&limit=10' + "&api_key=Ju3NuG8L17eBWI3hyZ71jiL3KVQGVTJY";
// function fetch(url,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.onreadystatechange=function(){
//
//     if(xhr.readyState==4&&xhr.status==200){
//       var response=JOSN.parse(xhr.responseText);
//       callback(response);
//     }
//   }
//   xhr.open('GET',url);
//   xhr.send();
// }
// // var result=document.queryselector('.search-result');
// // var tag=document.createElement('ul');
// // result.appendchild(ul);
//
// function searchGifs(name, callback) {
//
//
//  })
//
// }







// (function searchGifs () {
//   var xhr = new XMLHttpRequest();
//   var searchInput = document.getElementsByClassName('search-query')[0];
//   var btn = document.getElementsByClassName('search-btn')[0];
//   var result = document.getElementsByClassName('search-results')[0];
//   btn.addEventListener('click', function (event) {
//     xhr.onreadystatechange = function () {
//       if ( xhr.readyState === 4 && xhr.status === 200 ) {
//         var response = JSON.parse(xhr.responseText);
//         var data = response.data;
//         data.forEach(function (res) {
//           const img =  document.createElement("img");
//           img.src = res.images.fixed_height.url;
//           result.appendChild(img);
//         })
//       }
//     };
//     xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=' + harry potor + '&limit=10' +'&api_key=dc6zaTOxFJmzC');
//     xhr.send();
//   })
//   }
// )()
