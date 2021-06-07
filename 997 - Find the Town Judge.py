class Solution:
    def findJudge(self, n, trust):
        trustor = dict()
        trusted = dict()
        for i in range(1, n + 1):
            trustor.setdefault(i, [])
            trusted.setdefault(i, [])
        for a, b in trust:
            trustor[b].append(a)
            trusted[a].append(b)
        for key in trustor.keys():
            if len(trustor[key]) == n - 1 and len(trusted[key]) == 0:
                return key
        return -1


s = Solution()
s.findJudge(3, [[1, 3], [2, 3], [3, 1]])
