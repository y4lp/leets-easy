import java.util.Arrays;
import java.util.Collections;

class Solution {
    public int calPoints(String[] ops) {
        Integer[] res = new Integer[ops.length];
        Arrays.fill(res, 0);
        for (int i = 0, j = 0; i < ops.length; i++, j++){
            if (ops[i].charAt(0) == '-' || Character.isDigit(ops[i].charAt(0))) {
                res[j] = Integer.parseInt(ops[i]);
            }
            if (ops[i].equals("D")) {
                res[j] = res[j - 1] * 2;
            }
            if (ops[i].equals("+")) {
                res[j] = res[j - 1] + res[j - 2];
            }
            if (ops[i].equals("C")) {
                res[--j] = 0;
                --j;
            }
            // System.out.println(Arrays.deepToString(res));
        }
        int sum = 0;
        for (int i : res) {
            sum += i;
        }
        return sum;
    }
}