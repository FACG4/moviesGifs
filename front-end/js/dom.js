var firstButton = document.getElementById('search-button');
var url = 'https://api.themoviedb.org/3/search/movie?api_key=cd3a47da827b844b8115468bdc9acd9e&query=';

function fetch(url, cb) {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      cb(response);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}


firstButton.addEventListener('click', function(event) {

  event.preventDefault()


  movieSearch();

});

function movieSearch() {
  // var clear=document.getElementById('clear');
  // clear.textContent= " ";
  var giphyContainer = document.getElementById('giphy-container');
  var div = document.getElementById('result');
  giphyContainer.innerHTML = " ";
  div.innerHTML = " ";
  var input = document.getElementById('input').value.split(' ');
  var searchQuery = input.join('+');
  var newUrl = url + searchQuery;
  console.log(url);
  fetch(newUrl, function(response) {
    var result = response.results[0];
    // console.log(result, 'lllllllll');

    var image = 'https://image.tmdb.org/t/p/w300/' + result.poster_path;
    var img = document.createElement('img');
    img.src = image;
    var span = document.createElement('span');
    span.id = 'title';
    span.textContent = result.title;
    var newButton = document.createElement('button');
    newButton.id = "h";
    newButton.textContent = 'Giphy';
    var btnDiv = document.createElement('div');
    var imgDiv = document.createElement('div');
    var spanDiv = document.createElement('div');


    div.appendChild(newButton);
    div.appendChild(img);
    div.appendChild(span);
    btnDiv.appendChild(newButton);
    imgDiv.appendChild(img);
    spanDiv.appendChild(span);

    div.appendChild(spanDiv);
    div.appendChild(imgDiv);
    div.appendChild(btnDiv);

    newButton.addEventListener('click', function(e) {
      var gihpyUrl = "https://api.giphy.com/v1/gifs/search?q=" + result.title + '&limit=10' + "&api_key=Ju3NuG8L17eBWI3hyZ71jiL3KVQGVTJY";
      fetch(gihpyUrl, function(response) {
        var data = response.data;
        data.forEach(function(res) {
          const img = document.createElement("img");
          img.src = res.images.fixed_height.url;
          giphyContainer.appendChild(img);
          document.getElementById('h').disabled = true;



        })
      })
    });
  })
}
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
