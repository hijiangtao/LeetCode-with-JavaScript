/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const len = nums.length;
  const target = len - k;
  let left = 0, right = len-1;

  const swap = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  const partition = (start, end) => {
    const pivot = nums[left];
    let lindex = left;

    for (let i = left+1; i <= end; i++) {
      const element = nums[i];
      if (element < pivot) {
        swap(++lindex, i);
      }
    }

    swap(lindex, left);
    return lindex;
  }

  while(true) {
    let index = partition(left, right);
    if (index === target) {
      return nums[index];
    } else if (index < target) {
      left = index+1;
    } else {
      right = index-1;
    }
  }
};