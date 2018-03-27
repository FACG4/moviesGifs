



(function GameofthronesApi () {
  var url = "https://anapioficeandfire.com/api/characters/583"
  var xhr = new XMLHttpRequest();
  var searchInput = document.getElementsByClassName('GOT characters')[0].value;
  var btn =document.getElementsByClassName('btn')[0];
  var result = document.getElementsByClassName('result')[0];
  btn.addEventListener('click',function(event){
          event.preventDefault();
          // xhr.onreadystatechange = function() {
          //     if (xhr.readyState == 4 && xhr.status == 200) {
          //       var response = JSON.parse(xhr.responseText);
          //       console.log(response);
          //
          //     }
          //   }
            // xhr.open('GET', url)
            // xhr.send();
          })

          var name = document.createElement('li');
          var nameas = document.createElement('span');

          console.log("haneen");
          // name.src= name.url;
          result.appendChild(name);



        }
      )
     ()




        // })



//window.onload = GameofthronesApi;

// function fetch(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var response = JSON.parse(xhr.responseText);
//       callback(response);
//     }
//   }
//   xhr.open('GET', url)
//   xhr.send();
// }



// function GameofthronesApi () {
//   var url = ''
//   fetch(url, function (response) {
//     var repos = response.repos_url;
//     fetch(repos, function (response) {
//       var github_user_handle = response[0].owner.login;
//       var name = document.getElementById('github-user-handle');
//       name.textContent = github_user_handle
//       var avatar_url = response[0].owner.avatar_url;
//       var img = document.getElementById('github-user-avatar');
//       img.src = avatar_url;
//       var num_repos = document.getElementById('github-user-repos')
//       num_repos.textContent = response.length
//
//     })
//   })
//   }
