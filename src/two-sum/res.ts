/**
 * Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSum =(nums:Array<number>, target:number): Array<number>  => {

	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if ( addition(nums[i], nums[j]) === target ) {
				return [j, i];
			}
		}
	}

    return [];
};

// add a with b and return it
const addition = (a:number, b:number) => {
	return a + b;
};