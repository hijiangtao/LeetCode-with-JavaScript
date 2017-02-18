/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 * 
 * Example:
 * 
 * Given num = 16, return true. Given num = 5, return false.
 * 
 * Follow up: Could you solve it without loops/recursion?
 *
 * Hint: We know that if number is power of two, it satisfies that n & (n – 1) equals zero, that is: n & (n – 1) removes the least significant bit, leaving the number (that is power of two) zero. We also know that mathematically, 4^n - 1  can be divided by 3.
 * 
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-18 20:13:10
 * @version $Id$
 */

/**
 * @param {number} num
 * @return {boolean}
 */
let isPowerOfFour = function(num) {
    let compNum = num-1;
    if (num<1 || num & compNum) {
        return false;
    }
    if (compNum%3 !== 0) {
        return false;
    }
    
    return true;
};