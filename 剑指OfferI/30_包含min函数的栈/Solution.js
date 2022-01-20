var MinStack = function () {
    this.stack = []
    this.minStack = [Infinity]
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1]
};
