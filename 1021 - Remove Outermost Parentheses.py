class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        res = ''
        d = 0
        for c in s:
            if c == ')':
                d -= 1
            if d >= 1:
                res += c
            if c == '(':
                d += 1
        return res