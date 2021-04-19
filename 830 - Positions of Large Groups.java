import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> largeGroupPositions(String s) {
        List<List<Integer>> res = new ArrayList<>();
        if (s.length() < 3) {
            return res;
        }
        char prev = s.charAt(0);
        int count = 1;
        s += "@";
        s = s.substring(1);
        int i = 0;
        for (char c : s.toCharArray()) {
            if (c == prev) {
                count++;
            } else if (count >= 3) {
                List<Integer> temp = new ArrayList<>();
                temp.add(i - count + 1);
                temp.add(i);
                res.add(temp);
                count = 1;
            } else {
                count = 1;
            }
            prev = c;
            i++;
        }
        return res;

    }
}