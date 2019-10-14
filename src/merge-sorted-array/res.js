/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (n) {
    let mIndex = m-1, nIndex = n-1;
    let curIndex = nums1.length-1;

    while (curIndex >= 0) {
      if (mIndex < 0) {
        nums1[curIndex--] = nums2[nIndex--];
      } else if (nIndex < 0) {
        break;
      } else if (nums1[mIndex] < nums2[nIndex]) {
        nums1[curIndex--] = nums2[nIndex--];
      } else {
        nums1[curIndex--] = nums1[mIndex--];
      }
    }
  }
};