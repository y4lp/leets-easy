import java.util.Collections;
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
    private Set<Integer> s = new HashSet<>();
    public int findSecondMinimumValue(TreeNode root) {
        s.clear();
        dfs(root);
        if (s.size() <= 1) {
            return -1;
        } else {
            s.remove(Collections.min(s));
            return Collections.min(s);
        }
    }
    public void dfs(TreeNode root) {
        if (root == null) {
            return;
        }
        s.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }
}