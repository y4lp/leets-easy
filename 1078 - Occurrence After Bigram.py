

class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> list[str]:
        text = text.split()
        res = []
        a, b = '', ''
        for word in text:
            if a == first and b == second:
                res.append(word)
            a = b
            b = word
        return res
        