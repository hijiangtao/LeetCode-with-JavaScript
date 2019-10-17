/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  const len = nums.length;
  if (len < 2) return 0;
  let left = 0, right = len - 1;
  
  while(left < right) {
    const mid = (left + right) >> 1;
    const next = mid + 1 >= len ? Number.MIN_SAFE_INTEGER : nums[mid + 1];

    if (nums[mid] > next) {
      right = mid;
    } else if (nums[mid] < next) {
      left = mid + 1;
    }
  }

  return left;
};