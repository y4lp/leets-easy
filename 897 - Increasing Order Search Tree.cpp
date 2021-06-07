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
    TreeNode * last;
public:
    TreeNode* increasingBST(TreeNode* root) {
        TreeNode* t = new TreeNode();
        last = t;
        traverse(root);
        TreeNode* res = t->right;
        delete t;
        return res;
    }
    void traverse(TreeNode* root) {
        if (root == nullptr) return;
        traverse(root->left);
        last->right = root;
        last = root;
        root->left = nullptr;
        traverse(root->right);
    }
};