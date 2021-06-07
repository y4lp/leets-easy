class Solution {
    public String removeOuterParentheses(String s) {
        String res = "";
        int d = 0;
        
        for (char c : s.toCharArray()) {
            if (c == ')') {
                d--;
            } 
            if (d > 0) res += c;
            if (c == '(') {
                d++;
            }
        }
        return res;
    }
}