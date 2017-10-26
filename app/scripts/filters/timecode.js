(function() {
    function timecode() {
        return function(seconds) {
            
            console.log("Just before the Number.isNan conditional:  " + seconds);
         
           // if (Number.isNaN(seconds) == undefined ) {
            if (seconds === undefined || seconds === null) {
                console.log("Value of Number.isNan(seconds): " + seconds);
                return '-:--';
            } else {
                var newTimeCode = buzz.toTimer(seconds);
                return newTimeCode;
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
 

/*

(function() {
    function timecode() {
        return function(seconds) {
            
            console.log("Just before the Number.isNan conditional:  " + seconds);
         
           // if (Number.isNaN(seconds) == undefined ) {
            if (seconds === undefined || seconds === null) {
                console.log("Value of Number.isNan(seconds): " + seconds);
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
 
 */