from pprint import pprint


class Solution:
    def transpose(self, matrix: "list[list[int]]") -> "list[list[int]]":
        row = len(matrix)
        col = len(matrix[0])
        res = [[0 for i in range(row)] for i in range(col)]
        for i in range(row):
            for j in range(col):
                res[j][i] = matrix[i][j]
        return res


s = Solution()
a = [[1,2,3],[4,5,6]]
b = s.transpose(a)
pprint(b)
