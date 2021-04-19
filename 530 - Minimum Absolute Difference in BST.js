/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let t = -1;
let diff = Number.MAX_SAFE_INTEGER;
var getMinimumDifference = function (root) {
    dfs(root);
    t = -1;
    a = diff;
    diff = Number.MAX_SAFE_INTEGER;
    return a;
};
function dfs(root) {
    if (!root) {
        return;
    }
    dfs(root.left);
    if (t == -1) {
        t = root.val;
    } else {
        diff = Math.min(diff, root.val - t);
        t = root.val;
    }
    dfs(root.right);

}
