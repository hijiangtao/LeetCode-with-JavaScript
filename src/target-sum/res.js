/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-12 21:55:49
 * 
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
 * 
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 * 
 * Solution idea: https://discuss.leetcode.com/topic/76243/java-15-ms-c-3-ms-o-ns-iterative-dp-solution-using-subset-sum-with-explanation
 * 
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
let findTargetSumWays = function(nums, S) {
   let len = nums.length, 
        res = 0;
   
   for (let i=0; i<len; i++) {
       res += nums[i];
   }
   if ((res < S && res > -S) || (res+S) & 1) return 0;
   
   return count(nums, len, (res+S)>>>1);
};

/**
 * 计算子集存在满足等于 S 的情况数
 * @param  {[type]} nums 数组
 * @param  {[type]} len  数组长度
 * @param  {[type]} S    计算总和
 * @return {[type]}      [description]
 */
let count = function(nums, len, S) {
    let arr = new Array(S+1);
    arr[0] = 1;
    for (let i=1; i<=S; i++) {
        arr[i] = 0;
    }
    
    // 遍历 nums 更新 arr 数组
    for (let i=0; i<len; i++) {
        for (let j=S; j>=nums[i]; j--) {
            arr[j] += arr[j-nums[i]];
        }
    }
    
    return arr[S];
}