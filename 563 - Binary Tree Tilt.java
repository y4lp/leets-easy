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
    public int absd = 0;
    public int findTilt(TreeNode root) {
        this.post(root);
        return this.absd;
    }
    public int post(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int lsum = this.post(root.left);
        int rsum = this.post(root.right);
        this.absd += Math.abs(lsum - rsum);
        return root.val + lsum + rsum;
    }
}