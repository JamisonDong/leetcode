/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) return null
    let stack = [root]
    let tmp = new TreeNode()
    while (stack.length) {
        const node = stack.pop()
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
        tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }

    return root
};


// 递归
var mirrorTree = function (root) {
    if (!root) return null
    const left = mirrorTree(root.left)
    const right = mirrorTree(root.right)
    root.left = right
    root.right = left
    return root
}