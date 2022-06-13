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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    // 右中左

    // 记录前一个节点的数值
    let pre = 0;
    /**
     * @param {TreeNode}
     * @return {void}
     */
    var traversal = function (cur) {
        if (cur === null) return;
        traversal(cur.right);
        cur.val += pre;
        pre = cur.val;
        traversal(cur.left);
    };
    traversal(root);
    return root;
};

// 迭代法
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let stack = [];
    let cur = root;
    let pre = 0;
    var traversal = function(cur){
        while (cur !== null || stack.length) {
            if (cur !== null) {
                stack.push(cur);
                // 右
                cur = cur.right;
            }else{
                // 中
                cur = stack.pop();
                cur.val += pre;
                pre = cur.val;
                cur = cur.left; //左
            }
        }
    }
    traversal(root);
    return root;
};
