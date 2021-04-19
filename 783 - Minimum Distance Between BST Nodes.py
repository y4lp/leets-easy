# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    minval = -1
    prenode = -1
    def minDiffInBST(self, root: TreeNode) -> int:
        self.traverse(root)
        return self.minval
    def traverse(self, root):
        if root is None:
            return
        self.traverse(root.left)
        if self.prenode == -1:
            self.prenode = root.val
        else:
            diff = root.val - self.prenode
            self.prenode = root.val
            if self.minval == -1:
                self.minval = diff
            else:
                self.minval = min(self.minval, diff)
        self.traverse(root.right)
