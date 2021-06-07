import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] sumEvenAfterQueries(int[] nums, int[][] queries) {
        Set<Integer> evenIdx = new HashSet<>();
        int evenSum = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % 2 == 0) {
                evenSum += nums[i];
                evenIdx.add(i);
            }
        }
        int[] res = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int val = queries[i][0], idx = queries[i][1];
            if ((nums[idx] + val) % 2 == 0) {
                evenSum += val;
                if (!evenIdx.contains(idx)) {
                    evenSum += nums[idx];
                    evenIdx.add(idx);
                }
            } else {
                if (evenIdx.contains(idx)) {
                    evenSum -= nums[idx];
                    evenIdx.remove(idx);
                }
            }
            nums[idx] += val;
            res[i] = evenSum;
        }
        return res;
    }
}