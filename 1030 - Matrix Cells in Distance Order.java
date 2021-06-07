class Solution {
    public int[][] allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        int[][] res = new int[rows * cols][2];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                res[i * cols + j] = new int[]{i, j};
            }
        }
        Arrays.sort(res, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                int ad = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
                int bd = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
                return ad - bd;

            }
        });
        return res;

    }
}