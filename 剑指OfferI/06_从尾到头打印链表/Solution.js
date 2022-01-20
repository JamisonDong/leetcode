/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let res = []
    while (head) {
        res.push(head.val)
        head = head.next
    }
    res.reverse()
    return res
};

// 递归
var reversePrint = function (head, res = []) {
    if(head!=null){
        if(head.next!=null){
            reversePrint(head.next, res)
        }
        res.push(head.val)
    }

    return res
};