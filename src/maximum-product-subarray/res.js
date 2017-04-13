/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-13 10:10:59
 * 
 * Find the contiguous subarray within an array (containing at least one number) which has the largest product.
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 * 
 * Solution idea: https://discuss.leetcode.com/topic/3607/sharing-my-solution-o-1-space-o-n-running-time
 * 
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
	let len = nums.length;
	if (!len) {
		return 0;
	}

	let maxPre = nums[0],
		maxNow = nums[0],
		minPre = nums[0];
	for (let i = 1; i < len; i++) {
		let maxVal = Math.max(maxPre * nums[i], minPre * nums[i], nums[i]),
			minVal = Math.min(minPre * nums[i], maxPre * nums[i], nums[i]);

		maxNow = Math.max(maxVal, maxNow);
		maxPre = maxVal;
		minPre = minVal;
	}

	return maxNow;
};
