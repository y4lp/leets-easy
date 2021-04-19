"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    res = []
    def postorder(self, root: 'Node') -> List[int]:
        self.res.clear()
        self.dfs(root)
        return self.res
    def dfs(self, root):
        if root is None:
            return
        for child in root.children:
            self.dfs(child)
        self.res.append(root.val)
class Solution:
    res = []
    def postorder(self, root: 'Node') -> List[int]:
        self.res.clear()
        self.dfs(root)
        return self.res[::-1]
    def dfs(self, root):
        if root is None:
            return
        s= [root]
        while len(s):
            t = s.pop()
            self.res.append(t.val)
            for child in t.children:
                s.append(child)
        
            