class Solution:
    def surfaceArea(self, grid: list[list[int]]) -> int:
        n = len(grid)
        res = 0
        dirs = [(0, -1), (1, 0), (0, -1), (-1, 0)]
        for i in range(n):
            for j in range(n):
                if grid[i][j] > 0:
                    res += 2
                    for x, y in dirs:
                        ti = x + i
                        tj = y + j
                        if 0 <= ti < n and 0 <= tj < n:
                            sideCover = grid[ti][tj]
                        else:
                            sideCover = 0
                        res += max(grid[i][j] - sideCover, 0)
        return res
                            
