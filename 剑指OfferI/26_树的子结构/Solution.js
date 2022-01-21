/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (B == null) {
        return false
    }
    const bVal = B.val

    function dfs(node) {
        if (!node) return false
        if (node.val === bVal && helper(node, B)) return true
        return dfs(node.left) || dfs(node.right)
    }


    function helper(nodeA, nodeB) {
        if (nodeA && nodeB) {
            if (nodeA.val != nodeB.val) return false
            return helper(nodeA.left, nodeB.left) && helper(nodeA.right, nodeB.right)
        }
        if(!nodeA,nodeB) return false

        return true
    }
    return dfs(A)
};