import java.util.ArrayList;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    ArrayList<Integer> ans = new ArrayList<>();
    int curnum, count, maxcount;
    public int[] findMode(TreeNode root) {
        dfs(root);
        int[] modes = new int[ans.size()];
        for (int i = 0; i < ans.size(); i++) {
            modes[i] = ans.get(i);
        }
        return modes;
    }
    public void dfs(TreeNode root) {
        if (root != null){
            dfs(root.left);
            update(root);
            dfs(root.right);
        }
    }
    public void update(TreeNode node) {
        if (node.val == curnum) {
            count++;
        } else {
            curnum = node.val;
            count = 1;
        }
        if (count == maxcount) {
            ans.add(node.val);
        } else if (count > maxcount) {
            maxcount = count;
            ans.clear();
            ans.add(node.val);
        }
    }
}