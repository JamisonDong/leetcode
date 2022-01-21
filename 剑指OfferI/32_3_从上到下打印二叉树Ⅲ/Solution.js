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
    let queue = [[root,0]]
    let res = []
    while (queue.length) {
        const [node, lev] = queue.shift()
        if(!res[lev]) res[lev] = []
        lev & 1 ? res[lev].unshift(node.val) : res[lev].push(node.val)

        node.left && queue.push([node.left, lev+1])
        node.right && queue.push([node.right, lev+1])
    }

    return res
};