class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] dp = new int[3];
        dp[0] = dp[1] = dp[2] = 0;
        int n = cost.length;
        for (int i = 2; i < n + 1; i++) {
            dp[2] = Math.min(dp[0] + cost[i - 2], dp[1] + cost[i - 1]);
            dp[0] = dp[1];
            dp[1] = dp[2];
        }
        return dp[2];
    }
}