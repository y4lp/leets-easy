import java.util.HashMap;
import java.util.Map;

class Solution {
    public int countCharacters(String[] words, String chars) {
        Map<Character, Integer> count = new HashMap<>();
        for (Character c : chars.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        int res = 0;
        for (String word : words) {
            Map<Character, Integer> Tcount = new HashMap<>();
            boolean good = true;
            for (Character c : word.toCharArray()) {
                Tcount.put(c, Tcount.getOrDefault(c, 0) + 1);
            }
            for (Character c : Tcount.keySet()) {
                if (!count.containsKey(c)) {
                    good = false;
                } else if (count.get(c) < Tcount.get(c)) {
                    good = false;
                }
            }
            if (good) {
                res += word.length();
            }
        }
        return res;
    }
}