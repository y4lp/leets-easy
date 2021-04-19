class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        count = [0 for i in range(len(nums))]
        for i in range(len(nums)):
            count[nums[i] - 1] += 1
        res = [None, None]
        for i, j in enumerate(count):
            if j == 2:
                res[0] = i + 1
            if j == 0:
                res[1] = i + 1
        return res