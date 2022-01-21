/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 给你一个链表的头节点 head 和一个整数 val ，
 * 请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 */
var removeElements = function (head, val) {
    const preHead = new ListNode(0);
    preHead.next = head
    let cur = preHead
    while (cur.next != null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return preHead.next
};

var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};
