/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    if (nums.length < 2) return false;

    for (let index = 1; index < nums.length; index++) {
      if (nums[index] === nums[index-1]) return true;
    }

    return false;
};