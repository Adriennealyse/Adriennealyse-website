// window.addEventListener("load", function() {
//    fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCeUJaZHuD9leaKpR2M0rRYQ&key=AIzaSyDHGUI-hoqt5Eu2AUiW_ywLa-sPCNBDRIY')
//    .then(response => response.json())

//    const div = document.getElementById("youtubeFeed")
// })

// let youtubeApi = []

window.addEventListener("load", function() {
   fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCeUJaZHuD9leaKpR2M0rRYQ&key=AIzaSyDHGUI-hoqt5Eu2AUiW_ywLa-sPCNBDRIY").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("youtube-feed");
         const youtubeApi = Object.entries(json);

         let youtubeArray = ""
         if(youtubeApi.length > 0) {
            for(let i = 0; i < (youtubeApi[3][1]).length; i++) {
              youtubeArray += youtubeApi[3][1][i]['player']['embedHtml']

               div.innerHTML = `
               <ul>
                  <li id='youtube-items'>${(youtubeArray)}</li>
               </ul>
            `;
            }

         }

         
            
         
      });
   });
})