cdclass Solution {
public:
    int projectionArea(vector<vector<int>>& grid) {
        int maxCol = 0, maxRow = 0, res = 0;
        for (int i = 0; i < grid.size(); i++) {
            maxCol = maxRow = 0;
            for (int j = 0; j < grid.size(); j++) {
                if (grid[i][j] > 0) res++;
                maxRow = maxRow > grid[i][j] ? maxRow : grid[i][j];
                maxCol = maxCol > grid[j][i] ? maxCol : grid[j][i];
            }
            res += maxRow + maxCol;
        }
        return res;
    }
};