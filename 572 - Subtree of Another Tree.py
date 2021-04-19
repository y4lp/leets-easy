# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if t is None and s is None:
            return True
        if t is None or s is None:
            return False
        return self.isSametree(s, t) or self.isSubtree(s.left, t) or self.isSubtree(s.right, t)
    def isSametree(self, s, t):
        if t is None and s is None:
            return True
        if t is None or s is None:
            return False
        l = self.isSametree(s.left, t.left)
        r = self.isSametree(s.right, t.right)
        return s.val == t.val and l and r
