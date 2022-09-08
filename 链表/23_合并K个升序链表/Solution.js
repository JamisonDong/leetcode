/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeft(idx) {
    return idx * 2 + 1;
  }

  getRight(idx) {
    return idx * 2 + 2;
  }

  insert(node) {
    this.heap.push(node);
    if (this.heap.length === 1) return;
    let idx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(idx);
    while (this.heap[parentIdx].val >= this.heap[idx].val) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[idx];
      this.heap[idx] = temp;
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
      if (parentIdx < 0) return;
    }
  }

  removeTop() {
    const head = this.heap[0];
    const end = this.heap.pop();
    if (!this.heap.length) return end;
    this.heap[0] = end;
    let parentIdx = 0;
    let leftIdx = this.getLeft(parentIdx);
    let rightIdx = this.getRight(parentIdx);
    let idx = leftIdx < this.size() ? leftIdx : -1;
    if (rightIdx < this.size()) {
      idx =
        this.heap[leftIdx].val < this.heap[rightIdx].val ? leftIdx : rightIdx;
    }
    if (idx === -1) return head;
    while (this.heap[parentIdx].val >= this.heap[idx].val) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[idx];
      this.heap[idx] = temp;
      parentIdx = idx;
      leftIdx = this.getLeft(parentIdx);
      rightIdx = this.getRight(parentIdx);
      idx = leftIdx < this.size() ? leftIdx : -1;
      if (rightIdx < this.size()) {
        idx =
          this.heap[leftIdx].val < this.heap[rightIdx].val ? leftIdx : rightIdx;
      }
      if (idx === -1) return head;
    }
    return head;
  }

  size() {
    return this.heap.length;
  }
}

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const heap = new Heap();
  let dummyNode = new ListNode(-1);
  let cur = dummyNode;
  for (let i = 0; i < lists.length; i++) {
    !!lists[i] && heap.insert(lists[i]);
  }
  while (heap.size()) {
    const node = heap.removeTop();
    cur.next = node;
    cur = cur.next;
    if (node.next) {
      heap.insert(node.next);
    }
  }
  return dummyNode.next;
};
