/*
 * @Author: hijiangtao@gmail.com 
 * @Date: 2019-10-08 20:44:59 
 * @Last Modified time: 2019-10-08 20:45:19
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    return solutionK(nums, 2);
};

const solutionK = (nums, k) => {
  let index = 0;

  for (let i=0; i<nums.length; i++) {
    if (index < k || nums[i] !== nums[index-k]) {
      nums[index++] = nums[i];
    }
  }

  return index;
}