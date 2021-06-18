import math


class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        if n == 1:
            return 1
        primeCount = 0

        def isPrime(i):
            for j in range(2, int(math.sqrt(i) + 1)):
                if i % j == 0:
                    return False
            return True
        for i in range(2, n + 1):
            if isPrime(i):
                primeCount += 1
        m = 10 ** 9 + 7
        res = (math.factorial(primeCount) * math.factorial(n - primeCount)) % m
        return int(res)
