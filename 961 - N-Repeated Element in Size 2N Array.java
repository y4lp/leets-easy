import java.util.HashMap;
import java.util.Map;

class Solution {
    public int repeatedNTimes(int[] nums) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int n : nums) {
            count.putIfAbsent(n, 0);
            count.put(n, count.get(n) + 1);
            if (count.get(n) >= 2) {
                return n;
            }
        }
        return 123;
    }
}