# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    s = set()
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        self.s.clear()
        self.dfs(root)
        if len(self.s) <= 1:
            return -1
        else:
            self.s.remove(min(self.s))
            return min(self.s)
    def dfs(self, root):
        if root is None:
            return
        self.s.add(root.val)
        self.dfs(root.left)
        self.dfs(root.right)