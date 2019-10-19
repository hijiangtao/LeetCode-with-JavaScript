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
var maxDepth = function(root) {
  if (!root) return 0;

  const getTreeDepth = (element) => {
    if (!element) return 0;
    if (element.val !== undefined && !element.left && !element.right) return 1;

    return 1 + Math.max(getTreeDepth(element.left), getTreeDepth(element.right))
  }

  return 1 + Math.max(getTreeDepth(root.left), getTreeDepth(root.right));
};