/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = 999999, max = -1;
  let res = 0;

  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    
    if (min > element) {
      min = element;
      max = -1;
    } else if (max < element) {
      max = element;
    }

    if (min !== 999999 && max !== -1) {
      res = Math.max(res, max - min);
    }
  }

  return res;
};

/**
 * DP 解法
 * @param {*} prices 
 */
var maxProfit_2 = (prices) => {
  if (prices.length < 2) return 0;

  let last = 0, max = 0;

  for (let i = 1; i < prices.length; i++) {
    last = Math.max(0, last + prices[i] - prices[i-1]);
    max = Math.max(last, max);
  }

  return max;
}