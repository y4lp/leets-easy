class Solution:
    def reverseOnlyLetters(self, S: str) -> str:
        sub = ''
        S = [i for i in S]
        for c in S:
            if c.isalpha():
                sub += c
        sub = list(reversed(sub))
        i = 0
        for idx, c in enumerate(S):
            if c.isalpha():
                S[idx] = sub[i]
                i += 1
        return ''.join(S)