var player;

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('ytplayer', {
        height: '360',
        width: '615',
        videoId: 'HL1ccH6pvvQ',
        events: {
          'onStateChange': function(events) {
            if (event.data == YT.PlayerState.PLAYING) {
              console.log("booboo")
              $('.vid').removeClass('isAngled');
            } else {
              $('.vid').addClass('isAngled');
            }
          }
        }
      });
    }