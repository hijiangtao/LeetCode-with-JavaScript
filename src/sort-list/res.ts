/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function merge(start: ListNode | null, end: ListNode | null): ListNode | null {
    let result: ListNode | null = new ListNode(0);
    let resultPoint = result;
    while (start && end) {
        if (start.val > end.val) {
            resultPoint.next = end;
            end = end.next;
        } else {
            resultPoint.next = start;
            start = start.next;
        }

        resultPoint = resultPoint.next;
    }

    if (start) {
        resultPoint.next = start;
    } else {
        resultPoint.next = end;
    }

    return result.next;
}

function sortWithRange(start: ListNode | null, end: ListNode | null): ListNode | null {
    if (!start) {
        return start;
    }
    if (start.next === end) {
        start.next = null;
        return start;
    }

    let midPoint: ListNode | null = start;
    let endPoint: ListNode | null = start;
    while(endPoint !== end) {
        midPoint = midPoint?.next;
        endPoint = endPoint?.next;

        if (endPoint !== end) {
            endPoint = endPoint?.next;
        }
    }

    const leftNode = sortWithRange(start, midPoint);
    const rightNode = sortWithRange(midPoint, end);

    return merge(leftNode, rightNode);
}

function sortList(head: ListNode | null): ListNode | null {
    return sortWithRange(head, null);
};