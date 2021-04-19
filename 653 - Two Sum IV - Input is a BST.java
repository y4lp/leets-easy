import java.util.HashSet;
import java.util.Set;

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
    Set<Integer> s = new HashSet<>();
    int n;
    public boolean findTarget(TreeNode root, int k) {
        s.clear();
        this.n = k;
        return dfs(root);
    }
    public boolean dfs(TreeNode root) {
        if (root == null) {
            return false;
        }
        boolean l, r, m;
        l = dfs(root.left);
        m = s.contains(this.n - root.val);
        s.add(root.val);
        r = dfs(root.right);
        return l || r || m;
    }
}