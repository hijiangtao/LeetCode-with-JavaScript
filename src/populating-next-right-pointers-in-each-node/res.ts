// @ts-nocheck

/**
 * Definition for Node.
 */
class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

function connect(root: Node | null): Node | null {
    if (!root) {
        return root;
    }

    if (!root.left && !root.right) {
        root.next = null;
        return root;
    }

    let queues = [root];
    while (queues.length) {
        const currentLevel = queues.slice();
        queues = [];

        for (let i=0; i<currentLevel.length; i++) {
            if (currentLevel[i].left) {
                queues.push(currentLevel[i].left);
            }
            if (currentLevel[i].right) {
                queues.push(currentLevel[i].right);
            }

            currentLevel[i].next = currentLevel[i+1] ?? null;
        }
    }

    return root;
};