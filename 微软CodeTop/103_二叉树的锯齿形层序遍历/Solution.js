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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  let isOrderLeft = true
  while (queue.length) {
    let curRes = []
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (isOrderLeft) {
        curRes.push(node.val)
      } else {
        curRes.unshift(node.val)
      }
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }

    }
    res.push(curRes)
    isOrderLeft = !isOrderLeft
  }
  return res
};