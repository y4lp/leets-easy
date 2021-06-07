# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        self.val = 114514
        self.unival = True
        self.traverse(root)
        return self.unival
    
    def traverse(self, root):
        if root is None:
            return
        if root.val != self.val:
            if self.val == 114514:
                self.val = root.val
            else:
                self.unival = False
                return
        self.traverse(root.left)
        self.traverse(root.right)