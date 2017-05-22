/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-22 22:23:17
 * @version $Id$
 */

/**
 * Solution 1: https://discuss.leetcode.com/topic/43166/java-o-n-easy-to-understand-solution-easily-extended-to-any-times-of-occurance
 * Solution 2: https://discuss.leetcode.com/topic/2031/challenge-me-thx/5
 * Solution 3: https://discuss.leetcode.com/topic/2926/accepted-code-with-proper-explaination-does-anyone-have-a-better-idea/4
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let len = nums.length,
        ans = 0;

    for (let i = 0; i < 32; i++) {
        let tmp = 0;

        for (let j = 0; j < len; j++) {
            if ((nums[j] >> i) & 1 === 1) {
                tmp++;
            }
        }

        tmp %= 3;
        if (tmp) {
            ans |= tmp << i;
        }
    }

    return ans;
};

// let singleNumber = function(nums) {
//     let ones = 0, twos = 0;
//     for(let i = 0; i < nums.length; i++){
//         ones = (ones ^ nums[i]) & ~twos;
//         twos = (twos ^ nums[i]) & ~ones;
//     }
//     return ones;
// };
