import java.util.HashMap;

class Solution {
    public int findLHS(int[] nums) {
        HashMap<Integer, Integer> m = new HashMap<>();
        int res = 0;
        for (int num: nums){
            m.put(num, m.getOrDefault(num, 0) + 1);
        }
        Integer cj;
        for (int num: m.keySet()) {
            if ((cj = m.get(num + 1)) != null) {
                res = Math.max(res, m.get(num) + cj);
            }
        }
        return res;
    }
}