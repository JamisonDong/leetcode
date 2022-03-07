/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/**
第一步：如果数组大小为零的话，说明是空节点了。

第二步：如果不为空，那么取后序数组最后一个元素作为节点元素。

第三步：找到后序数组最后一个元素在中序数组的位置，作为切割点

第四步：切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）

第五步：切割后序数组，切成后序左数组和后序右数组

第六步：递归处理左区间和右区间
 */
var buildTree = function (inorder, postorder) {
  // 第一步
  if (postorder.length === 0) return null

  // 第二步：后序遍历数组最后一个元素，就是当前的中间节点
  let rootValue = postorder.pop()
  let root = new TreeNode(rootValue)

  // 叶子节点
  // if (postorder.length === 1) return root

  // 第三步：找切割点
  let rootIndex = inorder.indexOf(rootValue)

  // 第四步 切割中序数组
  // 第五步 切割后续数组

  // 第六步 
  root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))

  return root
};