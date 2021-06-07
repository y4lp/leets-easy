class Solution:
    def repeatedNTimes(self, nums: list[int]) -> int:
        count = dict()
        for n in nums:
            count.setdefault(n, 0)
            count[n] += 1
            if count[n] >= 2:
                return n