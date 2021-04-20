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
    vector<int> & getLeaf(TreeNode * root, vector<int>& leaf) {
        if (root == nullptr) return leaf;
        if (root->left == nullptr && root->right == nullptr) {
            leaf.push_back(root->val);
            return leaf;
        }
        leaf = getLeaf(root->left, leaf);
        leaf = getLeaf(root->right, leaf);
        return leaf;
    }
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> l1, l2;
        l1 = getLeaf(root1, l1);
        l2 = getLeaf(root2, l2);
        return l1 == l2;
    }
};