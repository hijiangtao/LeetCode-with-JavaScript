/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_tank = 0, curr_tank = 0;
    let flag = 0;
    
    for (let index = 0; index < gas.length; index++) {
      const remain = gas[index] - cost[index];
      
      total_tank += remain;
      if (curr_tank + remain < 0) {
        flag = index+1;
        curr_tank = 0;
      } else {
        curr_tank += remain;
      }

    }

    if (total_tank < 0) return -1;

    return flag;
};