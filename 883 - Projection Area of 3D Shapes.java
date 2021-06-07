class Solution {
    public int projectionArea(int[][] grid) {
        int maxRow = 0, maxCol = 0, res = 0;
        for (int i = 0; i < grid.length; i++) {
            maxRow = 0;
            maxCol = 0;
            for (int j = 0; j < grid[0].length; j++) {
                if(grid[i][j] > 0) res++;
                maxRow = maxRow > grid[i][j] ? maxRow : grid[i][j];
                maxCol = maxCol > grid[j][i] ? maxCol : grid[j][i];
            }
            res += maxRow + maxCol;
        }
        return res;
    }
}