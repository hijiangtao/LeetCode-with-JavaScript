// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-25 20:55:29
 * @version $Id$
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bits = 31,
        divs = Math.pow(2, 31),
        res = 0;
    
    for ( ; n !== 0; ) {
        let judge = Math.floor(n/divs);
        if (judge) {
            res += Math.pow(2, 31-bits);
        }
        n = n%divs;
        divs /= 2;
        bits -= 1;
    }
    
    return res;
};