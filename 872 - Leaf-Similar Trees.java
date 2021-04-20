import java.util.ArrayList;
import java.util.List;

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
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> l1 = new ArrayList<>(), l2 = new ArrayList<>();
        l1 = getLeaves(root1, l1);
        l2 = getLeaves(root2, l2);
        return l1.equals(l2);
    }
    private List<Integer> getLeaves(TreeNode root, List<Integer> leaves) {
        if (root == null) return leaves;
        leaves = getLeaves(root.left, leaves);
        leaves = getLeaves(root.right, leaves);
        if (root.left == null && root.right == null) {
            leaves.add(root.val);
        }
        return leaves;
    }
}