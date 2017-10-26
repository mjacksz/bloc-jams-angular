(function() {
    function timecode() {
        return function(seconds) {         
                var newTimeCode = buzz.toTimer(seconds);
                return newTimeCode;
         };
     }
 
    
    angular
         .module('blocJams')
         .filter('timecode', timecode);
 })();