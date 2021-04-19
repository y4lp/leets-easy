import java.util.Arrays;

class Solution {
    public int[] findErrorNums(int[] nums) {
        int[] res = {-1, -1};
        int[] counts = new int[nums.length];
        Arrays.fill(counts, 0);
        for (int i = 0; i < nums.length; i++) {
            counts[nums[i] - 1]++;
        }
        for (int i = 0; i < counts.length; i++) {
            if (counts[i] == 2) res[0] = i + 1;
            if (counts[i] == 0) res[1] = i + 1;
        }
        return res;
    }
}