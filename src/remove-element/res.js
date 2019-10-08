/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let curIndex = 0;
  const arrLen = nums.length;
  
  for (let i=0; i<arrLen; i++) {
      if (nums[i] !== val) {
          nums[curIndex++] = nums[i];
      }
  }
  
  return curIndex;
};