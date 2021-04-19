import java.util.Arrays;
import java.util.Collections;

class Solution {
    public int maximumProduct(int[] nums) {
        Arrays.sort(nums);
        int res = 0;
        if (nums[1] >= 0) {
            res = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
        } else {
            res = Math.max(nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3], 
                            nums[0] * nums[1] * nums[nums.length - 1]);
        }
        return res;

    }
}