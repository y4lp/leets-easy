
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int res = 0, low = 0, high = 0;
    public int rangeSumBST(TreeNode root, int low, int high) {
        res = 0;
        this.low = low;
        this.high = high;
        traverse(root);
        return res;
    }
    private void traverse(TreeNode root) {
        if (root == null) return;
        if (root.val < low) {
            traverse(root.right);
        } else if (root.val > high) {
            traverse(root.left);
        } else {
            res += root.val;
            traverse(root.right);
            traverse(root.left);
        }
    }
}