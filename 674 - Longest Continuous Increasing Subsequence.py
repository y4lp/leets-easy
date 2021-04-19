class Solution:
    def findLengthOfLCIS(self, nums: list[int]) -> int:
        if len(nums) == 0:
            return 0
        consk = 1
        maxsk = 1
        for i in range(len(nums) - 1):
            if nums[i] < nums[i + 1]:
                consk += 1
            else:
                maxsk = max(maxsk, consk)
                consk = 1
        return max(maxsk, consk)
