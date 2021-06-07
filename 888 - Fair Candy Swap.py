class Solution:
    def fairCandySwap(self, A: list[int], B: list[int]) -> list[int]:
        at, bt= sum(A), sum(B)
        s = set(A)
        cons = (at - bt) // 2
        for num in B:
            x = num + cons
            if x in s:
                return [x, num]
        
