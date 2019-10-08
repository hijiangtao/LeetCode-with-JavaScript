// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-25 22:21:51
 * @version $Id$
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    let numslen = nums.length;
    for (let i=0; i<k; i++) {
        let lastnode = nums.pop();
        nums.unshift(lastnode);
    }
};

/**
 * 2
 * @param {*} nums 
 * @param {*} k 
 */
const rotate_2 = (nums, k) => {
    let temp, previous;
    for (let i = 0; i < k; i++) {
        previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
}

/**
 * 3
 * @param {*} nums 
 * @param {*} k 
 */
const rotate_3 = (nums, k) => {
    let count = 0;

    for (let start=0; count<nums.length; start++) {
        let curIndex = start;
        let prevNum = nums[start];

        do {
            const nextIndex = (curIndex + k) % nums.length;
            let temp = nums[nextIndex];
            nums[nextIndex] = prevNum;
            prevNum = temp;
            curIndex = nextIndex;
            count++;
        } while (start !== curIndex);
    }
}

/**
 * 4
 * @param {*} nums 
 * @param {*} k 
 */
const rotate_4 = (nums, k) => {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        
        end -= 1;
        start += 1;
    }
}