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
// 迭代
var reverseList = function (head) {
    let pre = null
    let cur = head
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    return pre
};

// 递归
var reverseList = function (head) {
    if(head==null||head.next==null){
        return head
    }
    const newHead = reverseList(head.next)
    head.next.next = head
    head.next = null

    return newHead
};
