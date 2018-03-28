var firstButton = document.getElementById('search-button');
var url = 'https://api.themoviedb.org/3/search/movie?api_key=cd3a47da827b844b8115468bdc9acd9e&query=';

function fetch(url, cb){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
      cb(response);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}


firstButton.addEventListener('click', function(event){
  movieSearch();

});
function movieSearch(){
  var input = document.getElementById('input').value.split(' ');
  var searchQuery = input.join('+');
  var newUrl = url + searchQuery;
    console.log(url);
  fetch(newUrl, function(response){
    var result = response.results[0];

    var image = 'http://image.tmdb.org/t/p/w300/' + result.poster_path;
    var img = document.createElement('img');
    img.src = image;
    var div = document.getElementById('result');
    var span = document.createElement('span');
    span.id = 'title';
    span.textContent = result.title;
    var newButton = document.createElement('button');
    newButton.textContent = 'Giphy';

    div.appendChild(newButton);
    div.appendChild(img);
    div.appendChild(span);

    newButton.addEventListener('click', function(e){
      var gihpyUrl = "http://api.giphy.com/v1/gifs/search?q=" + result.title + '&limit=10' + "&api_key=Ju3NuG8L17eBWI3hyZ71jiL3KVQGVTJY";
      fetch(gihpyUrl,function(response){
        var data = response.data;
        data.forEach(function(res){
          const img =  document.createElement("img");
          img.src = res.images.fixed_height.url;
          var giphyContainer = document.getElementById('giphy-container');
          giphyContainer.appendChild(img);
      })
    })
  });
})
}
