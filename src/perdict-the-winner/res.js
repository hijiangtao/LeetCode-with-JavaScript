/**
 * res.js
 * @param {number[]} nums
 * @return {boolean}
 */
let PredictTheWinner = function (nums) {
    let len = nums.length,
        res = new Array(len).fill([]);

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (i == j) res[i] = nums[i];
            else res[j] = Math.max(nums[i] - res[j], nums[j] - res[j - 1]);
        }
    }

    return res[len - 1] >= 0;
};

// Solution 2: tranditional way
// let PredictTheWinner = function(nums) {
//     let len = nums.length,
//         res = [];

//     for (let i=0; i<len; i++) {
//         res.push(new Array(len));
//     }

//     if (helper(nums, 0, len-1, res) >= 0) return true;
//     else return false;
// };

// let helper = function(nums, start, end, res) {
//     if (start === end) 
//         res[start][end] = nums[start];
//     else 
//         res[start][end] = Math.max(nums[start]-helper(nums, start+1, end, res), nums[end]-helper(nums, start, end-1, res));

//     return res[start][end];
// }