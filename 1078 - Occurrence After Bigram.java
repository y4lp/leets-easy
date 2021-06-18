import java.util.ArrayList;
import java.util.List;

class Solution {
    public String[] findOcurrences(String text, String first, String second) {
        String l1 = "", l2 = "";
        List<String> res = new ArrayList<>();
        String[] words = text.split(" ");
        
        for (String word: words) {
            if (l1.equals(first) && l2.equals(second)) {
                res.add(word);
            }
            l1 = l2;
            l2 = word;
        }
        return res.toArray(new String[0]);
    }
}