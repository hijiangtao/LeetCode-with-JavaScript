/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        return 1;
    }

    if (root.left && root.right) {
        return Math.min(minDepth(root.left), minDepth((root.right))) + 1;
    } else {
        return Math.max(minDepth(root.left), minDepth((root.right))) + 1;
    }
};