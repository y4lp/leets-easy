import math


class Solution:
    def imageSmoother(self, M):
        length = len(M)
        width = len(M[0])
        yajc = [-1, -1, -1, 0, 0, 0, 1, 1, 1]
        xajc = [-1, 0, 1, -1, 0, 1, -1, 0, 1]
        res = [[0] * width for i in range(length)]
        for i in range(length):
            for j in range(width):
                # get ave gray scale
                g = 0
                c = 0
                # print('i: ', i, 'j: ', j)
                for x, y in zip(xajc, yajc):
                    if 0 <= i + x < length and 0 <= j + y < width:
                        g += M[i+x][j+y]
                        c += 1
                        # print('g: ', g, 'c: ', c, 'adding idx: ', i+x, '-', j+y, 'value: ', M[i+x][j+y])
                res[i][j] = math.floor(g / c)
                # print('gres: ', M[i][j])
        return res


s = Solution()
res = s.imageSmoother(
    [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]])
print(res)
