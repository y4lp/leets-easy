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
 * @param {number} k
 * @return {boolean}
 */
let n;
let s = new Set;
var findTarget = function (root, k) {
    n = k;
    s.clear();
    return dfs(root);
};

function dfs(root) {
    if (root == null) {
        return false;
    }
    let l, r, m;
    l = dfs(root.left);
    m = s.has(n - root.val);
    s.add(root.val);
    r = dfs(root.right);
    return l || r || m;
}