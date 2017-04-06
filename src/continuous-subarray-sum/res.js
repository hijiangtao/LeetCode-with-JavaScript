/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-06 14:45:14
 * 
 * Problem: Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer.
 * 
 * Reference: https://discuss.leetcode.com/topic/80793/java-o-n-time-o-k-space
 * Idea: We iterate through the input array exactly once, keeping track of the running sum mod k of the elements in the process. If we find that a running sum value at index j has been previously seen before in some earlier index i in the array, then we know that the sub-array (i,j] contains a desired sum.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let checkSubarraySum = function(nums, k) {
	let map = new Map(),
		len = nums.length,
		sum = 0;

	if (len < 2) return false;
	map.set(0, -1);

	for (let i = 0; i < len; i++) {
		sum += nums[i];
		if (k !== 0) {
			sum %= k;
		}

		let preInd = map.get(sum);
		// console.log('i', i, 'preInd', preInd);
		if (preInd !== undefined) {
			if (i - preInd > 1) return true;
		} else {
			map.set(sum, i);
		}
	}

	return false;
};
