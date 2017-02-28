/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-28 22:47:17
 * @version $Id$
 * 
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let size = nums.length,
        result = 0;
    
    if (!size) {
        return null;
    }
    
    for (let i=0; i<size; i++) {
        result ^= nums[i];
    }
    
    return result;
};