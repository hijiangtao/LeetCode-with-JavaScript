/**
 * Add Two Numbers
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-02-15 20:52:23
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
	let currentAddVal = l1.val+l2.val,
		res = new ListNode( currentAddVal % 10 ),
		increment = currentAddVal > 9 ? 1:0;

	if (l1.next !== null && l2.next !== null) {
		let nextl1 = ListNode(l1.next.val+increment);
		nextl1.next = l1.next.next;
		res.next = new ListNode(nextl1, l2.next)
	} else if (l1.next === null) {
		let nextl1 = new ListNode(increment);
		res.next = increment + addTwoNumbers(nextl1, l2.next)
		return res
	} else if (l2.next === null) {
		let nextl2 = new ListNode(increment);
		res.next = addTwoNumbers(nextl2, l1.next)
	} else if (increment) {
		res.next = new ListNode(increment);
	}

	return convertToArray(res);
};

let convertToArray = function(LN) {
	let res = []
	for (;;) {
		if (LN.next === null) {
			return res;
		} else {
			res.push(LN.val);
			LN = LN.next;
		}
	}
};