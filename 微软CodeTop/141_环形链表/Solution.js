/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  if (!head) {
    return false
  }
  if (!head.next) return false
  let slow = new ListNode()
  let fast = new ListNode()
  fast = head.next
  slow = head

  while (fast != null) {
    if (fast == slow) {
      return true
    }
    if (!fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return false
}