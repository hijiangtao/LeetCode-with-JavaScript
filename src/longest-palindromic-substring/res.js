/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-10 17:35:02
 * 
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
   let len = s.length,
        end = len-1,
        sarray = s.split('');
        
    if(len<2) {
        return s;
    }
    
    let resfrom = 0, 
        resto = 0;
    for(let i=0; i<end; i++) {
        expandPalindrome(i,i);
        if (sarray[i] === sarray[i+1]) {
            expandPalindrome(i,i+1);
        }
    }
    
    return s.substring(resfrom, resto+1);
    
    function expandPalindrome(start, stop) {
        while (start>0 && stop<end) {
            if (sarray[start-1] === sarray[stop+1]) {
                start--;
                stop++;
            } else {
                break;
            }
        }
        
        if (stop-start>resto-resfrom) {
            resfrom = start;
            resto = stop;
        }
    }
};