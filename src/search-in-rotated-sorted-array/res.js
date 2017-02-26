/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * 
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-26 23:34:54
 * @version $Id$
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    let count = 0,
        curIndex = 0,
        preIndex = 0,
        larger = true,
        numslen = nums.length;
        
    if (numslen === 0) {
        return -1;
    }
    if (nums[0] < target) {
        larger = false;
    }
    
    // 需要考虑两点: 到了原始排序数组边缘跳转, 或者 target 不存在对比出现大小反转的情况
    while (count < numslen) {
        // Found the target
        if (nums[curIndex] === target) {
            return curIndex;
        } else if (nums[curIndex] > target) {
            if (!larger || nums[curIndex] > nums[preIndex]) {
                return -1;
            }
            
            preIndex = curIndex;
            curIndex = (curIndex-1+numslen)%numslen;
        } else {
            if (larger || nums[curIndex] < nums[preIndex]) {
                return -1;
            }
            
            preIndex = curIndex;
            curIndex = (curIndex+1)%numslen;
        }
        
        count += 1;
    }
    
    return -1;
};