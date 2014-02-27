
function playSomeMusic(myGenre) {  
	SC.initialize({      
  client_id: '02f6c269172ac9312f9de8ac41324001'
});

	SC.get('/tracks', { genres: myGenre, bpm: { from: 120 } },
  function(tracks) {
    //Pulls 50 songs and then randomly chooses one
      var random = Math.floor(Math.random() * 49);
      var track_url = tracks[random].permalink_url;
      //Displays the sound player
      SC.oEmbed(track_url, {auto_play: true, color: "ff0066"},
        document.getElementById("target"));
      }
);
};
