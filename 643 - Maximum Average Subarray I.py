class Solution:
    def findMaxAverage(self, nums, k):
        end = len(nums) - k
        s = sum(nums[0:k])
        res = s / k
        print(s, res)
        for i in range(1, end + 1):
            s = s + nums[i + k - 1] - nums[i - 1]
            res = max(s / k, res)
            print(s, res)
        return res


s = Solution()
s.findMaxAverage([1, 12, -5, -6, 50, 3], 4)
