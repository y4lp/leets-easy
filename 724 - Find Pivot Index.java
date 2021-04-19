import java.util.ArrayList;
import java.util.HashMap;
import java.util.Arrays;

class Solution {
    
    public int pivotIndex(int[] nums) {
        int ls = 0, rs = Arrays.stream(nums).sum(), res = -1;
        for (int i = 0; i < nums.length; i++) {
            ls = ls + (i - 1 >= 0 ? nums[i - 1] : 0);
            rs = rs - nums[i];
//            System.out.println(ls + "   " + rs);
            if (ls == rs) {
//                return i;
                res = i;
                break;
            }
        }
        return res;
    }
    
}
