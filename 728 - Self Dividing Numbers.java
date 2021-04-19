import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> l = new ArrayList<>();
        for (int i = left; i <= right; i++) {
            if (check(i)) {
                l.add(i);
            }
        }
        return l;
    }
    public boolean check(int n) {
        int x = n, y = 0;
        while (x > 0) {
            y = x % 10;
            x = x / 10;
            if (y == 0 || n % y != 0) {
                return false;
            }
        }
        return true;
    }
}