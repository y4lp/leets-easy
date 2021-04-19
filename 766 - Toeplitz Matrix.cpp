#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix) {
        for (int i = 0; i < matrix[0].size(); i++) {
            if (!checkDiag(matrix, 0, i)) {
                return false;
            }
        }
        for (int i = 0; i < matrix.size(); i++) {
            if (!checkDiag(matrix, i, 0)) {
                return false;
            }
        }
        return true;
    }

    bool checkDiag(vector<vector<int>>& matrix, int row, int col) {
        int test = matrix[row][col];
        while (row + 1 < matrix.size() && col + 1 < matrix[0].size()) {
            row++;
            col++;
                if (test != matrix[row][col]) {
                    return false;
                }
        }
        return true;
    }
};