/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    int xdep, ydep, xval, yval;
    TreeNode* xparent, * yparent;

public:
    bool isCousins(TreeNode* root, int x, int y) {
        xdep = ydep = -1;
        xval = x;
        yval = y;
        getDep(root, 0, nullptr);
        return xdep == ydep && xparent != yparent;
    }
    void getDep(TreeNode* root, int curDep, TreeNode* parent) {
        if (root == nullptr) return;
        if (root->val == xval) {
            xdep = curDep;
            xparent = parent;
        }
        else if (root->val == yval) {
            ydep = curDep;
            yparent = parent;
        }
        else {
            getDep(root->left, curDep + 1, root);
            getDep(root->right, curDep + 1, root);
        }
    }
};