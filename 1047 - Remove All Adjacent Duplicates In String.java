class Solution {
    public String removeDuplicates(String s) {
        StringBuffer res = new StringBuffer();
        for (char c : s.toCharArray()) {
            if (res.length() == 0 || res.charAt(res.length() - 1) != c) {
                res.append(c);
            } else {
                res.deleteCharAt(res.length() - 1);
            }
        }
        return res.toString();
    }
}