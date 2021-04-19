import java.util.HashSet;
import java.util.Set;

class Solution {
    public String toGoatLatin(String S) {
        Set<Character> s = new HashSet<>();
        for (char c : "aeiouAEIOU".toCharArray()) {
            s.add(c);
        }
        int count = 1;
        StringBuilder res = new StringBuilder();
        for (String word : S.split(" ")) {
            char fst = word.charAt(0);
            if (s.contains(fst)) {
                res.append(word);
            } else {
                res.append(word.substring(1));
                res.append(fst);
            }
            res.append("ma");
            for (int i = 0; i < count; i++) {
                res.append('a');
            }
            count++;
            res.append(' ');
        }
        res.deleteCharAt(res.length() - 1);
        return res.toString();
    }
}