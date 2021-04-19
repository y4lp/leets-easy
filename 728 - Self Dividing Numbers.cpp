#include <vector>
#include <iostream>

using namespace std;


class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        vector<int> res = {};
        for (int i = left; i <= right; i++) {
            if (check(i)) res.push_back(i);
        }
        return res;
    }
    bool check(int num) {
        int x = num, y;
        while (x > 0) {
            y = x % 10;
            x = x / 10;
            if (y == 0 || num % y != 0) {
                return false;
            }
        }
        return true;
    }
};