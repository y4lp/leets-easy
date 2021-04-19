class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        s = set(candyType)
        l = len(s)
        n = len(candyType) // 2
        return l if l < n else n