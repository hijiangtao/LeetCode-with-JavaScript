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

/**
 * 一次遍历
 * @param {*} prices 
 */
var maxProfit = function(prices) {
  const len = prices.length;
  if (len < 2) return 0;
  let res = 0;

  for (let i = 1; i < len; i++) {
    const temp = prices[i] - prices[i-1];
    if (temp > 0) {
      res += temp;
    }
  }

  return res;
}

/**
 * 找到每次单调进行处理
 * @param {*} prices 
 */
var maxProfit = function(prices) {
  const len = prices.length;
  if (len < 2) return 0;
  let res = 0;
  let peak = prices[0], valley = prices[0];
  
  let i = 1;
  while (i < len) {
    while (i < len && prices[i] - prices[i-1] <= 0) {
      i++;
    }
    valley = prices[i-1];
    while (i < len && prices[i] - prices[i-1] >= 0) {
      i++;
    }
    peak = prices[i-1];
    res += peak - valley;
  }

  return res;
}
