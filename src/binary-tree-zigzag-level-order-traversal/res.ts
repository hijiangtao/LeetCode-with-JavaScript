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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result = [];
    let queues = [root];
    let reverse = true;

    if (!root) {
        return result;
    }

    while (queues.length) {
        const currentLevel = queues.slice();
        const currentLevelList = [];
        queues = [];
        reverse = !reverse;

        for (let i = 0; i < currentLevel.length; i++) {
            const currentNode = currentLevel[i];
            currentLevelList.push(currentNode.val);

            if (currentNode.left) {
                queues.push(currentNode.left);
            }
            if (currentNode.right) {
                queues.push(currentNode.right);
            }
        }

        result.push(reverse ? currentLevelList.reverse() : currentLevelList);
    }

    return result;
};