#include <vector>
#include <string>
using namespace std;


class Solution {
public:
    vector<int> numberOfLines(vector<int>& widths, string s) {
        vector<int> res {0, 0};
        if (s.size() != 0) {
            res[0] = 1;
        }
        for (char c : s) {
            res[1] += widths[c - 97];
            if (res[1] > 100) {
                res[0]++;
                res[1] = widths[c - 97];
            }
        }
        return res;
    }
};