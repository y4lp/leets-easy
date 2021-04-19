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
let s = new Set();
var findSecondMinimumValue = function (root) {
    s.clear();
    dfs(root);
    if (s.size <= 1) {
        return -1;
    } else {
        s.delete(Math.min(...Array.from(s.values())));
        return Math.min(...Array.from(s.values()));

    }
};
function dfs(root) {
    if (root == null) {
        return;
    }
    s.add(root.val);
    dfs(root.left);
    dfs(root.right);

}