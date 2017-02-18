/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * 
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * 
 * The digits are stored such that the most significant digit is at the head of the list.
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-18 19:41:09
 * @version $Id$
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
   let carrybit = 1,
       res = [];
   
   for (let i = digits.length - 1; i >= 0; i--) {
    let currentval = digits[i] + carrybit;
    if (currentval>9) {
    	carrybit=1;
    	currentval%=10;
    } else {
    	carrybit=0;
    }
    res.unshift(currentval)
   }

   if (carrybit===1) {
   	res.unshift(1);
   }

   return res;
};