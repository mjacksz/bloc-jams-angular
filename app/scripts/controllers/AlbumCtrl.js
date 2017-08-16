(function() {
     function AlbumCtrl(Fixtures) {    
          
        this.albumData = Fixtures.getAlbum();
        console.log("This AlbumC.js albumData vales: " + this.albumData);
     }
 
    
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();