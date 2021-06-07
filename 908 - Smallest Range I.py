class Solution:
    def smallestRangeI(self, A: list[int], K: int) -> int:
        minval = min(A)
        maxval = max(A)
        res = maxval - minval
        if res >= K * 2:
            res -= K * 2
        else:
            res = 0
        return res