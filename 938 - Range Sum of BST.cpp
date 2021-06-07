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
    int res = 0, l = 0, r = 0;
    void traverse(TreeNode* root) {
        if (root == nullptr) return;
        if (root->val < l) {
            traverse(root->right);
        } else if (root->val > r) {
            traverse(root->left);
            traverse(root->right);
        } else {
            res += root->val;
            traverse(root->left);
            traverse(root->right);
        }
    }
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        res = 0;
        l = low;
        r = high;
        traverse(root);
        return res;
    }
};