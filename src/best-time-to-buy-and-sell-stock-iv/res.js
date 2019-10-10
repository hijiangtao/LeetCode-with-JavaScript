/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const max_k = k;
  const len = prices.length;

  if (!len) return 0;
  if (max_k > len / 2) {
    return maxProfit_Infinite(prices);
  }

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

const maxProfit_Infinite = (prices) => {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
      let temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
  }
  return dp_i_0;
}