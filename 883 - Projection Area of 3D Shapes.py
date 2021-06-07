class Solution:
    def projectionArea(self, grid: "list[list[int]]") -> int:
        zArea, yArea, xArea = 0, 0, 0
        maxOfRow = 0
        maxOfCol = [0 for i in range(len(grid))]


        for row in grid:
            maxOfRow = 0
            colNo = 0
            for col in row:
                maxOfCol[colNo] = col if col > maxOfCol[colNo] else maxOfCol[colNo]
                colNo += 1
                if col != 0:
                    zArea += 1
                maxOfRow = maxOfRow if maxOfRow > col else col
            yArea += maxOfRow
        
        xArea = sum(maxOfCol)
        return zArea + yArea + xArea