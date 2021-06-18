class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        elif n <= 2:
            return 1
        a, b, c = 0, 1, 1
        d = 0
        for i in range(n - 2):
            d = a + b + c
            a, b, c = b, c, d
        return d