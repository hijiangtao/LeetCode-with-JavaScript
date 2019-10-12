/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0]-b[0]);
  const len = intervals.length;
  
  res = [];
  i = 0;
  while (i < len) {
    let [left, right] = intervals[i];
    while (i < len-1 && intervals[i+1][0] <= right) {
      i += 1;
      right = Math.max(intervals[i][1], right);
    }
    res.push([left, right]);
    i += 1;
  }

  return res;

};
