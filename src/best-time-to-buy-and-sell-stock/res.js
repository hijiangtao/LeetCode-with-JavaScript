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