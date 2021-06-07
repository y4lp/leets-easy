import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int numSpecialEquivGroups(String[] A) {
        Set<String> s = new HashSet<>();
        for (String a : A) {
            String even = "", odd = "";
            for (int i = 0; i < a.length(); i++) {
                if (i % 2 == 0) {
                    even += a.charAt(i);
                } else {
                    odd += a.charAt(i);
                }
            }
            char[] evenArr = even.toCharArray();
            Arrays.sort(evenArr);
            char[] oddArr = odd.toCharArray();
            Arrays.sort(oddArr);
            s.add(new String(evenArr) + new String(oddArr));
        }
        return s.size();
    }
}