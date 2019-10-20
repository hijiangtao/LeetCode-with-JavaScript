/**
 * 递归/动态规划/贪心
 * 解题思路 https://leetcode-cn.com/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode/
 * @param {number[]} nums
 * @return {boolean}
 */

 /**
  * 贪心：从右向左迭代，对于每个节点我们检查是否存在一步跳跃可以到达 GOOD 的位置（currPosition + nums[currPosition] >= leftmostGoodIndex）。如果可以到达，当前位置也标记为 GOOD ，同时，这个位置将成为新的最左边的 GOOD 位置，一直重复到数组的开头，如果第一个坐标标记为 GOOD 意味着可以从第一个位置跳到最后的位置。
  * @param {*} nums 
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

/**
 * 回溯法：从第一个位置开始，模拟所有可以跳到的位置，然后从当前位置重复上述操作，当没有办法继续跳的时候，就回溯。
 * @param {*} nums 
 */
const canJump = (nums) => {
  const jumpAnalysis = (index) => {
    if (index === nums.length-1) return true;
    
    const maxLen = Math.min(index + nums[index], nums.length-1);
    for (let i = index + 1; i <= maxLen; i++) {
      if (jumpAnalysis(i)) return true;
    }
    return false;
  }

  return jumpAnalysis(0);
}

/**
 * 动态规划：自顶向下
 * @param {*} nums 
 */
const canJump = (nums) => {
  const mem = nums.map(() => -1);
  mem[nums.length - 1] = 1;

  const jumpAnalysis = (index) => {
    // 当前元素位置如果已经计算过则返回结果
    if (mem[index] !== -1) {
      return mem[index] === 1 ? true : false;
    }

    // 未计算的位置根据可走步数更新 mem
    const maxLen = Math.min(index + nums[index], nums.length-1);
    for (let i = index + 1; i <= maxLen; i++) {
      // 如果当前位置已可以跳到结果那么提前结束返回结果
      if (jumpAnalysis(i)) {
        mem[i] = 1;
        return true;
      }
    }

    // 标定当前位置无用
    mem[index] = 0;
    return false;
  }

  return jumpAnalysis(0);
}

/**
 * 动态规划：自底向上
 * @param {*} nums 
 */
const canJump = (nums) => {
  const len = nums.length;
  if (!len) return false;
  if (len === 1) return true;
  const mem = nums.map(() => 0);
  mem[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    const maxLen = Math.min(i + nums[i], nums.length-1);
    for (let j = i+1; j <= maxLen; j++) {
      if (mem[j]) {
        mem[i] = 1;
        break;
      }
    }
  }

  return mem[0] === 1;
}

