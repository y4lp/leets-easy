import java.util.*;

class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        paragraph += ".";

        Set<String> banset = new HashSet<>();
        for (String s : banned) {
            banset.add(s);
        }

        Map<String, Integer> m = new HashMap<>();

        StringBuilder sb = new StringBuilder();
        for (Character c : paragraph.toCharArray()) {
            if (Character.isLetter(c)) {
                sb.append(Character.toLowerCase(c));
            } else if (sb.length() > 0) {
                String word = sb.toString();
                if (!banset.contains(word)) {
                    m.put(word, m.getOrDefault(word, 0) + 1);
                }
                sb = new StringBuilder();
            }
        }
        int max = 0;
        String res = new String();
        for (Map.Entry<String, Integer> e : m.entrySet()) {
            if (max < e.getValue()) {
                res = e.getKey();
                max = e.getValue();
            }
        }
        return res;
    }
}