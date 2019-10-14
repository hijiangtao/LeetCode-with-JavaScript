/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length;
  if (len < 2) return nums;

  const swap = (a, b) => {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }

  let currZero = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      if (currZero === i) {
        currZero++;
      } else {
        swap(i, currZero++);
      }
    }
  }

  return nums;
};