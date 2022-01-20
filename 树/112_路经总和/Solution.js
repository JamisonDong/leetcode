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
 * @param {number} targetSum
 * @return {boolean}
 */
// DFS
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false
    }
    if (root.left === null && root.right === null) {
        return root.val === targetSum
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

// BFS
var hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false
    }
    let queNode = []
    let queVal = []
    queNode.push(root)
    queVal.push(root.val)
    while (queNode.length) {
        let cur = queNode.shift()
        let temp = queVal.shift()
        if (cur.left === null && cur.right === null) {
            if (temp === targetSum) {
                return true
            }
            continue
        }
        if (cur.left !== null) {
            queNode.push(cur.left)
            queVal.push(cur.left.val + temp)
        }
        if (cur.right !== null) {
            queNode.push(cur.right)
            queVal.push(cur.right.val + temp)
        }
    }
    return false
};
