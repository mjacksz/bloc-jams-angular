(function() {
     // function AlbumCtrl(Fixtures) {    
     function AlbumCtrl(Fixtures, SongPlayer) {     
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        // console.log("This AlbumC.js albumData vales: " + this.albumData);
     }
 
    
     angular
         .module('blocJams')
        //.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();