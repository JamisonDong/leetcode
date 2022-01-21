/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    let preHead = new ListNode(0)
    preHead.next = head
    let cur = preHead
    let stack = []
    while (cur.next !== null) {
        stack.push(cur.next.val)
        cur = cur.next
    }
    while (stack.length) {
        head.val = (stack.pop())
        head = head.next
    }
    return preHead.next
};

// 迭代
var reverseList = function (head) {
    let prev = null
    let curr = head
    while(curr){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

// 递归
/**
 * 
 */
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

