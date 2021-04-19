import java.util.Arrays;
import java.util.Collections;

class Solution {
    public boolean validPalindrome(String s) {
        char[] s2 = s.toCharArray();
        int i = 0, j = s2.length - 1;
        for (; i < j; i++, j--) {
            if (s2[i] != s2[j]) {
                break;
            }
        }
        return isPalindrome(s2, i, j - 1) || isPalindrome(s2, i + 1, j);

    }
    public boolean isPalindrome(char[] s, int start, int end) {
        
        for (int i = start, j = end; i < j; i++, j--) {
            if (s[i] != s[j]) {
                return false;
            }
        }
        return true;
    }
}