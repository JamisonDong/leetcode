class ListNode {
    constructor(val, next) {
        this.val = val || null;
        this.next = next || null;
    }
}

var MyLinkedList = function () {
    this._size = 0;
    this._head = null;
    this._tail = null;
};

/** 
 * @param {number} index
 * @return {ListNode}
 */
MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this._size) return null;
    let cur = new ListNode(0, this._head);
    while (index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    const node = this.getNode(index);
    if (node) {
        return node.val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val, this._head);
    this._head = node;
    this._size++;
    if (!this._tail) {
        this._tail = node
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val, null);
    this._size++;
    if (this._tail) {
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._tail = node;
    this._head = node;

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this._size) return;
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this._size) {
        this.addAtTail(val);
        return;
    }
    const pre = this.getNode(index - 1);
    pre.next = new ListNode(val, pre.next);
    this._size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this._size) return;
    if (index === 0) {
        this._head = this._head.next;
        if (index === this._size - 1) {
            this._tail = this._head;
        }
        this._size--;
        return;
    }

    const node = this.getNode(index - 1);
    node.next = node.next.next;
    if (index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */