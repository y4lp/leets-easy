import java.util.HashMap;
import java.util.Map;

class Solution {
    private Map<Character, Integer> m = new HashMap<>();

    public String shortestCompletingWord(String licensePlate, String[] words) {
        for (int i = 0; i < licensePlate.length(); i++) {
            char c = licensePlate.charAt(i);
            if (Character.isAlphabetic(c)) {
                c = Character.toLowerCase(c);
                m.put(c, (m.putIfAbsent(c, 0) == null ? 0 : m.get(c)) + 1);
            }
        }
        String res = "okokokokokokkokkokoko";
        for (String word : words) {
            if (check(word)) {
                res = word.length() < res.length() ? word : res;
            }
        }
        return res;
    }

    public boolean check(String word) {
        for (Character c : m.keySet()) {
            if (count(word, c) >= m.get(c)) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    public int count(String word, Character c) {
        int res = 0;
        for (int i = 0; i < word.length(); i++) {
            Character t = word.charAt(i);
            if (Character.toLowerCase(t) == c)
                res++;

        }
        return res;
    }

}