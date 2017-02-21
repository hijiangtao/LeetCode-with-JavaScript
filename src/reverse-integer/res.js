/**
 * Reverse digits of an integer.
 * 
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * 
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-21 21:25:59
 * @version $Id$
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0,
    	abs = Math.abs(x),
    	negative = abs === x? false:true;

    while (abs>0) {
    	let currentVal = abs % 10;
    	res = res*10 + currentVal;
    	abs = Number.parseInt(abs/10);
    }

    if (res > Math.pow(2, 31)) {
    	return 0;
    } else if (negative) {
    	return -res;
    }

    return res;
};

// Another solution wrote in Java
// 
// public int reverse(int x)
// {
//     int result = 0;

//     while (x != 0)
//     {
//         int tail = x % 10;
//         int newResult = result * 10 + tail;
//         if ((newResult - tail) / 10 != result)
//         { return 0; }
//         result = newResult;
//         x = x / 10;
//     }

//     return result;
// }