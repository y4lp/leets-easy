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
let absd;
var findTilt = function (root) {
    absd = 0;
    post(root);
    return absd;
};

function post(root) {
    if (root == null) {
        return 0;
    }
    let lsum = post(root.left);
    let rsum = post(root.right);
    absd += Math.abs(lsum - rsum);
    return root.val + lsum + rsum;
}
