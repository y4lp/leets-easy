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
    int mindiff = -1, preval = -1;
public:
    int minDiffInBST(TreeNode* root) {
        traverse(root);
        return mindiff;
    }

    void traverse(TreeNode* root) {
        if (root == nullptr) return;
        traverse(root->left);
        if (preval == -1) {
            preval = root->val;
        } else {
            int diff = root->val - preval;
            preval = root->val;
            if (mindiff == -1) {
                mindiff = diff;
            } else {
                mindiff = mindiff < diff ? mindiff : diff;
            }
        }
        traverse(root->right);
    }
};