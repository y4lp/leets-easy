# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    
    def sumRootToLeaf(self, root: TreeNode) -> int:
        s = self.traverse(root)
        return s
    
    def traverse(self, root, b = ''):
        b = b + str(root.val)
        l, r = 0, 0
        if root.left is None and root.right is None:
            return int(b, 2)
        if root.left is not None:
            l = self.traverse(root.left, b)
        if root.right is not None:
            r = self.traverse(root.right, b)
        return l + r

