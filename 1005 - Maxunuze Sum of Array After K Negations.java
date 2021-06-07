import java.util.Arrays;

class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        int res = 0;
        for (int i = 0; i < k; i++) {
            Arrays.sort(nums);
            nums[0] *= -1;
        }
        for (int a : nums) {
            res += a;
        }
        return res;
    }
}