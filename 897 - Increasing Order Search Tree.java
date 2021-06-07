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
    private TreeNode last;
    public TreeNode increasingBST(TreeNode root) {
        TreeNode head = new TreeNode();
        last = head;
        traverse(root);
        return head.right;
    }
    private void traverse(TreeNode root) {
        if (root == null) return;
        traverse(root.left);
        root.left = null;
        last.right = root;
        last = root;
        traverse(root.right);
    }
}