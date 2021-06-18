class Solution:
    def numEquivDominoPairs(self, dominoes: list[list[int]]) -> int:
        res = 0
        eq = [0] * 100
        for d in dominoes:
            val = 0
            if d[0] <= d[1]:
                val = d[0] * 10 + d[1]
            else:
                val = d[1] * 10 + d[0]
            res += eq[val]
            eq[val] += 1
        return res
