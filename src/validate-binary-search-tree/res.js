/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;

  const validSubBST = (element, low, high) => {
    if (low !== null && low >= element.val) return false;
    if (high !== null && high <= element.val) return false;
    if (!element.left && !element.right) return true;
    
    if (element.left && !validSubBST(element.left, low, element.val)) return false;
    if (element.right && !validSubBST(element.right, element.val, high)) return false;
    
    return true;
  }

  return validSubBST(root, null, null);
};