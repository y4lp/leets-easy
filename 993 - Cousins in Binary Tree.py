# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        self.parent = None
        depx, parentx = self.getDepth(root, x)
        depy, parenty = self.getDepth(root, y)
        return depx == depy and parentx != parenty
    
    def getDepth(self, root, val, curDep = 0, parent = None):
        if root is None:
            return -1, None
        if root.val == val:
            return curDep, parent
        d, p = self.getDepth(root.left, val, curDep + 1, root)
        if d == -1:
            d, p = self.getDepth(root.right, val, curDep + 1, root)
        return d, p


