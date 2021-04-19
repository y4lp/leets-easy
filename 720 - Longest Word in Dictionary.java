import java.util.HashSet;
import java.util.Set;

class Solution {
    public String longestWord(String[] words) {
        String res = "";
        Set<String> s = new HashSet<>();
        for (String w : words) {
            s.add(w);
        }
        for (String word : s) {
            boolean flag = true;
            for (int i = 1; i < word.length(); i++) {
                if (!s.contains(word.substring(0, i))) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if ((res.length() < word.length()) || (res.length() == word.length() && res.compareTo(word) > 0) ) {
                    res = word;
                }
            }
        }
        return res;   
    }
}