class Solution {
    public int[][] matrixReshape(int[][] nums, int r, int c) {
        int row = nums.length, col = nums[0].length;
        if (row * col != r * c) {
            return nums;
        }
        int[][] res = new int[r][c];
        int count = 0;
        while (count < r * c) {
            res[count / c][count % c] = nums[count / col][count % col];
            count++;
        }
        return res;
    }
}