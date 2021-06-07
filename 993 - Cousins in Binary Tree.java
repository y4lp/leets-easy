/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
    private int depx = 0, depy = 0, xval, yval;
    private TreeNode parentx, parenty;
    
    public boolean isCousins(TreeNode root, int x, int y) {
        xval = x;
        yval = y;
        getDepth(root, 0, null);
        return depx == depy && parentx != parenty;
    }
    private void getDepth(TreeNode root, int curDep, TreeNode parent) {
        if (root == null) return;
        if (root.val == xval) {
            depx = curDep;
            parentx = parent;
        } else if (root.val == yval) {
            depy = curDep;
            parenty = parent;
        } else {
            getDepth(root.left, curDep + 1, root);
            getDepth(root.right, curDep + 1, root);
        }
    }
    
}