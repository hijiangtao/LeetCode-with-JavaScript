/**
 * Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * two0sum.js
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if ( addition(nums[i], nums[j]) === target ) {
				return [j, i];
			}
		}
	}
};

// add a with b and return it
let addition = function(a, b) {
	return a + b;
};