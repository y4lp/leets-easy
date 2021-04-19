class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()
        if nums[1] >= 0:
            return nums.pop() * nums.pop() * nums.pop()
        else:
            return max(nums[0] * nums[1] * nums[-1], nums[-1] * nums[-2] * nums[-3])