# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    res = []
    def tree2str(self, t: TreeNode) -> str:
        if t is not None:
            self.res.append(str(t.val))
            left = '(' + self.tree2str(t.left) + ')'
            right = '(' + self.tree2str(t.right) + ')'
            if right == '()' and left == '()':
                left = right = ''
            if right == '()':
                right = ''
            return str(t.val) + left + right
        else:
            return ''
            
            