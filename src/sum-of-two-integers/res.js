/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-03-03 22:05:30
 * 
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * 
 * Example
 * 
 * Given a = 1 and b = 2, return 3.
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
let getSum = function(a, b) {
    if (b === 0) {
        return a;
    }
    
    while (b !== 0) {
        let t = a^b;
        b = (a&b) << 1;
        a = t;
    }
    
    return a;
};