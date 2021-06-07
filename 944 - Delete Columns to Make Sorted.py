class Solution:
    def minDeletionSize(self, strs: list[str]) -> int:
        res = []
        count = 0
        for i in range(len(strs[0])):
            temp = ''
            for s in strs:
                temp += s[i]
            res.append(temp)
        for s in res:
            if s != ''.join(sorted(s)):
                count += 1
        return count