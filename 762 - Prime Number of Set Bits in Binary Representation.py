import math


class Solution:
    def countPrimeSetBits(self, L: int, R: int) -> int:
        res = 0
        for i in range(L, R + 1):
            s = bin(i)
            count = 0
            for bit in s[2:]:
                if bit == '1':
                    count += 1
            if self.isprime(count):
                res += 1
        return res

    def isprime(self, n):
        if n <= 1:
            return False
        for i in range(2, int(math.sqrt(n)) + 1):
            if n % i == 0:
                return False
        return True


s = Solution()
for i in range(20):
    a = s.isprime(i)
    print(i, a)
