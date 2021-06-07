class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> list[str]:
        a = A.split(' ')
        aset = set(a)
        b = B.split(' ')
        bset = set(b)
        uncommon = []
        for word in a:
            if word not in bset:
                uncommon.append(word)
        for word in b:
            if word not in aset:
                uncommon.append(word)
        rc = dict()
        for word in uncommon:
            rc[word] = rc[word] + 1 if rc.get(word) is not None else 1
        res = []
        for word in rc.keys():
            if rc[word] == 1:
                res.append(word)
        return res