#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        unordered_map<int, vector<int>> trustor, trusts;
        for (int i = 1; i <= n; i++) {
            trustor[i] = vector<int>();
            trusts[i] = vector<int>();
        }
        for (int i = 0; i < trust.size(); i++) {
            int a = trust[i][0], b = trust[i][1];
            trustor[b].push_back(a);
            trusts[a].push_back(b);
        }

        for (auto item = trustor.begin(); item != trustor.end(); item++) {
            if (item->second.size() == n - 1 && trusts[item->first].size() == 0) {
                return item->first;
            }
        }
        return -1;
    }
};