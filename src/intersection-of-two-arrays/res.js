/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const num1set = new Set(nums1);
  const num2set = new Set(nums2);
  const res = [];

  num1set.forEach(e => num2set.has(e) ? res.push(e) : null);

  return res;
};