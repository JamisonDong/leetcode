/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let res = []
    while (queue.length) {
        var temp = []
        for (let i = queue.length; i > 0; i--) {
            const node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(temp)
    }

    return res
};