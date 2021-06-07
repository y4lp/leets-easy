import java.lang.annotation.Retention;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] fairCandySwap(int[] A, int[] B) {
        int at = 0, bt = 0;
        for (int i : A) {
            at += i;
        }
        for (int i : B) {
            bt += i;
        }
        int cons = (at - bt) / 2;
        Set<Integer> s = new HashSet<>();
        for (int i : A) {
            s.add(i);
        }
        int x;
        int[] res = {0, 0};
        for (int i : B) {
            x = i + cons;
            if (s.contains(x)) {
                res = new int[] {x, i};
            }
        }
        return res;
    }
}