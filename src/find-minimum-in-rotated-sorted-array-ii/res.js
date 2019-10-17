/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  let left = 0, right = len - 1;
  
  while(left < right) {
    const mid = (left + right) >> 1;

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right -= 1;
    }
  }

  return nums[left];
};