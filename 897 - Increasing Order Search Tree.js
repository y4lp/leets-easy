/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let last = null;
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let t = new TreeNode();
    last = t;
    traverse(root);
    return t.right;
};

function traverse(root) {
    if (root == null) return;
    traverse(root.left);
    last.right = root;
    root.left = null;
    last = root;
    traverse(root.right);
}