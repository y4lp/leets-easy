class Solution:
    def findLHS(self, nums: List[int]) -> int:
        count = dict()
        maxs = 0
        for num in nums:
            count[num] = count.setdefault(num, 0) + 1
        for numi, ci in count.items():
            cj = count.get(numi + 1, False)
            if cj:
                maxs = max(maxs, ci + cj)
        return maxs