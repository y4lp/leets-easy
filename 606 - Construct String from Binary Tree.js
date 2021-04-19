/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    if (t == null) {
        return '';
    }
    let left = '(' + tree2str(t.left) + ')';
    let right = '(' + tree2str(t.right) + ')';
    if (left == '()' && right == '()') {
        left = right = '';
    }
    if (right == '()') {
        right = '';
    }
    return t.val + left + right;
    
};