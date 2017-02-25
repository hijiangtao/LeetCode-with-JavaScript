/**
 * Reverse a singly linked list.
 * 
 * res.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-25 21:12:51
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
 * @return {ListNode}
 */
let reverseList = function(head) {
    if (!head) {
        return head;
    }
    
    let res = new ListNode(head.val);
    
    while (head.next) {
        let temp = res;
        res = new ListNode(head.next.val);
        res.next = temp;
        head = head.next;
    }
    
    return res;
};