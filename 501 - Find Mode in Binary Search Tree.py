# # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# class Solution:
#     def __init__(self):
#         super().__init__()
#         self.curnum, self.count, self.maxcount = 0,0,0
#         self.ans = []
#     def findMode(self, root):
#         self.dfs(root)
#         return self.ans
        
#     def dfs(self, root):
#         if(root):
#             self.dfs(root.left)
#             self.update(root)
#             self.dfs(root.right)
#     def update(self, root):
#         if root.val == self.curnum:
#             self.count += 1
#         else:
#             self.count = 1
#             self.curnum = root.val
#         if self.count == self.maxcount:
#             self.ans.append(root.val)
#         elif self.count > self.maxcount:
#             self.maxcount = self.count
#             self.ans.clear()
#             self.ans.append(root.val)

# s = Solution()
# print(s.findMode(TreeNode(2)))
# # Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

count, maxcount, curnum = 0,0,0
ans = []
class Solution:
    def findMode(self, root):
        global curnum, count, maxcount, ans
        count, maxcount, curnum = 0,0,0
        ans = []
        def update(root):
            global curnum, count, maxcount, ans
            if root.val == curnum:
                count += 1
            else:
                curnum = root.val
                count = 1
            if count == maxcount:
                ans.append(root.val)
            elif count > maxcount:
                ans.clear()
                ans.append(root.val)
                maxcount = count
        def dfs(root):
            if root:
                dfs(root.left)
                update(root)
                dfs(root.right)
        dfs(root)
        return ans

s = Solution()

print(s.findMode(TreeNode(2147483647)))