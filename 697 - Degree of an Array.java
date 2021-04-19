import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int findShortestSubArray(int[] nums) {
        HashMap<Integer, Integer[]> counts = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (counts.containsKey(nums[i])) {
                counts.get(nums[i])[0]++;
                counts.get(nums[i])[2] = i;
            } else {
                counts.put(nums[i], new Integer[] {1, i, i});
            }
        }
        int maxcount = 0, minlen = 0;
        for (Map.Entry<Integer, Integer[]> entry : counts.entrySet()) {
            int count = entry.getValue()[0], 
                left = entry.getValue()[1],
                right =  entry.getValue()[2];

            if (count > maxcount) {
                maxcount = count;
                minlen = right - left + 1;
            } else if (count == maxcount) {
                minlen = Math.min(minlen, right - left + 1);
            }
        }
        return minlen;

    }
}