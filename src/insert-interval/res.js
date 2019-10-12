/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const len = intervals.length;
  if (!len) return [newInterval];
  const [start, end] = newInterval;
  const new_itervals = [];
  
  let i = 0;
  while (i < len && start > intervals[i][0]) {
    new_itervals.push(intervals[i]);
    i++;
  }

  new_itervals.push(newInterval);
  while (i < len) {
    new_itervals.push(intervals[i]);
    i++;
  }

  console.log(new_itervals);
  res = [];
  i = 0;
  while (i < len+1) {
    let [left, right] = new_itervals[i];
    while (i < len && new_itervals[i+1][0] <= right) {
      i += 1;
      right = Math.max(new_itervals[i][1], right);
    }
    res.push([left, right]);
    i += 1;
  }

  return res;

};
