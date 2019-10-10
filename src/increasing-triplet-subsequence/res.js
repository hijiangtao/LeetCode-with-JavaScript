/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const len = nums.length;
  if (len < 3) return false;
    
  let i = 0;
  let small = Number.MAX_SAFE_INTEGER, mid = Number.MAX_SAFE_INTEGER;

  while (i < len) {
    if (nums[i] <= small) {
      small = nums[i];
    } else if (nums[i] <= mid) {
      mid = nums[i];
    } else {
      return true;
    }

    i++;
  }

  console.log(small, mid)
  return false;
};