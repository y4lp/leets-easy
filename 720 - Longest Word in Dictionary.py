class Solution:
    def longestWord(self, words: list[str]) -> str:
        s = set(words)
        res = ''
        for word in s:
            haspref = True
            for i in range(1, len(word)):
                if word[:i] not in s:
                    haspref = False
                    break
            if haspref and (len(word) > len(res) or (len(word) == len(res) and word < res)):
                res = word
        return res


s = Solution()

a = s.longestWord(["k", "lg", "it", "oidd", "oid", "oiddm",
                   "kfk", "y", "mw", "kf", "l", "o", "mwaqz", "oi", "ych", "m", "mwa"])
print(a)
