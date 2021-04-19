# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    absd = 0
    def findTilt(self, root: TreeNode) -> int:
        self.post(root)
        return self.absd
    def post(self, root):
        if root is None:
            return 0
        lsum = self.post(root.left)
        rsum = self.post(root.right)
        self.absd += abs(lsum - rsum)
        return lsum + rsum + root.val