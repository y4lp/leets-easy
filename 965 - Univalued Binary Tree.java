/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    private int val = 1145141919;
    private boolean unival = true;

    public boolean isUnivalTree(TreeNode root) {
        val = 114514;
        unival = true;
        traverse(root);
        return unival;
    }

    private void traverse(TreeNode root) {
        if (root == null) return;
        if (root.val != val) {
            if (val == 114514) val = root.val;
            else {
                unival = false;
                return;
            }
        }
        traverse(root.left);
        traverse(root.right);
    }
}