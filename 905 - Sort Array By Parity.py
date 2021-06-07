class Solution:
    def sortArrayByParity(self, A: "list[int]") -> "list[int]":
        i, j = 0, len(A) - 1
        while i < j:
            if A[i] % 2 == 1 and A[j] % 2 == 0:
                A[i], A[j] = A[j], A[i]
            if A[i] % 2 == 0:
                i += 1
            if A[j] % 2 == 1:
                j -= 1
        return A


s = Solution()
a = [3,1,2,4]
s.sortArrayByParity(a)