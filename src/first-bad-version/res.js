/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (n < 2) return n;

    let left = 1, right = n;
    
    while (left < right) {
      const mid = parseInt((left + right) / 2);

      if(isBadVersion(mid)) { // 在左边
        right = mid;
      } else { // 在右边
        left = mid + 1;
      }
    }

    return right;
  };
};