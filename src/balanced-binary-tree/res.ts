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

function getTreeLength(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        return 1 + Math.max(getTreeLength(root.left), getTreeLength(root.right));
    }
}

/**
 * 自上而下递归
 *
 * 时间复杂度：O(n^2)，其中 n 是二叉树中的节点个数。
 * 最坏情况下，二叉树是满二叉树，需要遍历二叉树中的所有节点，时间复杂度是 O(n)。
 * 对于节点 p，如果它的高度是 d，则 height(p) 最多会被调用 d 次（即遍历到它的每一个祖先节点时）。对于平均的情况，一棵树的高度 h 满足 O(h)=O(logn)，因为 d≤h，所以总时间复杂度为 O(nlogn)。对于最坏的情况，二叉树形成链式结构，高度为 O(n)，此时总时间复杂度为 O(n^2)。
 *
 * 空间复杂度：O(n)，其中 n 是二叉树中的节点个数。空间复杂度主要取决于递归调用的层数，递归调用的层数不会超过 n。
 * @param root
 */
function isBalanced(root: TreeNode | null): boolean {
    if (!root || !root.left && !root.right) {
        return true;
    } else {
        return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getTreeLength(root.left) - getTreeLength(root.right)) <= 1;
    }
};

function getBalancedLength(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        const leftLength = getBalancedLength(root.left);
        const rightLength = getBalancedLength(root.right);

        if (leftLength < 0 || rightLength < 0 || Math.abs(leftLength - rightLength) > 1) {
            return -1;
        } else {
            return Math.max(leftLength, rightLength) + 1;
        }
    }
}

/**
 * 自底向上的递归
 *
 * 复杂度均为 O(n)
 * @param root
 */
function isBalanced2(root: TreeNode | null): boolean {
    if (!root || !root.left && !root.right) {
        return true;
    } else {
        return getBalancedLength(root) >= 0;
    }
};