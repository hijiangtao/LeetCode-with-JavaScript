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
var levelOrder = function(root) {
  if (!root) return [];
  
  let queue = [root];
  const res = [];

  while(queue.length) {
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
    queue = tempQ;
    res.push(tempR);
  }

  return res;
};