/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length < 1) return 0;

  let ans = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }

    ans = Math.max(sum, ans);
  }

  return ans;
};
