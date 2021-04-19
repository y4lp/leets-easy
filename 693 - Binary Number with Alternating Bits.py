class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        s = bin(n)
        ones = 0
        zeroes = 0
        for bit in s[2:]:
            if bit == '0':
                zeroes += 1
                ones = 0
            if bit == '1':
                ones += 1
                zeroes = 0
            if ones + zeroes >= 2:
                return False
        return True


s = Solution()
a = s.hasAlternatingBits(100)
print(a)
