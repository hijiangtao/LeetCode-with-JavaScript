/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const len = height.length;
  if (len < 3) return 0;
  
  const max_left = [height[0]];
  let max_right = [height[len-1]];
  let res = 0;

  for (let i = 1; i < len; i++) {
    max_left[i] = Math.max(height[i], max_left[i-1]);
  }
  for (let i = len - 2; i >= 0; i--) {
    max_right = [Math.max(height[i], max_right[0])].concat(max_right);
  }

  for (let i = 1; i < len-1; i++) {
    const min = Math.min(max_left[i], max_right[i]);
    if (min > height[i]) {
      res += (min - height[i]);
    }
  }

  return res;
};