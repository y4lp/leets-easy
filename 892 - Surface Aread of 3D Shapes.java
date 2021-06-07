class Solution {
    public int surfaceArea(int[][] grid) {
        int res = 0, sideCover = 0, n = grid.length;
        int[][] dirs = new int[][] {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] > 0) {
                    res += 2;
                    for (int[] d : dirs) {
                        int x = i + d[0], y = j + d[1];
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

    }
}