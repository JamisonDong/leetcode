/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let set = new Set()
    let temp = headA
    while (temp != null) {
        set.add(temp)
        temp = temp.next
    }
    let temp2 = headB
    while (temp2 !== null) {
        if (set.has(temp2)) {
            return temp2
        }
        temp2 = temp2.next
    }

    return null
};


var getIntersectionNode = function (headA, headB) {
    if(headA===null || headB===null){
        return null
    }
    let h1 = headA,h2 = headB
    while(h1!==h2){
        h1 = h1===null ? headB: h1.next
        h2 = h2===null ? headA: h2.next
    }
    return h1
};