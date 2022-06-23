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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) {
        return ;
    }

    const right = root.right;

    // 左子树
    if (root.left) {
        flatten(root.left);

        // flatten 后根结点
        let currentNode = root.left;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        // 转移结构
        root.right = root.left;
        currentNode.right = right;
        root.left = null;
    }

    if (right) {
        flatten(right);
    }
};