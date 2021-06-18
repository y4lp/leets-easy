#include <iostream>
#include <cctype>
#include <string> 
using namespace std;


class Solution {
public:
    int dayOfYear(string date) {

        int mday[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        int y = stoi(date.substr(0, 4));
        int m = stoi(date.substr(5, 2));
        int d = stoi(date.substr(8, 2));
        int res = 0;
        bool leap = y % 400 == 0 || (y % 4 == 0 && y % 100 != 0);
        for (int i = 0; i < m; i++) {
            if (i == (m - 1)) {
                res += d;
            }
            else if (leap && i == 1) {
                res += 29;
            }
            else {
                res += mday[i];
            }
        }
        return res;

    }
};