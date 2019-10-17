/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length;
  if (len < 2) return len;

  const res = nums.map(() => 1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        res[i] = Math.max(res[i], res[j]+1);
      }
    }
  }

  let max = res[0];
  res.map(e => e > max ? max=e:null);
  return max;
};