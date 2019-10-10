/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numMap = {};
  let longest = 0;

  nums.forEach(e => numMap[e] = true);

  nums.forEach(e => {
    if (!numMap[e-1]) {
      let curNum = e;
      let curLen = 1;

      while(numMap[curNum+1]) {
        curNum++;
        curLen++;
      }

      if (curLen > longest) {
        longest = curLen;
      }
    }
  });

  return longest;
};