/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * 
 * Note:
 * You are not suppose to use the library's sort function for this problem.
 * 
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * 
 * First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
 * 
 * Could you come up with an one-pass algorithm using only constant space?
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-03-02 23:33:12
 * @version $Id$
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function(nums) {
   let numsize = nums.length,
       begin = 0,
       end = numsize-1;
 
   for (let i=0; i<=end; i++) {
       let currentVal = nums[i];
       switch (currentVal) {
           case 0:
               nums[i] = nums[begin];
               nums[begin++] = 0;
               break;
           case 2:
               nums[i--] = nums[end];
               nums[end--] = 2;
               break;
           default:
               break;
       }
   }
   
};

// another one-pass solution 
let sortColors = function(nums) {
    let numsize = nums.length, 
    	n0 = -1, 
    	n1 = -1, 
    	n2 = -1;

    for (let i = 0; i < numsize; ++i) {
        if (nums[i] == 0) {
            nums[++n2] = 2; 
            nums[++n1] = 1; 
            nums[++n0] = 0;
        } else if (nums[i] == 1) {
            nums[++n2] = 2; 
            nums[++n1] = 1;
        } else if (nums[i] == 2) {
            nums[++n2] = 2;
        }
    }
};

// traditional two-pass solution
let sortColors = function(nums) {
    let numsize = nums.length,
    	n0 = 0,
    	n1 = 0;

    for (let i = 0; i < numsize; i++) {
        if (nums[i] === 0) {
            nums[n0++] = 0;
        } else if (nums[i] === 1) {
            n1 += 1;
        }
    }

    n1 += n0;
    for (let i = n0; i < numsize; i++) {
    	if (i<n1) {
    		nums[i] = 1;
    	} else {
    		nums[i] = 2;
    	}
    }
};