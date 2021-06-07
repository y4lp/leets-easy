/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let xdep, ydep, xparent, yparent, vx, vy;
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    vx = x;
    xdep = -1;
    ydep = -1;
    vy = y;
    getDep(root, 0, null);
    return xdep == ydep && xparent != yparent;
};


function getDep(root, curDep, parent) {
    if (root == null) return;
    if (root.val == vx) {
        xdep = curDep;
        xparent = parent;
    } else if (root.val == vy) {
        ydep = curDep;
        yparent = parent;
    } else {
        getDep(root.left, curDep + 1, root);
        getDep(root.right, curDep + 1, root);
    }
}