import java.io.CharArrayReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<String> commonChars(String[] words) {
        Map<Character, Integer> count = new HashMap<>();
        for (char c : words[0].toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        for (int i = 1; i < words.length; i++) {
            for (char c : count.keySet()) {
                int cnt = count(words[i], c);
                count.put(c, Math.min(cnt, count.get(c)));
            }
        }
        List<String> res = new ArrayList<>();
        for (Character c : count.keySet()) {
            for (int i = 0; i < count.get(c); i++) {
                res.add(Character.toString(c));
            }
        }
        return res;
    }
    public int count(String word, char c) {
        int res = 0;
        for (char a : word.toCharArray()) {
            if (a == c) res++;
        }
        return res;
    }
}