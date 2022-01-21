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
 * @return {boolean}
 * 给定一个二叉树，检查它是否是镜像对称的。
 */
var isSymmetric = function (root) {
    function check(p, q) {
        if (p == null && q == null) {
            return true
        }
        if (p == null || q == null) {
            return false
        }
        return p.val == q.val && check(p.left, q.right) && check(p.right, q.left)
    }
    return check(root, root)
};

var isSymmetric = function (root) {
    return check(root, root);
    function check(u, v) {
        var queue = []
        queue.push(u)
        queue.push(v)
        while (queue.length){
            u = queue.pop()
            v = queue.pop()
            if (u === null && v === null) {
                continue;
            }
            if ((u == null || v == null) || (u.val != v.val)) {
                return false;
            }
            queue.push(u.left)
            queue.push(v.right)

            queue.push(u.right)
            queue.push(v.left)
        }
        return true
    }
};