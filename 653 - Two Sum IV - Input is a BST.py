# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    s = set()
    def findTarget(self, root: TreeNode, k: int) -> bool:
        self.s.clear()
        return self.dfs(root, k)

    def dfs(self, root, k):
        if root is None:
            return False
        l = self.dfs(root.left, k)
        m = (k - root.val) in self.s
        self.s.add(root.val)
        r = self.dfs(root.right, k)
        return l or r or m