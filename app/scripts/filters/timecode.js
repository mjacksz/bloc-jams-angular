(function() {
    function timecode() {
        return function(seconds) {
            console.log("Just before the Number.isNan conditional:  " + seconds);
            if (Number.isNaN(seconds)) {
                return '-:--';
            }
            
            var seconds = Number.parseFloat(seconds);
            var wholeSeconds = Math.floor(seconds);
            var minutes = Math.floor(wholeSeconds / 60);
            var remainingSeconds = wholeSeconds % 60;
 
            var output = minutes + ':';
 
            if (remainingSeconds < 10) {
                output += '0';   
            }
 
            output += remainingSeconds;
             
            return output;
         };
     }
 
    
    angular
         .module('blocJams')
         .filter('timecode', timecode);
 })();