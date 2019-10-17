/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len  = nums.length;
  let left = 0, right = len-1;
  if (len === 1 || nums[left] < nums[right]) return nums[0];

  while (left < right) {
    const mid = (left + right) >> 1;

    if (nums[left] > nums[mid] || nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[left] < nums[mid] || nums[mid] > nums[right]) {
      left = mid + 1;
    }
  }

  return nums[left];
};
