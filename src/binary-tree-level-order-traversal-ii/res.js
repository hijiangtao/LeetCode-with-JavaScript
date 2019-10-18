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
var minDepth = function(root) {
  if (!root) return 0;
  
  let queue = [root];
  let res = 1;

  while(queue.length) {
    const tempQ = [];
    let isNull = false;
      
    queue.map(e => {
      if (!e.left && !e.right) isNull = true;

      e.left && tempQ.push(e.left);
      e.right && tempQ.push(e.right);
    });
    queue = tempQ;
    if (isNull) {
      break;
    } else {
      res += 1;
    }
  }

  return res;
};