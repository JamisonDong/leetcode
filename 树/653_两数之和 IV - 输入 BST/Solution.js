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
 * @param {number} k
 * @return {boolean}
 * 给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 */
var findTarget = function (root, k) {
    const set = new Set();
    const search = root => {
        // 如果找到节点空，找不到
        if (!root) return false;
        // set中有需要的值，直接返回true
        if (set.has(k - root.val)) return true;
        // 没有的话，登记一下
        set.add(root.val);
        // 左右子树继续找，任意一个找到即可
        return search(root.left) || search(root.right);
    };
    return search(root);
};