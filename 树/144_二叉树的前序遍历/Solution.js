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
 * @return {number[]}
 */
// 递归
var preorderTraversal = function (root) {
    let res = []
    preorder(root, res)
    return res
    function preorder(root, res) {
        if(root === null){
            return 
        }
        res.push(root.val)
        preorder(root.left, res)
        preorder(root.right, res)
    }
};

// 迭代
var preorderTraversal = function (root) {
    let res = []
    let stack = []
    while(root || stack.length){
        while(root){
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return res
};