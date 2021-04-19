class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        n = len(cost)
        dp = [0] * 3
        for i in range(2, n + 1):
            dp[2] = min(dp[0] + cost[i-2], dp[1] + cost[i-1])
            dp[0], dp[1] = dp[1], dp[2]
            # print(dp)
        return dp[2]



s = Solution()
a = s.minCostClimbingStairs([0,1,2,2])
print(a)