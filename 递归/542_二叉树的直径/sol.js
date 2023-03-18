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
var diameterOfBinaryTree = function (root) {
  let ans = 0
  const depath = (node) => {
    if (!root) return 0;
    let L = node.left && depath(node.left);
    let R = node.right && depath(node.right);
    ans = Math.max(ans, L + R);
    return Math.max(L, R) + 1
  }
  depath(root);
  return ans;
};