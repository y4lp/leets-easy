import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;

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
    public List<Double> averageOfLevels(TreeNode root) {
        Deque q = new ArrayDeque<>();
        if (root != null) {
            q.offer(root);
        }
        List<Double> res = new ArrayList<>();
        int len;
        double sum;
        while (q.size() != 0) {
            len = q.size();
            sum = 0;
            for (int i = 0; i < len; i++) {
                root = (TreeNode) q.poll();
                sum += root.val;
                if (root.left != null) q.offer(root.left);
                if (root.right != null) q.offer(root.right);
            }
            res.add(sum / len);
        }
        return res;
    }
}