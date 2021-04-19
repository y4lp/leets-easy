class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: list[str]) -> str:
        m = dict()
        for c in licensePlate:
            if c.isalpha():
                m[c.lower()] = m.setdefault(c.lower(), 0) + 1
        res = "0" * 20
        for word in words:
            # s = set(word)
            comp = True
            for c in m.keys():
                if word.count(c.lower()) >= m[c.lower()]:
                    continue
                else:
                    comp = False
                    break
            if comp:
                res = word if len(word) < len(res) else res
        return res
