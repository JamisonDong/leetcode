/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let pre = head
    let cur = head
    while (k > 0) {
        cur = cur.next
        k--
    }
    while (cur !== null) {
        pre = pre.next
        cur = cur.next
    }

    return pre
};