import math
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        divisor = set()
        divisor.add(num)
        s = 0
        for i in range(1, int(math.sqrt(num)) + 1):
            x, y = divmod(num, i)
            if y == 0:
                # divisor.add(i)
                s += i
                if i != x:
                    s += x
                # divisor.add(x)
        s -= num
        return num == s