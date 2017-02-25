// Given a linked list, remove the nth node from the end of list and return its head.

// For example,

//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.

/**
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-25 18:17:02
 * @version $Id$
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    let fast = head,
        slow = head;
    
    for (let i=0; i<n; i++) {
        fast = fast.next;
    }
    
    if (!fast) {
        return head.next;
    }
    
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return head;
};