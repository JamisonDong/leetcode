/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let res = []
    if (root === null) {
        return res
    }
    let queue = []
    queue.push(root)
    while (queue.length) {
        let len = queue.length
        let curLevel = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            curLevel.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res.length
};

var maxDepth = function (root) {
    if (!root) {
        return 0
    } else {
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        return Math.max(left, right) + 1
    }
}