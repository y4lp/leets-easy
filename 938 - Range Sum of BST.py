# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    res = 0
    low, high = 0, 0
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        self.res = 0
        self.low, self.high = low, high
        self.traverse(root)
        return self.res
    def traverse(self, root):
        if root is None:
            return
        if root.val < self.low:
            self.traverse(root.right)
        elif root.val > self.high:
            self.traverse(root.left)
        else:
            self.res += root.val
            self.traverse(root.left)
            self.traverse(root.right)