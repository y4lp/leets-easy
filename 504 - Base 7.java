import java.util.ArrayList;

class Solution {
    public String convertToBase7(int num) {
        Integer a = 0, b = 0;
        
        boolean subzero = false;
        if (num < 0) {
            num = -num;
            subzero = true;
        }
        Integer[] res;
        ArrayList<String> ans = new ArrayList<>();
        do {
            res = this.divmod(num, 7);
            a = res[0];
            b = res[1];
            num = a;
            ans.add(0, b.toString());
        } while (a >= 7);
        if (a > 0) {
            ans.add(0, a.toString());
        }
        if (subzero) {
            ans.add(0, "-");
        }
        StringBuffer str = new StringBuffer();
        for (String i: ans) {
            str.append(i);
        }
        return str.toString();

    }
    public Integer[] divmod(Integer num, Integer div) {
        Integer[] res = {num / div, num % div};
        return res;
    }
}