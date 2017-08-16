(function() {
     function CollectionCtrl(Fixtures)  {  
        this.albums = Fixtures.getCollection(12); 
        console.log("From: CollCtrl.js - this.albums value is: " +  Fixtures.getCollection(12));
     }
    
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ["Fixtures", CollectionCtrl]);
 })();