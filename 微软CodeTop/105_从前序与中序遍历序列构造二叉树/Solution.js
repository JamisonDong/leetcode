/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  let rootValue = preorder.shift()

  let root = new TreeNode(rootValue)

  let rootIndex = inorder.indexOf(rootValue)


  root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
  root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1))
  return root
};

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]