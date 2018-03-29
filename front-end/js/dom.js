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

    var resultDiv = document.getElementById('result');
    var ul = document.createElement('ul');


    var image = 'http://image.tmdb.org/t/p/w300/' + result.poster_path;
    var img = document.createElement('img');
    img.src = image;
    img.id = 'movie-poster';

    var l1 = document.createElement('li');
    var l2 = document.createElement('li');
    var l3 = document.createElement('li');
    var l4 = document.createElement('li');

    l1.textContent = 'Title: ' + result.title;
    l2.textContent = 'Vote average: ' + result.vote_average;
    l3.textContent = 'Release date: ' + result.release_date;
    l4.appendChild(img);

    ul.appendChild(l4);
    ul.appendChild(l1);
    ul.appendChild(l2);
    ul.appendChild(l3);

    resultDiv.appendChild(ul);

    // var span = document.createElement('span');
    // span.id = 'title';
    // span.textContent = result.title;
    var newButton = document.createElement('button');
    newButton.textContent = 'Giphy';
    newButton.id ='giphy-button';
    resultDiv.appendChild(newButton);
    // var btnDiv = document.createElement('div');
    // var imgDiv = document.createElement('div');
    // var spanDiv = document.createElement('div');

    // btnDiv.appendChild(newButton);
    // imgDiv.appendChild(img);
    // spanDiv.appendChild(span);

    // div.appendChild(spanDiv)
    // div.appendChild(imgDiv)
    // div.appendChild(btnDiv)

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
