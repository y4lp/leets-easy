class Solution:
    def largeGroupPositions(self, s: str) -> "list[list[int]]":
        if len(s) < 3:
            return []
        prev = s[0]
        index = [0, 0]
        s += '@'
        res = []
        for c in s[1:]:
            if c == prev:
                index[1] += 1
            elif index[1] - index[0] >= 2:
                res.append(index)
                index = [index[1] + 1, index[1] + 1]
            else:
                index = [index[1] + 1, index[1] + 1]
            prev = c
            print(index)
        return res


s = Solution()
a = "abbxxxxzzy"
r = s.largeGroupPositions(a)
print(r)
