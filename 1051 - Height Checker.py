class Solution:
    def heightChecker(self, heights: list[int]) -> int:
        copy = list(heights)
        copy.sort()
        res = 0
        for a, b in zip(copy, heights):
            if a != b:
                res += 1
        return res
