/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!amount) return 0;
  const mem = [];
  for (let i = 0; i <= amount; i++) {
    mem.push(-2);
  }

  const getMaxVal = function(cList, remain) {
    if (remain == 0) return 0;
    if (mem[remain] != -2) return mem[remain];
    let ans = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < cList.length; i++) {
      const ele = cList[i];
      
      if (remain - ele < 0) continue;
      const sub = getMaxVal(cList, remain-ele);

      if (sub === -1) continue;
      ans = Math.min(ans, sub+1);
    }
    
    mem[remain] = ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
    return mem[remain];
  }

  getMaxVal(coins, amount);

  return mem[amount];
};

/**
 * DP 解法二
 * @param {*} coins 
 * @param {*} amount 
 */
var coinChange = function(coins, amount) {
  if (!amount) return 0;
  const dp = [0];

  for (let i = 0; i <= amount; i++) {
    i && dp.push(amount+1);
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i-coin]+1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
