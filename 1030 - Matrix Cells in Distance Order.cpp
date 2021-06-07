class Solution {
public:
    vector<vector<int>> allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        vector<vector<int>> res(rows * cols, vector<int>(2));
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                res[i * cols + j][0] = i;
                res[i * cols + j][1] = j;
            }
        }
        sort(res.begin(), res.end(), [rCenter, cCenter](vector<int> x, vector<int> y) {
            return abs(x[0] - rCenter) + abs(x[1] - cCenter) < abs(y[0] - rCenter) + abs(y[1] - cCenter);
            });
        return res;
    }
};