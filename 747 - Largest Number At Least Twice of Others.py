class Solution:
    def dominantIndex(self, nums: list[int]) -> int:
        if len(nums) == 1:
            return 0
        res = nums.index(max(nums))
        nums.sort()
        res = res if nums[-1] >= nums[-2] * 2 else -1
        return res