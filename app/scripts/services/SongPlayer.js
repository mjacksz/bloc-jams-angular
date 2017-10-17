(function() {
     /**
     * @function SongPlayer
     * @desc play and pause a song
     * @param SongPlayer
     */
     function SongPlayer($rootScope, Fixtures) {
          var SongPlayer = {};
         
          var currentAlbum = Fixtures.getAlbum();
         
          /**
          * @attribute  
          * @desc: current song volume
          * @type (Object)
          */          
          /*
          if (!SongPlayer.volume) {
             var SongPlayer.volume = null;  
             SongPlayer.setVolume(80);
          }
          SongPlayer.volume = SongPlayer.setVolume;
          */
          
              
              
              
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
                // currentBuzzObject.stop();
                // SongPlayer.currentSong.playing = null;
                stopSong();
            }
                          
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
             
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
 
            SongPlayer.currentSong = song;
        };

        
       
         /**
         * @Function    getSongIndex
         * @Desc        Get the index of a song
         * @param       currentAlbum.songs.indexOf(song)
         */
         var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
         };
         
         
        /**
        * @function: playSong
        * @desc: Play currently playing song and loadds new audio file as currentBuzzObject
        * @param: none
        */
        var playSong = function(song)  {
          console.log("Inside playSong = function");
          currentBuzzObject.play();
          // song = SongPlayer.currentSong;
          song.playing = true;    
        }     
        
        
        
        /**
        * @Function	private stopSong()
        * @Desc	    1. Stop the current Buzz object: currentBuzzObject.stop();
                    2. Set the playing property of the song object to null: song.playing = null;
        * @Param    None.
        */
        var stopSong = function(song)  {
	       if (!song ) {
               song = SongPlayer.currentSong;
                }
	       currentBuzzObject.stop();
	       song.playing = null;
        };
        
        
        SongPlayer.currentSong = null;
         
        /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        SongPlayer.currentTime = null;
         
        /**
        * @function SongPlay.play
        * @desc Play current object (song)
        * @param none
        */
        SongPlayer.play = function(song) { 
            song = song || SongPlayer.currentSong;
            
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);           
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song)                  
                }
            } 
     };
      
         /**
         * @Attribute
         * @Desc        Hold the value of the volume - sound level
         */
         /*
        
         attribute.$observe("volume", function(newValue) {
             scope.volume = 90;
         }
         */
         
         /**
         * @Function    SongPlayer.setVolume
         * @Desc        Set volume on seek bar
         * @Param       None
         SongPlayer.setVolume = function(song)  {
            currentBuzzObject.setVolume(90);
         }         
        */
         
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
         
          /**
         * @function SongPlayer.setVolume
         * @desc pause current song (object)
         * @param none
         */
         SongPlayer.setVolume = function(volume) {            
            if (currentBuzzObject) {
		      currentBuzzObject.setVolume(volume)
	        }
         };
         
         /**
         * @Function    SongPlayer.previous
         * @Desc        Retrieve previous song's index - Decrement -1
         * @Param       SongPlayer
         **/
         SongPlayer.previous = function() {
            console.log("Inside SongPlayer.previous function");
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
             
            if (currentSongIndex < 0) {
                stopSong();                
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
         };
         
         
        /**
         * @Function    SongPlayer.next
         * @Desc        Retrieve next song's index 
         * @Param       SongPlayer
         */
         SongPlayer.next = function() {           
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;  
                      
            if (currentSongIndex >= currentAlbum.songs.length) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
         };
        
         /**
         * @function setCurrentTime
         * @desc Set current time (in seconds) of currently playing song
         * @param {Number} time
         */
         SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
         };
         
         return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();

































