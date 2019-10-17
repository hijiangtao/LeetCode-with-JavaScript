/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const len = nums.length;

  if(nums[0] === nums[len-1]) {
    if (nums[0] === target) return true;
    else {
      let index = false;
      nums.map((e, i) => {
        if (e === target) index = i;
      });
      if (index) return true;
    }
  } else {
    return subsearch(nums, target);
  }

  return false;
};

const subsearch = (nums, target) => {
  let lo = 0, hi = nums.length - 1;

    while (lo < hi) {
        let mid = (lo + hi) >> 1;

        if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
            lo = mid + 1;
        } else if (target < nums[0] && target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return lo == hi && nums[lo] == target;
}