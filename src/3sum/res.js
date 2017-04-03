/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-03 23:45:47
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
	nums.sort(function(a, b) {
		return a - b;
	});

	let numlen = nums.length,
		end = nums[numlen - 1],
		eInd = numlen - 2,
		res = [];

	if (numlen < 3 || nums[0] > 0 || end < 0) {
		return [];
	}

	for (let i = 0; i < eInd; i++) {
		let revi = -nums[i],
			j = i + 1,
			k = numlen - 1;

		if (revi < 0) {
			break;
		}

		while (j < k) {
			let norj = nums[j],
				nork = nums[k];
			if (norj + nork > revi) {
				k--;
			} else if (norj + nork < revi) {
				j++;
			} else {
				res.push([nums[i], nums[j], nums[k]]);

				//   forbid duplicated numbers
				while (j + 1 < numlen && nums[j] === nums[j + 1]) j++;
				while (nums[k] === nums[k - 1]) k--;
				k--;
				j++;

			}
		}

		while (i + 1 < numlen && nums[i] === nums[i + 1]) i++;
	}

	return res;
};
