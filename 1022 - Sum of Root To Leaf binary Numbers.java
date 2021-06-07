/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
    public int sumRootToLeaf(TreeNode root) {
        return traverse(root, 0);
    }
    private int traverse(TreeNode root, int s) {
        s = s * 2 + root.val;
        int l = 0, r = 0;
        if (root.left == null && root.right == null) {
            return s;
        }
        if (root.left != null) {
            l = traverse(root.left, s);
        }
        if (root.right != null) {
            r = traverse(root.right, s);
        }
        return l + r;
    }
}