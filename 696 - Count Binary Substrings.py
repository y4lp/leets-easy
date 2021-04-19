# class Solution:
#     def countBinarySubstrings(self, s: str) -> int:
#         ones = 0
#         zeroes = 0
#         res = 0
#         change = 0
#         pre = int(s[0])
#         sec = False
#         for c in s:
#             if c == '0':
#                 zeroes += 1
#                 if pre == 1:
#                     change = (change + 1) % 2
#                     if sec:
#                         res += min(zeroes, ones - 1)
#                         ones = 1
#                         pre = 0
#                         continue
#                     if change == 0:
#                         res += min(zeroes - 1, ones)
#                         zeroes = 1
#                         sec = True
#                     pre = 0

#             else:
#                 ones += 1
#                 if pre == 0:
#                     change = (change + 1) % 2
#                     if sec:
#                         res += min(zeroes, ones - 1)
#                         ones = 1
#                         pre = 1
#                         continue

#                     if change == 0:
#                         res += min(zeroes, ones - 1)
#                         ones = 1
#                         sec = True
#                     pre = 1
#         res += min(zeroes , ones)
#         return res

class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        res = 0
        count = 0
        i = 0
        last = 0
        while i < len(s):
            t = s[i]
            count = 0
            while i < len(s) and t == s[i]:
                i += 1
                count += 1
            res += min(count, last)
            last = count
        return res







s = Solution()
a = s.countBinarySubstrings("00110011")
print(a)


