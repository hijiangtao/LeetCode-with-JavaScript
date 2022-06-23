/**
 * @param {number[]} nums
 * @return {boolean}
 */
let PredictTheWinner = function(nums) {
    let len = nums.length,
        res = new Array(len).fill([]);

    for (let i=len-1; i>=0; i--) {
        for (let j=i; j<len; j++) {
            if (i==j) res[i] = nums[i];
            else res[j] = Math.max(nums[i]-res[j], nums[j]-res[j-1]);
        }
    }

    return res[len-1] >= 0;
};

