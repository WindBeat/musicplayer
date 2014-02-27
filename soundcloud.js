

function playSomeMusic(myGenre) {  
	SC.initialize({      
  client_id: '02f6c269172ac9312f9de8ac41324001'
});

	SC.get('/tracks', { genres: myGenre, bpm: { from: 120 } },
  function(tracks) {
    //FIRST soundcloud sends back an array of 50 objects (0~49)
    //so let's randomize which one we play:
      //this logic returns a number between 0 and 50
      var random = Math.floor(Math.random() * 49);
      var track_url = tracks[random].permalink_url;
      //LAST let's use the oEmbed method to display the soundplayer
      //in the element #target with a options such as auto play
      SC.oEmbed(track_url, {auto_play: true, color: "ff0066"},
        document.getElementById("target"));
      }
);
};