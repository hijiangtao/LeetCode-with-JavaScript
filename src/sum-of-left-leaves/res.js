// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-19 10:13:41
 * @version $Id$
 */

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
let sumOfLeftLeaves = function(root) {
    // Deal with the first root value
    if (!root || root.val===null || (!root.left && !root.right)) {
    	return 0;
    }

    let leftlefVal = 0, rightlefVal = 0;
    if (root.left) {
    	if (!root.left.left && !root.left.right) {
    		leftlefVal = root.left.val;
    	} else {
    		leftlefVal = sumOfLeftLeaves(root.left);
    	}
    }

    if (root.right) {
    	if (!root.right.left && !root.right.right) {
    		rightlefVal = 0;
    	} else {
    		rightlefVal = sumOfLeftLeaves(root.right);
    	}
    }

    return leftlefVal + rightlefVal;
};