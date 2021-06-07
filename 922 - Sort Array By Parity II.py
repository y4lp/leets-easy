class Solution:
    def sortArrayByParityII(self, nums: list[int]) -> list[int]:
        odd, even = 0, 1
        n = len(nums)
        while odd < n or even < n:
            while odd < n and nums[odd] % 2 == 0:
                odd += 2
            while even < n and nums[even] % 2 == 1:
                even += 2
            if odd < n and even < n:
                nums[odd], nums[even] = nums[even], nums[odd]
        return nums