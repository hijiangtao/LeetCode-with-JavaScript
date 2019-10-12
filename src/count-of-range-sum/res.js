/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  const len = nums.length;
  const v = [0];

  for (let i = 0; i < len; i++) {
    v.push(v[i] + nums[i]);
  }
  let raw_nums = v.slice();
  const copy_nums = v.slice();
  // console.log(v)

  const merge_sort = (lo, hi, lower, upper) => {
    if (hi - lo <= 1) return 0;

    let mid = lo + parseInt((hi - lo) / 2);
    let count = merge_sort(lo, mid, lower, upper) + merge_sort(mid, hi, lower, upper);
    let right1 = mid, right2 = mid;

    for (let left = lo; left < mid; left++) {
      while (right1 != hi && raw_nums[right1] - raw_nums[left] < lower) right1++;
      while (right2 != hi && raw_nums[right2] - raw_nums[left] <= upper) right2++;

      count += right2 - right1;
    }

    // console.log('----', lo, mid, hi)
    // merge
    let index = lo;
    let li = lo, ri = mid;
    while (index < hi) {
      // console.log(li, ri, 'index is', index)
      if (li === mid) {
        copy_nums[index] = raw_nums[ri++];
      } else if (ri === hi) {
        copy_nums[index] = raw_nums[li++];
      } else if (raw_nums[li] < raw_nums[ri]) {
        copy_nums[index] = raw_nums[li++];
      } else {
        copy_nums[index] = raw_nums[ri++];
      }
      index++;
      // console.log(copy_nums)
    }
    // console.log(copy_nums);
    raw_nums = copy_nums.slice();
    
    // console.log(count);
    return count;
  }

  return merge_sort(0, v.length, lower, upper);
};
