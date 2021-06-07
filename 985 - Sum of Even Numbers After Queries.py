class Solution:
    def sumEvenAfterQueries(self, nums: list[int], queries: list[list[int]]) -> list[int]:
        res = []
        evenIdx = set()
        evenSum = 0
        for v in range(len(nums)):
            if nums[v] % 2 == 0:
                evenIdx.add(v)
                evenSum += nums[v]
        for val, i in queries:
            if (nums[i] + val) % 2 == 0:
                evenSum += val
                if i not in evenIdx:
                    evenIdx.add(i)
                    evenSum += nums[i]
            elif i in evenIdx:
                    evenIdx.remove(i)
                    evenSum -= nums[i]
            nums[i] += val
            res.append(evenSum)
        return res