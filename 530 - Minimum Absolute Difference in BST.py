# Definition for a binary tree node.
import sys


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


inside = False
print(sys.maxsize)
t = 0
res = []


class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        global t, res, inside
        self.iterator(root)
        a = min(res)
        res.clear()
        inside = False
        return a

    def iterator(self, root):
        global t, res, inside
        if root is None:
            return
        self.iterator(root.left)
        if not inside:
            t = root.val
            inside = True
        else:
            res.append(root.val - t)
            t = root.val
        self.iterator(root.right)


t1 = TreeNode(1)
t2 = TreeNode(3)
t3 = TreeNode(5)
t1.right = t3
t3.left = t2
s = Solution()
print(s.getMinimumDifference(t1))
