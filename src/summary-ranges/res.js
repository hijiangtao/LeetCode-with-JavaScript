/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let len = nums.length;
  if (!len) return [];

  let res = [];
  let start = null, end = null;
  for (let i = 0; i < len; i++) {
    const e = nums[i];
    if (start === null) {
      start = nums[i];
      end = nums[i];
    } else if (e === end + 1) {
      end = e;
    } else {
      res.push(getResStr(start, end));
      start = e;
      end = e;
    }
  }

  if (!res.length || res[res.length-1] !== getResStr(start, end)) {
    res.push(getResStr(start, end));
  }

  return res;
};

const getResStr = (start, end) => {
  return start === end ? `${start}` : `${start}->${end === null ? start : end}`;
}