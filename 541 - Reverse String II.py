# class Solution:
#     def reverseStr(self, s: str, k: int) -> str:
#         l = len(s)
#         temp = []
#         count = 0
#         res = []
#         t = ''
#         reverse = True
#         for c in s:
#             temp.append(c)
#             count += 1
#             if count == k:
#                 count = 0
#                 if reverse:
#                     t = ''.join(temp[::-1])
#                 else:
#                     t = ''.join(temp)
#                 res.append(t)
#                 reverse = not reverse
#                 temp.clear()
#         else:
#             if temp:
#                 if reverse:
#                     t = ''.join(temp[::-1])
#                 else:
#                     t = ''.join(temp)
#                 res.append(t)
#         return ''.join(res)



class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        t = list(s)
        for i in range(0, len(t), 2 * k):
            t[i:i + k] = reversed(t[i:i + k])
        return ''.join(t)
s = Solution()
print(s.reverseStr('abcdefgh', 3))

