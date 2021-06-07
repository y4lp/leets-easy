/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let uni = true, val = 114515;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    uni = true;
    val = 114514;
    traverse(root);
    return uni;
};

function traverse(root) {
    if (root == null) return;
    if (root.val != val) {
        if (val == 114514) val = root.val;
        else {
            uni = false;
            return;
        }
    }
    traverse(root.left);
    traverse(root.right);
}