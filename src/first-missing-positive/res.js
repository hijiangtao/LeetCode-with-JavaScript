/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const arrLen = nums.length;
    const newArray = new Array(arrLen);

    for (let index = 0; index < arrLen; index++) {
      const element = nums[index];
      
      if (element > 0 && element <= arrLen) {
        (newArray[element-1] > 0 ? newArray[element-1] += 1 : newArray[element-1] = 1);
      }
    }

    let i = 0;
    while (newArray[i] && i<arrLen) {
      i++;
    };

    return i+1;
};