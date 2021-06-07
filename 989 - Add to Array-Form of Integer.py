class Solution:
    def addToArrayForm(self, num: list[int], k: int) -> list[int]:
        res = []
        n = len(num)
        for i in range(n - 1, -1, -1):
            s = num[i] + k % 10
            k //= 10
            if s >= 10:
                s -= 10
                k += 1
            res.append(s)
        while k > 0:
            res.append(k % 10)
            k //= 10
        res = list(reversed(res))
        return res