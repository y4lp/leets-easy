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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let res = 0, l = 0, h = 0;
var rangeSumBST = function(root, low, high) {
    res = 0, l = low, h = high;
    traverse(root);
    return res;
};

function traverse(root) {
    if (root == null) return;
    if (root.val < l) {
        traverse(root.right);
    } else if (root.val > h) {
        traverse(root.left);
        traverse(root.right);
    } else {
        res += root.val;
        traverse(root.left);
        traverse(root.right);
    }
}

