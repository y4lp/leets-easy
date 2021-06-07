#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> numMovesStones(int a, int b, int c) {
        vector<int> res(2), points = { a, b, c };
        sort(points.begin(), points.end());
        int diff1 = points[2] - points[1], diff2 = points[1] - points[0];
        int mindiff = diff1 > diff2 ? diff2 : diff1;
        int maxdiff = diff1 < diff2 ? diff2 : diff1;
        if (mindiff == 1 && maxdiff == 1) {
            res[0] = 0;
        }
        else if (mindiff <= 2) {
            res[0] = 1;
        }
        else {
            res[0] = 2;
        }
        res[1] = diff1 + diff2 - 2;
        return res;
    }
};