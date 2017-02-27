/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-27 21:00:54
 * @version $Id$
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * Solution Idea: https://discuss.leetcode.com/topic/503/anyone-who-has-a-o-n-algorithm/3
 * 
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
   let size = height.length,
       maxVal = 0,
       left = 0,
       right = size-1;
   
   while (left < right) {
       let lVal = height[left], 
           rVal = height[right],
           currentVal = minVal(lVal, rVal)*(right-left);
       if (maxVal < currentVal) {
          maxVal = currentVal;
       }
       if (lVal > rVal) {
           right -= 1;
       } else {
           left += 1;
       }
   }
   
   return maxVal;
};

let minVal = function(a, b) {
    if (a>b) {
        return b;
    }
    
    return a;
};

let maxVal = function (a, b) {
    if (a>b) {
        return a;
    }
    
    return b;
};