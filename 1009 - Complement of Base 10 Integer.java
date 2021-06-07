import java.util.ArrayList;
import java.util.List;

class Solution {
    public int bitwiseComplement(int n) {
        List<Integer> bin = new ArrayList<>();
        int res = 0;
        if (n == 0) return 1;
        while (n > 0) {
            bin.add(n % 2);
            n /= 2;
        }
        for (int i = 0; i < bin.size(); i++) {
            bin.set(i, bin.get(i) ^ 1);
            res += bin.get(i) * Math.pow(2, i);
        }
        return res;
    }
}