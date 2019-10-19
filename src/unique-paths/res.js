/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        list[i][j] = 1;
      } else {
        list[i][j] = Math.max(list[i-1][j] + list[i][j-1]);
      }
    }
  }

  return list[n-1][m-1];
};