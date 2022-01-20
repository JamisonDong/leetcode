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
 */
var isSymmetric = function (root) {
    return check(root, root);
    function check(u, v) {
        var queue = []
        queue.push(u)
        queue.push(v)
        while (queue.length) {
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

var isSymmetric = function(root) {
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if(root===null){
        return true;
    }
    let stack=[];
    stack.push(root.left);
    stack.push(root.right);
    while(stack.length){
        let rightNode=stack.pop();//左节点
        let leftNode=stack.pop();//右节点
        if(leftNode===null&&rightNode===null){
            continue;
        }
        if(leftNode===null||rightNode===null||leftNode.val!==rightNode.val){
            return false;
        }
        stack.push(leftNode.left);//左节点左孩子入队
        stack.push(rightNode.right);//右节点右孩子入队
        stack.push(leftNode.right);//左节点右孩子入队
        stack.push(rightNode.left);//右节点左孩子入队
    }
    return true;
  };