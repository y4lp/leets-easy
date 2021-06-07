/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    let res = 0, sideCover = 0, n = grid.length;
    let dirs = [[0, -1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                res += 2;
                for (let d of dirs) {
                    let x = i + d[0], y = j + d[1];
                    if (x >= 0 && x < n && y >= 0 && y < n) {
                        sideCover = grid[x][y];
                    } else {
                        sideCover = 0;
                    }
                    res += Math.max(grid[i][j] - sideCover, 0);
                }
            }
        }
    }
    return res;
};