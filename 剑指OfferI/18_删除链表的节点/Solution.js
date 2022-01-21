/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val === val) {
        return head.next
    }
    let pre = new ListNode()
    let cur = head
    while (cur != null) {
        if (cur.val === val) {
            pre.next = cur.next
        }
        pre = cur
        cur = cur.next
    }
    return head
};
const deleteNode = (head, val) => {
    // 定义虚拟节点
    const res = new ListNode(-1);
    // 虚拟节点连接到head
    res.next = head;
    // 定义p指针，最开始指向虚拟节点
    let p = res;
    // 遍历链表
    while (p?.next) {
        // 如果下一个值等于val，则删除下一个值
        if (p.next.val === val) p.next = p.next.next;
        p = p.next;
    }
    return res.next;
};


