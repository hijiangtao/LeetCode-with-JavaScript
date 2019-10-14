/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += nums[i];
      while (sum >= s) {
          ans = Math.min(ans, i + 1 - left);
          sum -= nums[left++];
      }
  }
  return (ans != Number.MAX_SAFE_INTEGER) ? ans : 0;
}