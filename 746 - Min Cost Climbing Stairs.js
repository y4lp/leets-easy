/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [0, 0, 0];
    let n = cost.length;
    for (let i = 2; i < n + 1; i++) {
        dp[2] = Math.min(dp[0] + cost[i - 2], dp[1] + cost[i - 1]);
        [dp[0], dp[1]] = [dp[1], dp[2]];
    }
    return dp[2];

};

console.log(minCostClimbingStairs([0, 1, 2, 2, 32, 2]));