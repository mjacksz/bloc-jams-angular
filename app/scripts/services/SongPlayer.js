(function() {
     /*
     * @function SongPlayer
     * @desc play and pause a song
     * @param SongPlayer
     /*
     function SongPlayer() {
          var SongPlayer = {};
         
          /**
          * @desc: current song
          * @type (Object)
          */
          var currentSong = null;
         
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
                currentSong.playing = null;
            }

         currentSong = song;
    
         };
       
         
        /**
        * @function: playSong
        * @desc: Play currently playing song and loadds new audio file as currentBuzzObject
        * @param: none
        */
        var playSong = function()  {
          console.log("Inside playSong = function");
          currentBuzzObject.play();
          song = currentSong;
          song.playing = true;    
        }     
        
        
        /**
        * @function SongPlay
        * @desc Play song
        * @param none
        /*
        SongPlayer.play = function(song) {
            if (currentSong !== song) { 
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
                 currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true
                  });
                
                currentSong = song;
                
                console.log("playSong function call");
                playSong();
               //  currentBuzzObject.play();
               //  song.playing = true;
            
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            } 
     };
      
         /**
         * @function SongPlayer 
         * @desc pause current object
         * @param none
         /*
         SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
         };
         
         
          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
