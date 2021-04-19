/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (root1 == null && root2 == null) {
        return null;
    }
    let root = new TreeNode();
    if (root1 != null) {
        root.val += root1.val;
    }
    if (root2 != null) {
        root.val += root2.val;
    }
    root.left = mergeTrees(root1 == null ? null : root1.left, root2 == null ? null : root2.left);
    root.right = mergeTrees(root1 == null ? null : root1.right, root2 == null ? null : root2.right);
    return root;

};

console.dir();