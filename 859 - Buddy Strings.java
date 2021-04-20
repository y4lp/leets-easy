import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean buddyStrings(String a, String b) {
        if (a.length() != b.length()) {
            return false;
        }
        if (a.equals(b)) {
            Set<Character> s = new HashSet<>();
            for (char c : a.toCharArray()) {
                if (s.contains(c)) {
                    return true;
                }
                s.add(c);
            }
            return false;
        } else {
            int first = -1, second = -1;
            for (int i = 0; i < a.length(); i++) {
                if (a.charAt(i) != b.charAt(i)) {
                    if (first == -1) {
                        first = i;
                    } else if (second == -1) {
                        second = i;
                    } else {
                        return false;
                    }
                }
            }
            return first != -1 && second != -1 && a.charAt(first) == b.charAt(second) && a.charAt(second) == b.charAt(first);
        }
    }
}