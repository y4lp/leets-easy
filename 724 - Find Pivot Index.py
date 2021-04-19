class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        res = -1
        ls = 0
        rs = sum(nums)
        for i in range(len(nums)):
            ls = ls + nums[i - 1] if i - 1 >= 0 else 0
            rs = rs - nums[i]
            print(ls, rs)
            if ls == rs:
                res = i
                break
        return res
            

s = Solution()
s.pivotIndex([1,7,3,6,5,6])