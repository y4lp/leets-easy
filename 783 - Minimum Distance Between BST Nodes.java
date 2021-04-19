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
    private int mindiff = -1, preval = -1;
    public int minDiffInBST(TreeNode root) {
        traverse(root);
        return mindiff;
    }

    public void traverse(TreeNode root) {
        if (root == null) {
            return;
        }
        traverse(root.left);
        if (preval == -1) {
            preval = root.val;
        } else {
            int diff = root.val - preval;
            preval = root.val;
            if (mindiff == -1) {
                mindiff = diff;
            } else {
                mindiff = mindiff < diff ? mindiff : diff;
            }
        }
        traverse(root.right);
    }
}