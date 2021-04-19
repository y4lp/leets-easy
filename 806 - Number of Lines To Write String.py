class Solution:
    def numberOfLines(self, widths: list[int], s: str) -> list[int]:
        res = [0, 0]
        if len(s) != 0:
            res[0] = 1
        alpha = [chr(i) for i in range(ord('a'), ord('z') + 1)]
        d = dict(zip(alpha, widths))
        for c in s:
            res[1] += d[c]
            if res[1] > 100:
                res[0] += 1
                res[1] = d[c]
        return res

