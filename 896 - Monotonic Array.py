class Solution:
    def isMonotonic(self, A: list[int]) -> bool:
        res = True
        inc = False
        dec = False
        for i in range(len(A) - 1):
            if A[i] > A[i + 1]:
                dec = True
            elif A[i] < A[i + 1]:
                inc = True
            if inc and dec:
                res = False
                break
        return res