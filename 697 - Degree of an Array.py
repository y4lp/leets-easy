# class Solution:
#     def findShortestSubArray(self, nums: list[int]) -> int:
#         s = set(nums)
#         counts = dict()
#         for n in s:
#             counts[n] = nums.count(n)
#         maxcount = max(counts.values())
#         maxnums = []
#         for n, count in counts.items():
#             if count == maxcount:
#                 maxnums.append(n)
#         res = 999999
#         # print(counts, maxnums)
#         for n in maxnums:
#             for i in range(len(nums)):
#                 if nums[i] == n:
#                     l = i
#                     break
#             for i in range(len(nums) - 1, -1, -1):
#                 if nums[i] == n:
#                     r = i
#                     break
#             lenth = r - l + 1
#             # print(lenth, l, r)
#             res = min(lenth, res)

#         return res

class Solution:
    def findShortestSubArray(self, nums: list[int]) -> int:
        counts = dict()
        for i, num in enumerate(nums):
            if num in counts:
                counts[num][0] += 1
                counts[num][2] = i
            else:
                counts[num] = [1, i, i]
        maxcount = 0
        minlen = 999999
        for count, left, right in counts.values():
            if count > maxcount:
                maxcount = count
                minlen = right - left + 1
            elif maxcount == count:
                minlen = min(minlen, right - left + 1)
        return minlen


s = Solution()
a = s.findShortestSubArray([1, 2, 2, 3, 1])
print(a)
