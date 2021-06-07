class Solution:
    def diStringMatch(self, s: str) -> list[int]:
        res = []
        l, r = 0, len(s)
        for c in s:
            if c == 'I':
                res.append(l)
                l += 1
            else:
                res.append(r)
                r -= 1
        return res + [l]