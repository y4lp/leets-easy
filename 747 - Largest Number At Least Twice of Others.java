import java.util.Arrays;

class Solution {
    public int dominantIndex(int[] nums) {
        if (nums.length == 1) {
            return 0;
        }
        int max = nums[0], res = 0;
        for (int i = 1; i < nums.length; i++) {
            if (max < nums[i]) {
                max = nums[i];
                res = i;
            }
        }
        Arrays.sort(nums);
        return nums[nums.length - 1] >= nums[nums.length - 2] * 2 ? res : -1;

    }
}