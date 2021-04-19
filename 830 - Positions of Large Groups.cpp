#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<vector<int>> largeGroupPositions(string s) {
        vector<vector<int>> res;
        int count = 1;
        for (int i = 0; i < s.size(); i++) {
            if (i == s.size() - 1 || s[i] != s[i + 1]) {
                if (count >= 3) {
                    vector<int> temp;
                    temp.push_back(i - count + 1);
                    temp.push_back(i);
                    res.push_back(temp);
                }
                count = 1;
            }
            else {
                count++;
            }
        }
        return res;
    }
};