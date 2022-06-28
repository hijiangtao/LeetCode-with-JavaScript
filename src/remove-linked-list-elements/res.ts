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
 * 递归迭代均可，此法为迭代
 * @param head
 * @param val
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let result = head;
    let prevPointer = null;
    let currentPointer = head;

    if (!currentPointer) {
        return result?.val === val ? null : head;
    }

    while (currentPointer) {
        if (currentPointer.val === val) {
            if (prevPointer) {
                prevPointer.next = currentPointer.next;
            }  else {
                result = currentPointer.next;
            }
        } else {
            prevPointer = currentPointer;
        }

        currentPointer = currentPointer.next;
    }

    return result;
};