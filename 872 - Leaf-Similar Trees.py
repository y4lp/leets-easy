# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        l1, l2 = [], []
        l1 = self.getLeaf(root1, l1)
        l2 = self.getLeaf(root2, l2)
        return l1 == l2

    def getLeaf(self, root, leaves):
        if root is None:
            return leaves
        if root.left is not None:
            leaves = self.getLeaf(root.left, leaves)
        if root.right is not None:
            leaves = self.getLeaf(root.right, leaves)
        if root.left is None and root.right is None:
            leaves.append(root.val)
        return leaves
