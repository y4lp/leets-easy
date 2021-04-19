class Solution {
    public int[][] imageSmoother(int[][] M) {
        int[] xj = {-1, 0, 1, -1, 0, 1, -1, 0, 1};
        int[] yj = {-1, -1, -1, 0, 0, 0, 1, 1, 1};
        int col = M[0].length;
        int row = M.length;
        int[][] res = new int[row][col];
        double g, c;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                g = 0;
                c = 0;
                for (int k = 0; k < xj.length; k++) {
                    int it = i + yj[k];
                    int jt = j + xj[k];
                    if ( 0 <= it && it < row && 0 <= jt && jt < col) {
                        g += M[it][jt];
                        c++;
                    }
                    res[i][j] = (int) Math.floor(g / c);

                }
            }
        }
        return res;
    }
}