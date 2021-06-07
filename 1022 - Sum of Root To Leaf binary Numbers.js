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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    return traverse(root, 0);
};

function traverse(root, s) {
    s = Math.floor(s * 2) + root.val;
    let l = 0, r = 0;
    if (root.left == null && root.right == null) {
        return s;
    }
    if (root.left != null) {
        l = traverse(root.left, s);
    }
    if (root.right != null) {
        r = traverse(root.right, s);
    }
    return l + r;
}