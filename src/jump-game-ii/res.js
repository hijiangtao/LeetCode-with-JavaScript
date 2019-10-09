/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const len = nums.length;
  let end = 0;
  let step = 0;
  let furthestStep = 0;

  for (let index = 0; index < len-1; index++) {
    const element = nums[index];
    furthestStep = Math.max(furthestStep, index + element);
    
    if (index === end) {
      end = furthestStep;
      step++;
    }
  }

  return step;
};