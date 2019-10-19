/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const len = nums.length;
  if (!len) return null;

  const treeNode = (left, right) => {
    if (left > right) return null;
    const mid = (left + right) >> 1;

    const node = {
      val: nums[mid]
    };

    node.left = treeNode(left, mid - 1);
    node.right = treeNode(mid+1, right);
      
    return node;
  }

  return treeNode(0, len-1);
};