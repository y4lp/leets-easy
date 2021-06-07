/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
private:
    bool uni = true;
    int val = 114;
    void traverse(TreeNode* root) {
        if (root == nullptr) return;
        if (root->val != val) {
            if (val == 114514) val = root->val;
            else {
                uni = false;
                return;
            }
        }
        traverse(root->left);
        traverse(root->right);
    }
public:
    bool isUnivalTree(TreeNode* root) {
        uni = true;
        val = 114514;
        traverse(root);
        return uni;
    }
    
};