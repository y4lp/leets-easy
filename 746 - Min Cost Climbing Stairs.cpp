#include <vector>
using namespace std;

class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int dp[3] = {0};
        int n = cost.size();
        for (int i = 2; i < n + 1; i++) {
            dp[2] = min(dp[0] + cost[i - 2], dp[1] + cost[i - 1]);
            dp[0] = dp[1];
            dp[1] = dp[2];
        }
        return dp[2];
    }
};