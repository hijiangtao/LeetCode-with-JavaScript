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
 * 递归
 * @param root
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    if (!root) {
        return result;
    }

    if (root.left) {
        result.push(...inorderTraversal(root.left));
    }
    result.push(root.val);
    if (root.right) {
        result.push(...inorderTraversal(root.right));
    }

    return result;
};

/**
 * 迭代
 * @param root
 */
function inorderTraversal2(root: TreeNode | null): number[] {
    const result: number[] = [];

    if (!root) {
        return result;
    }

    const nodes = [];

    let currentPointer = root;
    while(nodes.length || currentPointer) {
        // left
        while (currentPointer) {
            nodes.push(currentPointer);
            currentPointer = currentPointer.left;
        }
        const singleNode = nodes.pop();
        result.push(singleNode.val);

        // right
        currentPointer = singleNode.right;
    }

    return result;
};