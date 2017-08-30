(function() {
     /*
     * @function SongPlayer
     * @desc play and pause a song
     * @param SongPlayer
     */
     function SongPlayer(Fixtures) {
     // function SongPlayer() {
          var SongPlayer = {};
         
          var currentAlbum = Fixtures.getAlbum();
         
          /**
          * @desc: current song
          * @type (Object)
          */
          //SongPlayer.currentSong = null;
          // var currentSong = null;
         
          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;
                
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */      
         var setSong = function(song) { 
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

         SongPlayer.currentSong = song;
    
         };
       
         
        /**
        * @function: playSong
        * @desc: Play currently playing song and loadds new audio file as currentBuzzObject
        * @param: none
        */
        var playSong = function()  {
          console.log("Inside playSong = function");
          currentBuzzObject.play();
          song = SongPlayer.currentSong;
          song.playing = true;    
        }     
        
        SongPlayer.currentSong = null;
         
        /**
        * @function SongPlay.play
        * @desc Play current object (song)
        * @param none
        */
        SongPlayer.play = function(song) { 
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) { 
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    SongPlayer.currentSong.playing = null;
                }
                 currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true
                  });
                
                SongPlayer.currentSong = song;
                
                console.log("playSong function call");
                playSong();
               //  currentBuzzObject.play();
               //  song.playing = true;
            
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            } 
     };
      
         
         
         /**
         * @function SongPlayer.pause
         * @desc pause current song (object)
         * @param none
         */
         SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
         };
         
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
