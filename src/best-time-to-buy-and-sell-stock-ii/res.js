/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = 999999, max = -1;
  let res = 0;

  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    
    if (index === 0 || element < max || min > element) {
      if (min !== 999999 && max !== -1) {
        res += (max - min);
      }

      min = element;
      max = -1;
    } else if (max < element) {
      max = element;
    }
  }

  if (min !== 999999 && max !== -1) {
    res += (max - min);
  }
  
  return res;
};