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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let l1 = [], l2 = [];
    l1 = getLeaf(root1, l1);
    l2 = getLeaf(root2, l2);
    return JSON.stringify(l1) === JSON.stringify(l2);
};

/**
 * 
 * @param {TreeNode} root 
 * @param {Array[int]} leaf 
 */

function getLeaf(root, leaf) {
    if (root == null) return leaf;
    if (root.left == null && root.right == null) {
        leaf.push(root.val);
        return leaf;
    }
    leaf = getLeaf(root.left, leaf)
    leaf = getLeaf(root.right, leaf)
    return leaf;
}
