"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if root is None:
            return 0
        dep = 0
        for child in root.children:
            dep = max(dep, self.maxDepth(child))
        return dep + 1