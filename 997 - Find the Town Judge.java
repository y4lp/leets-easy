import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int findJudge(int n, int[][] trust) {
        Map<Integer, List<Integer>> trustor = new HashMap<>(), trusts = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            trustor.put(i, new ArrayList<>());
            trusts.put(i, new ArrayList<>());
        }
        for (int i = 0; i < trust.length; i++) {
            int a = trust[i][0], b = trust[i][1];
            trustor.get(b).add(a);
            trusts.get(a).add(b);
        }
        for (int key : trustor.keySet()) {
            if (trustor.get(key).size() == n - 1 && trusts.get(key).size() == 0) {
                return key;
            }
        }
        return -1;
    }
}