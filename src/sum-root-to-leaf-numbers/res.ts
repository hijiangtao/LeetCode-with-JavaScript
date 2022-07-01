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

function sumNumbers(root: TreeNode | null): number {
    const result: number[][] = [];

    const dfs = (root: TreeNode | null, nums: number[]) => {
        if (!root) {
            return ;
        }

        if (!root.left && !root.right) {
            result.push([...nums, root.val]);
            return ;
        }

        dfs(root.left, [...nums, root.val]);
        dfs(root.right, [...nums, root.val]);
    }

    dfs(root, []);

    return result.map(item => parseInt(item.join(''))).reduce((a, b) => a + b);
};