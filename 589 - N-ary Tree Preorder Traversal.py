"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    res = []
    def preorder(self, root: 'Node') -> List[int]:
        self.res.clear()
        self.dfs(root)
        return self.res
    def dfs(self, root):
        if root is None:
            return
        self.res.append(root.val)
        for child in root.children:
            self.dfs(child)
class Solution:
    res = []
    queue = []
    def preorder(self, root: 'Node') -> List[int]:
        self.res.clear()
        self.dfs(root)
        return self.res
    def dfs(self, root):
        if root is None:
            return
        self.queue.append(root)
        while len(self.queue):
            t = self.queue.pop()
            self.res.append(t.val)
            for child in t.children[::-1]:
                self.queue.append(child)