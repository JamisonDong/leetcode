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
const maxPathSum = function (root) {
  let maxPath = Number.MIN_SAFE_INTEGER

  const dfs = (root) => {
    if (root === null) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    // 当前子树内部的最大路径和
    const curMaxPath = left + root.val + right
    maxPath = Math.max(maxPath, curMaxPath)

    // 当前子树对外提供的内部最大路径和
    const outputMaxSum = root.val + Math.max(0, left, right)

    return outputMaxSum < 0 ? 0 : outputMaxSum
  }
  dfs(root)
  return maxPath
};