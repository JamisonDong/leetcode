function ListNode(val, next) {
    this.val = (val === undefined) ? undefined : val
    this.next = (next === undefined) ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
    let count = 0
    let cur = head
    while (cur !== null && count !== k) {
        cur = cur.next
        count++
    }
    if(count === k){
        cur = reverseKGroup(cur, k)
        // 翻转链表
        while(count!==0){
            count--
            let temp = head.next
            head.next = cur
            cur = head
            head = temp
        }
        head = cur
    }
    return head
}