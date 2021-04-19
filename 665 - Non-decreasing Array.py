class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        decsk = 0
        enter = False
        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:
                if enter:
                    return False
                enter = True
                if i > 0 and nums[i - 1] > nums[i + 1]:
                    nums[i + 1] = nums[i]
                else:
                    nums[i] = nums[i + 1]
        return True

