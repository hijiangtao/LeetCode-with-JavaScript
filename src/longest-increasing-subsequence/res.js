/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length;
  if (len < 2) return len;

  const res = nums.map(() => 1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        res[i] = Math.max(res[i], res[j]+1);
      }
    }
  }

  let max = res[0];
  res.map(e => e > max ? max=e:null);
  return max;
};

const lengthOfLIS_2 = (nums) => {
  let tails = nums.map(() => 0), res = 0;

  nums.map((num) => {
    let i = 0, j = res;

    while (i<j) {
      const m = (i+j) >> 1;
      if (tails[m] < num) {
        i = m+1;
      } else {
        j = m;
      }
    }

    tails[i] = num;
    if (j === res) {
      res += 1;
    }
  });

  return res;
}