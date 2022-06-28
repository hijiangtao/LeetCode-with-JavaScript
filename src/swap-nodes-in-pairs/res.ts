/**
 * Definition for singly-linked list.
 */
// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 迭代法或者递归法均可实现，本实现为迭代法
 */
function swapPairs(head: ListNode | null): ListNode | null {
    if (!head?.next) {
        return head;
    }

    const result = head.next;
    let prevPoint = null;
    let currentPoint: ListNode | null = head;
    while (currentPoint) {
        const nextPoint = currentPoint.next;
        const restPoint = nextPoint?.next as ListNode | null;

        if (nextPoint) {
            currentPoint.next = restPoint;
            nextPoint.next = currentPoint;
            if (prevPoint) {
                prevPoint.next = nextPoint;
            }
            prevPoint = currentPoint;
            currentPoint = restPoint;
        } else {
            break;
        }
    }

    return result;
};

/**
 * 递归法
 * @param head
 */
function swapPairs2(head: ListNode | null): ListNode | null {
    if (!head?.next) {
        return head;
    }

    const result = head.next;
    head.next = swapPairs(result.next);
    result.next = head;
    return result;
}