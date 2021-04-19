#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int originalColor;
    int c[4] = {0, 0, -1, 1};
    int r[4] = {-1, 1, 0, 0};
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        originalColor = image[sr][sc];
        if (originalColor != newColor) {
            dfs(image, sr, sc, newColor);
        }
        return image;
    }
    void dfs(vector<vector<int>> & image, int sr, int sc, int newColor) {
        if (image[sr][sc] == originalColor) {
            image[sr][sc] = newColor;
            for (int i = 0; i < 4; i++) {
                int nc = sc + c[i], nr = sr + r[i];
                if (nc >= 0 && nc < image[0].size() && nr >= 0 && nr < image.size()) {
                    dfs(image, nr, nc, newColor);
                }
            }
        }
    }
};