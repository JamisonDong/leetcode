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
var detectCycle = function (head) {
    while (head) {
        if (head.tag) {
            return head
        } else {
            head.tag = true
            head = head.next
        }
    }
    return null
};

var detectCycle = function (head) {
    let set = new Set()
    while (head) {
        if (set.has(head)) {
            return head
        } else {
            set.add(head)
            head = head.next
        }
    }
    return null
};

// 快慢指针
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};
