class Solution:
    def prefixesDivBy5(self, nums):
        res = []
        remain = 0
        for n in nums:
            remain = (remain * 2 + n) % 5
            res.append(remain == 0)
        return res

s = Solution()
a = [1,1,0,0,0,1,0,0,1]
b = s.prefixesDivBy5(a)
print(b)