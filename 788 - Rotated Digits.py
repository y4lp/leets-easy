class Solution:
    def rotatedDigits(self, N: int) -> int:
        valid = [1, 2, 5, 6, 8, 9, 0]
        rotate = {1: 1, 2: 5, 5: 2, 6: 9, 8: 8, 9: 6, 0: 0}
        res = 0
        for i in range(1, N + 1):
            temp = i
            digits = []
            valid = True
            while temp > 0:
                digits.append(temp % 10)
                temp = temp // 10
            for j in range(len(digits)):
                if digits[j] not in rotate:
                    valid = False
                    break
                digits[j] = rotate[digits[j]]
            if not valid:
                continue
            digits.reverse()
            digits = [str(i) for i in digits]
            digits = ''.join(digits)
            digits = int(digits)
            if digits != i:
                res += 1
        return res


s = Solution()
print(s.rotatedDigits(10))
