/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    int ans = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        this.depth(root);
        return this.ans;
    }
    public int depth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int l, r;
        l = depth(root.left);
        r = depth(root.right);
        ans = Math.max(ans, l + r);
        return Math.max(l, r) + 1;

    }
}