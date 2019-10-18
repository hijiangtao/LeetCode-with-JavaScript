/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  
  const getDepthNodes = (queue) => {
    const tempQ = [];
    const tempR = [];
    queue.map(e => {
      if (e.val !== undefined) tempR.push(e.val);

      if (e.left) {
        tempQ.push(e.left);
      }
      if (e.right) {
        tempQ.push(e.right);
      }
    });

    if (tempQ.length) {
      return getDepthNodes(tempQ).concat([tempR]);
    } else {
      return [tempR];
    }
  }

  return getDepthNodes([root]);
};