/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-03-01 21:57:06
 * @version $Id$
 */

/**
 * Divide two integers without using multiplication, division and mod operator.
 * 
 * If it is overflow, return MAX_INT.
 * 
 * Pay attention to Javascript Bitwise operators
 * http://www.ecma-international.org/ecma-262/5.1/#sec-11.10
 * 
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
    let MIN_INT = -2147483648,
        MAX_INT = 2147483647,
        positive = 0;
    
    if(!divisor || (dividend === MIN_INT && divisor === -1)) {
        return MAX_INT;
    }
    
    let res = 0;
    if (dividend < 0) {
        dividend = -dividend;
        positive += 1;
    }
    if (divisor < 0) {
        divisor = -divisor;
        positive += 1;
    }
    
    while (dividend >= divisor) {
        let tmpres = 1, tmpdiv = divisor;
        
        while ((dividend >> 1) >= tmpdiv) {
            tmpres <<= 1;
            tmpdiv <<= 1;
        }
        res += tmpres;
        dividend -= tmpdiv;
    }
    
    if (positive === 1) {
        return -res;
    }
    
    return res;
};