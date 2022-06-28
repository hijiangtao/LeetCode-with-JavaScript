/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head?.next?.next) {
        return ;
    }

    let prevTailNode = head;
    let tailNode = head;
    while (tailNode.next) {
        prevTailNode = tailNode;
        tailNode = tailNode.next;
    }

    const restNodes = head.next;
    prevTailNode.next = null;
    head.next = tailNode;
    tailNode.next = restNodes;
    reorderList(restNodes);

    return ;
};