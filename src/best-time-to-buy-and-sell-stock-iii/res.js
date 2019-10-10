/**
 * dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 * dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
 * 解释：第 i 天选择 buy 的时候，要从 i-2 的状态转移，而不是 i-1 。
 * 查看 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/yi-ge-tong-yong-fang-fa-tuan-mie-6-dao-gu-piao-wen/
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const max_k = 2;
  const len = prices.length;

  if (!len) return 0;

  let dp = [];
  for (let i = 0; i < len; i++) {
    dp.push([]);
    for (let j = 0; j < max_k+1; j++) {
      dp[i][j] = [0, Number.MIN_SAFE_INTEGER];
    }
  }
  
  for (let i = 0; i < len; i++) {
    for (let k = max_k; k >= 1; k--) { 
      if (i === 0) {
        dp[i][k] = [0, -prices[i]];
      } else {
        dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
        dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
      }
    }
  }

  return dp[len-1][max_k][0];
};