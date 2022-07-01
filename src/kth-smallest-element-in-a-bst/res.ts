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

const getTreeList = (root: TreeNode | null): number[] => {
    if (!root) {
        return [];
    }

    const result = [];

    result.push(...getTreeList(root.left));
    result.push(root.val);
    result.push(...getTreeList(root.right));

    return result;
}

function kthSmallest(root: TreeNode | null, k: number): number {
    const result = getTreeList(root);

    return result[k-1];
};