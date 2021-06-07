/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptrptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    int traverse(TreeNode* root, int s) {
        s = s * 2 + root->val;
        int l = 0, r = 0;
        if (root->left == nullptr && root->right == nullptr) {
            return s;
        }
        if (root->left != nullptr) {
            l = traverse(root->left, s);
        }
        if (root->right != nullptr) {
            r = traverse(root->right, s);
        }
        return l + r;
    }
public:
    int sumRootToLeaf(TreeNode* root) {
        return traverse(root, 0);
    }
};