/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-12 21:44:08
 * 
 * Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 * 
 * Note:
 * Each of the array element will not exceed 100
 * The array size will not exceed 200.
 *
 * Optimize Idea: https://discuss.leetcode.com/topic/67539/0-1-knapsack-detailed-explanation/2
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
let canPartition = function(nums) {
	let len = nums.length,
		res = 0;
	if (len === 1) return false;

	// 求和
	for (let i = 0; i < len; i++) {
		res += nums[i];
	}
	if (res % 2) return false;
	res /= 2;

	// 初始化结果数组,所有元素初始化为0
	let arr = new Array(res + 1);
	arr[0] = 1;
	for (let i = 1; i <= res; i++) {
		arr[i] = 0;
	}

	// 遍历 nums 数组更新 arr
	for (let i = 0; i < len; i++) {
		for (let j = res; j >= nums[i]; j--) {
			arr[j] += arr[j - nums[i]];
		}
		if (arr[res]) return true;
	}

	return false;
};
