class Solution:
    def commonChars(self, words: list[str]) -> list[str]:
        allChar = set()
        count = dict()
        for c in words[0]:
            count[c] = count.setdefault(c, 0) + 1
        for word in words:
            for c in count.keys():
                count[c] = min(count[c], word.count(c))
        res = []
        for c in count.keys():
            for i in range(count[c]):
                res.append(c)
        return res