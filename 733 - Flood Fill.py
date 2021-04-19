from pprint import pprint

class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, newColor: int) -> list[list[int]]:
        if newColor == image[sr][sc]:
            return image
        x = [0, 0, -1, 1] #U D L R
        y = [-1, 1, 0, 0]
        q = [[sr, sc]]
        ocolor = image[sr][sc]
        # visited = [ [False for j in range(len(image[0]))] for i in range(len(image))]
        while len(q) > 0:
            wr, wc = q.pop()
            for c, r in zip(x, y):
                if wr + r >= 0 and wr + r < len(image) and wc + c >= 0 and wc + c < len(image[0]):
                    if image[wr + r][wc + c] == ocolor:
                        q.append([wr + r, wc + c])
                        # if not visited[wr + r][wc + c]:
                        #     visited[wr + r][wc + c] = True
                            # print('setting ',wr + r, wc + c, ' to true')
            image[wr][wc] = newColor
        return image


s = Solution()
a = s.floodFill([[0,0,0],[0,1,1]],1,1,1)

pprint(a)