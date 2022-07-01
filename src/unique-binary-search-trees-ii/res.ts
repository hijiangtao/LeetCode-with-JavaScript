/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getTrees(nums: number[]): Array<TreeNode | null> {
    if (!nums.length) {
        return [null];
    }
    
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const currentVal = nums[i];

        const leftTrees = getTrees(nums.slice(0, i));
        const rightTrees = getTrees(nums.slice(i + 1));

        for (let j = 0; j < leftTrees.length; j++) {
            for (let k = 0; k < rightTrees.length; k++) {
                const rootNode = new TreeNode(currentVal);
                rootNode.left = leftTrees[j];
                rootNode.right = rightTrees[k];
                result.push(rootNode);
            }
        }
    }

    return result.filter(Boolean);
}

function generateTrees(n: number): Array<TreeNode | null> {
    const nums = new Array(n).fill(0).map((_, i) => i + 1);
    
    return getTrees(nums);
};