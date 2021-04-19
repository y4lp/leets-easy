class Solution {
    public int arrayPairSum(int[] nums) {
        int res = 0;
        Arrays.sort(nums);
        int i = 0;
        for (int num: nums) {
            if (i % 2 == 0) {
                res += num;
            }
            i++;
        }
        return res;
    }
}