# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    ans = 0
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        def depth(root):
            if root is None:
                return 0
            l = depth(root.left)
            r = depth(root.right)
            self.ans = max(self.ans, l + r)
            return max(l, r) + 1
        depth(root)
        return self.ans