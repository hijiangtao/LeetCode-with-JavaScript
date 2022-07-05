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

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    const dumpyHead = new ListNode(0);
    let lastSortedNode = head;
    dumpyHead.next = head;

    while (lastSortedNode?.next) {
        const nextNode = lastSortedNode.next;
        if (nextNode.val >= lastSortedNode.val) {
            lastSortedNode = nextNode;
        } else {
            let currentIterateNode = dumpyHead;
            while (currentIterateNode.next && currentIterateNode.next.val < nextNode.val) {
                currentIterateNode = currentIterateNode.next;
            }

            // link
            lastSortedNode.next = nextNode.next;

            // swap
            const swapNode = currentIterateNode.next;
            currentIterateNode.next = nextNode;
            nextNode.next = swapNode;
            lastSortedNode = swapNode as ListNode;
        }
    }

    return dumpyHead.next;
};