// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-25 21:23:03
 * @version $Id$
 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseString = function(s) {
    let res = '';
    
    while (s) {
        res = s.charAt(0)+res;
        s = s.substring(1);
    }
    
    return res;
};