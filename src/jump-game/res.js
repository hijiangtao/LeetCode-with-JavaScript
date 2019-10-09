/**
 * 递归/动态规划/贪心
 * 解题思路 https://leetcode-cn.com/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let lastPos = nums.length - 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    const element = nums[index];
    if (index + element >= lastPos) {
      lastPos = index;
    }
  }

  return lastPos === 0;
};