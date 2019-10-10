const maxProfit = (prices) => {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = Number.MIN_SAFE_INTEGER;
  let dp_pre_i_0 = 0;
  for (let i = 0; i < n; i++) {
      let temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, dp_pre_i_0 - prices[i]);
      dp_pre_i_0 = temp;
  }
  return dp_i_0;
}