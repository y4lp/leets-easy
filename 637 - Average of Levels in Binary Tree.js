/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let q = [], res = [];
    if (root != null) {
        q.push(root);
    }
    let sum, node, len;
    while (q.length != 0) {
        len = q.length;
        sum = 0;
        for (let i = 0; i < len; i++) {
            node = q.shift();
            sum += node.val;
            if (node.left != null) q.push(node.left);
            if (node.right != null) q.push(node.right);
        }
        res.push(sum / len);
    }
    return res;
};