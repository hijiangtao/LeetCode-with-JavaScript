/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  if (!root) return 0;
  let compRes = 0;

  const getMaxPath = (ele) => {
    if (ele == null) return 0;

    const val = ele.val;
    let left = 0;
    let right = 0;
    let tl = getMaxPath(ele.left);
    let tr = getMaxPath(ele.right);
    
    if (ele.left !== null && ele.left.val === val) {
      left = tl + 1;
    }
    if (ele.right !== null && ele.right.val === val) {
      right = tr + 1;
    }

    compRes = Math.max(compRes, left + right);
    return Math.max(left, right);
  }

  getMaxPath(root);
  return compRes;
};
