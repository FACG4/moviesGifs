







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
