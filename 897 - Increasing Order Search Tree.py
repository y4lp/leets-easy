# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    res = None
    def increasingBST(self, root: TreeNode) -> TreeNode:
        t = TreeNode()
        self.res = t
        self.traverse(root)
        return t.right

    def traverse(self, root):
        if root is None: return
        self.traverse(root.left)
        self.res.right = root
        root.left = None
        self.res = root
        self.traverse(root.right)
        
    