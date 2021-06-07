/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let maxCol = 0, maxRow = 0, res = 0;
    for (let i = 0; i < grid.length; i++) {
        maxCol = maxRow = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] != 0) res++;
            maxCol = maxCol > grid[j][i] ? maxCol : grid[j][i];
            maxRow = maxRow > grid[i][j] ? maxRow : grid[i][j];
        }
        res += maxCol + maxRow;
    }
    return res;
};