class Solution {
public:
    int numRookCaptures(vector<vector<char>>& board) {
        int res = 0;
        int d[][2] = {{0, 1}, {0, -1}, {-1, 0}, {1, 0}};
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (board[i][j] == 'R') {
                    for (int k = 0; k < 4; k++) {
                        int ni = i + d[k][1], nj = j + d[k][0];
                        while (ni >= 0 && ni < 8 && nj >= 0 && nj < 8) {
                            if (board[ni][nj] == 'B') {
                                break;
                            } else if (board[ni][nj] == 'p') {
                                res++;
                                break;
                            } else {
                                ni += d[k][1];
                                nj += d[k][0];
                            }
                        }
                    }
                    break;
                }
            }
        }
        return res;
    }
};