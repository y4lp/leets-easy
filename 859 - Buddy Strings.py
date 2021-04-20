class Solution:
    def buddyStrings(self, a: str, b: str) -> bool:
        if len(a) != len(b):
            return False
        if a == b:
            if len(a) > 26: return True
            s = set()
            for c in a:
                if c in s:
                    return True
                s.add(c)
            return False
        else:
            pairs = []
            for c, d in zip(a, b):
                if c != d:
                    pairs.append((c, d))
                if len(pairs) > 2:
                    return False
            if len(pairs) == 2 and pairs[0][0] == pairs[1][1] and pairs[0][1] == pairs[1][0]:
                return True
            else:
                return False
        