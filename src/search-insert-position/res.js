/**
 * 二分法细节处理
 * 1. mid 防止过大数的取值 mid = left + (right - left) / 2;
 * 2. 循环条件 while (left <= right)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length;
  if (len < 1) return 0;
  
  let left = 0, right = len - 1;

  while(left <= right) {
    let mid = (left + right) >> 1;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};