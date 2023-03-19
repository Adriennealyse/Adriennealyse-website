window.addEventListener("load", function() {
    fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCeUJaZHuD9leaKpR2M0rRYQ&key=AIzaSyDHGUI-hoqt5Eu2AUiW_ywLa-sPCNBDRIY')
    .then(response => response.json())
    .then(youtube => setYoutube(youtube))

    const div = document.getElementById("youtubeFeed")
})



window.addEventListener("load", function() {
   fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCeUJaZHuD9leaKpR2M0rRYQ&key=AIzaSyDHGUI-hoqt5Eu2AUiW_ywLa-sPCNBDRIY").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("youtube-feed");
         const youtubeApi = Object.entries(json);
         // console.log(youtubeApi)

         if(youtubeApi.length > 0) {
            for(let i = 0; youtubeApi.length < 0; i++) {
               console.log(i)
            }
         }

         // for (entry of youtubeApi) {
         //    for (let i = 0; i < entry.length; i++) {
         //       let youtubeArray = entry[1]
         //       if(youtubeArray.length > 0) {
         //          youtubeFeeds = youtubeArray[0].player
         //          console.log(youtubeFeeds)
         //          // console.log(Object.entries(youtubeFeeds))
                  

         //          div.innerHTML = `
         //             <ul>
         //                <li>Temp ${youtubeFeeds}</li>
         //             </ul>
                     
         //          `;
         //       }
         //    }
            
         // } 
      });
   });
})