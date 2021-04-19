/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let mindiff = -1, preval = -1;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    mindiff = preval = -1;
    traverse(root);
    return mindiff;
};

/**
 * 
 * @param {TreeNode} root 
 * @return {void}
 */

function traverse(root) {
    if (root == null) return;
    traverse(root.left);
    if (preval == -1) {
        preval = root.val;
    } else {
        let diff = root.val - preval;
        preval = root.val;
        if (mindiff == -1) {
            mindiff = diff;
        } else {
            mindiff = mindiff < diff ? mindiff : diff;
        }
    }
    traverse(root.right);
}