/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-17 09:40:45
 * 
 * Solution: https://discuss.leetcode.com/topic/1978/a-n-2-solution-can-we-do-better/2
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    let len = nums.length;

    if (len < 3) {
        return nums.reduce(reduceArray, 0);
    }
    nums.sort(compareNumbers);

    function compareNumbers(a, b) {
        return a - b;
    }

    function reduceArray(a, b) {
        return a + b;
    }

    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < len - 2; i++) {
        let j = i + 1,
            k = len - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(res - target) > Math.abs(sum - target)) {
                if (sum === target) return target;
                res = sum;
            }

            if (sum > target) {
                k--;
            } else {
                j++;
            }
        }
    }

    return res;
};
