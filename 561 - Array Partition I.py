class Solution:
    def arrayPairSum(self, nums):
        res = 0
        nums.sort()
        i = 0
        for num in nums:
            if i % 2 == 0:                
                res += num
            i += 1
        return res


s = Solution()
s.arrayPairSum([6, 2, 6, 5, 1, 2])
