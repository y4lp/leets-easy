class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double sum = 0;
        int end = nums.length - k;
        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }
        double res = sum / k;
        for (int i = 1; i <= end; i++) {
            sum = sum - nums[i - 1] + nums[i + k - 1];
            res = Math.max(res, sum / k);
        }
        return res;
    }
}