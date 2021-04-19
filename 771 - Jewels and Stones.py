class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        s = 0
        for c in jewels:
            s += stones.count(c)
        return s