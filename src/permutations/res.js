/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-03 21:52:31
 *
 * Problem: Given a collection of distinct numbers, return all possible permutations.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
	let numlen = nums.length,
		res = [];

	if (numlen === 0) {
		return res;
	} else if (numlen === 1) {
		res.push(nums);
		return res;
	}

	return subpermute([], nums);
};

let subpermute = function(base, nums) {
	let numlen = nums.length,
		res = [];

	if (numlen === 1) {
		return [base.concat(nums)];
	}

	for (let i = 0; i < numlen; i++) {
		let subarray = [];
		for (let j = 0; j < numlen; j++) {
			if (i === j) {
				continue;
			}
			subarray.push(nums[j]);
		}

		let newbase = base.concat([nums[i]]);
		res = res.concat(subpermute(newbase, subarray));
	}

	return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const len = nums.length;
	if (!len) return [];
	const res = [];

	const enmurate = (preArr, candidates) => {
		if (candidates.length === 1) return res.push([...preArr, ...candidates]);

		for (let i = 0; i < candidates.length; i++) {
			const temp = candidates.slice();
			temp.splice(i, 1);
			enmurate([...preArr, candidates[i]], temp);
		}
	}

	enmurate([], nums.slice());
	return res;
};
