class Solution {
    public boolean backspaceCompare(String s, String t) {
        return getDele(s).equals(getDele(t));
    }
    private String getDele(String s) {
        StringBuilder ret = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (c == '#' && ret.length() > 0) {
                ret.deleteCharAt(ret.length() - 1);
            } else if (c != '#') {
                ret.append(c);
            }
        }
        return ret.toString();
    }
}