class Solution:
    def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        t = [j for i in nums for j in i]
        if r * c != len(t):
            return nums
        res = []
        k = 0 
        for i in range(r):
            temp = []
            for j in range(c):
                temp.append(t[k])
                k += 1
            res.append(temp)
        return res