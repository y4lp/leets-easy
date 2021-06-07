import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        List<Integer> res = new ArrayList<>();
        for (int i = num.length - 1; i >= 0; i--) {
            int sum = num[i] + k % 10;
            k /= 10;
            if (sum >= 10) {
                sum -= 10;
                k++;
            }
            res.add(sum);
        }
        while (k > 0) {
            res.add(k % 10);
            k /= 10;
        }
        Collections.reverse(res);
        return res;
    }
}