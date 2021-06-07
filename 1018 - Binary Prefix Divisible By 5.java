import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Boolean> prefixesDivBy5(int[] nums) {
        List<Boolean> res = new ArrayList<>();
        int dec = 0;
        for (int n : nums) {
            dec = (dec * 2 + n) % 5;
            res.add(dec == 0);
        }
        return res;
    }
}