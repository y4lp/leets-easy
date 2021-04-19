class Solution {
    private int originalColor;
    int[] x = {0, 0, -1, 1};
    int[] y = {-1, 1, 0, 0};
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        this.originalColor = image[sr][sc];
        if (originalColor != newColor) {
            dfs(image, sr, sc, newColor);
        }
        return image;
    }
    public void dfs(int[][] image, int sr, int sc, int newColor) {
        if (image[sr][sc] == originalColor) {
            image[sr][sc] = newColor;
            for (int i = 0; i < 4; i++) {
                int nx = sc + x[i], ny = sr + y[i];
                if (nx >= 0 && nx < image[0].length && ny >= 0 && ny < image.length) {
                    dfs(image, ny, nx, newColor);
                }
            }
        } else {
            return;
        }
    }
}