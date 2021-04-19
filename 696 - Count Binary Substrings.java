class Solution {
    public int countBinarySubstrings(String s) {
        int res = 0, count = 0, last = 0, i = 0;
        char t;
        while (i < s.length()) {
            t = s.charAt(i);
            count = 0;
            while (i < s.length() && t == s.charAt(i)) {
                i++;
                count++;
    
            }
            res += Math.min(count, last);
            last = count;
        }
        return res;
    }
}