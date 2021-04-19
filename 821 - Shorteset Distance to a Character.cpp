#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<int> shortestToChar(string s, char c) {
        vector<int> res(s.size());
        int prev = -s.size();
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == c) {
                prev = i;
            }
            res[i] = i - prev;
        }

        prev = s.size() * 2;
        for (int i = s.size() - 1; i >= 0; i--) {
            if (s[i] == c) {
                prev = i;
            }
            res[i] = res[i] < prev - i ? res[i] : prev - i;
        }
        return res;
    }
};