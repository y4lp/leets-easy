
from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        queue = deque()
        if root is not None:
            queue.append(root)
        res = []
        while len(queue) != 0:
            siz = len(queue)
            i = 0
            s = 0
            while i < siz:
                t = queue.popleft()
                i += 1
                if t is not None:
                    s += t.val
                    if t.left is not None:
                        queue.append(t.left)
                    if t.right is not None:
                        queue.append(t.right)
            res.append(s / siz)
        return res
        