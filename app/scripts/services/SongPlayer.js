(function() {
     /**
     * @function SongPlayer
     * @desc play and pause a song
     * @param SongPlayer
     */
     function SongPlayer(Fixtures) {
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
                stopSong();
                //currentBuzzObject.stop();
                //SongPlayer.currentSong.playing = null;
            }
                          
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
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
        
         return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();

































