/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  if (n * k === 0) return [];
  if (k === 1) return nums;

  let left = nums.map(()=> 0);
  left[0] = nums[0];
  let right = nums.map(()=> 0);
  right[0] = nums[n-1];

  for (let i = 1; i < n; i++) {
    const element = nums[i];

    // 从左到右
    if (i % k === 0) {
      left[i] = nums[i];
    } else {
      left[i] = Math.max(left[i-1], nums[i]);
    }

    // 从右到左
    let j = n - i - 1;
    if ((j+1) % k === 0) {
      right[j] = nums[j];
    } else {
      right[j] = Math.max(right[j+1], nums[j]);
    }
  }

  let output = [];
  for (let i = 0; i < n-k+1; i++) {
    output.push(Math.max(right[i], left[i+k-1]));
  }

  return output;
};