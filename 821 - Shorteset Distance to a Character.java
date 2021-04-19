import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] shortestToChar(String s, char c) {
        Set<Integer> cset = new HashSet<>();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                cset.add(i);
            }
        }

        int[] res = new int[s.length()];
        int dist, minDist;
        for (int i = 0; i < s.length(); i++) {
            minDist = s.length();
            for (int index : cset) {
                dist = Math.abs(index - i);
                minDist = minDist < dist ? minDist : dist;
            }
            res[i] = minDist;
        }
        return res;
    }
}