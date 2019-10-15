/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  const len = nums.length;
  if (len < 2) return nums.length;

  let prediff = nums[1] - nums[0];
  let count = prediff ? 2 : 1;

  for (let i = 2; i < len; i++) {
    const flag = nums[i] - nums[i-1];
    if (flag > 0 && prediff <= 0 || flag < 0 && prediff >= 0) {
      count++;
      prediff = flag;
    }
  }

  return count;
};