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
let ans = 0;
var diameterOfBinaryTree = function(root) {
    ans = 0;
    depth(root);
    return ans;
};
function depth(root) {
    if (!root) {
        return 0;
    }
    let l, r;
    l = depth(root.left);
    r = depth(root.right);
    ans = Math.max(l + r, ans);
    return Math.max(l, r) + 1;
}