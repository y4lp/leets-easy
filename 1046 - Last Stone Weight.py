class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        while len(stones) > 1:
            a = max(stones)
            stones.remove(a)
            b = max(stones)
            c = abs(a - b)
            if c != 0:
                stones[stones.index(b)] = c
            else:
                stones.remove(b)
        if len(stones) == 0:
            res = 0
        else:
            res = stones[0]
        return res