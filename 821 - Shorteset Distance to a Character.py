class Solution:
    def shortestToChar(self, s: str, c: str) -> list[int]:
        cset = set()
        for i in range(len(s)):
            if s[i] == c:
                cset.add(i)
        
        res = []
        for i in range(len(s)):
            dists = [abs(i - index) for index in cset]
            mindist = min(dists)
            res.append(mindist)
        return res