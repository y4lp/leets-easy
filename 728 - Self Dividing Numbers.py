class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> list[int]:
        res = []
        s = set()
        for i in range(left, right + 1):
            if self.check(i):
                res.append(i)
        return res

    def check(self, n: int) -> bool:
        x = n
        while x > 0:
            x, y = divmod(x, 10)
            if y == 0 or n % y != 0:
                return False
        return True
    