import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Stack;

class Solution {
    public String reverseOnlyLetters(String S) {
        Deque<Character> s = new ArrayDeque<>();
        for (Character c : S.toCharArray()) {
            if (Character.isAlphabetic(c)) {
                s.push(c);
            }
        }
        String res = "";
        for (Character c : S.toCharArray()) {
            if (Character.isAlphabetic(c)) {
                res += s.pop();
            } else {
                res += c;
            }
        }
        return res;
    }
}