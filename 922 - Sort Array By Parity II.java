class Solution {
    public int[] sortArrayByParityII(int[] nums) {
        int odd = 1, even = 0, n = nums.length;
        while (odd < n && even < n) {
            while (odd < n && nums[odd] % 2 == 1) {
                odd += 2;
            }
            while (even < n && nums[even] % 2 == 0) {
                even += 2;
            }
            if (odd < n && even < n) {
                int t = nums[odd];
                nums[odd] = nums[even];
                nums[even] = t;
            }
        }
        return nums;
        
    }
}