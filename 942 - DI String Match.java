class Solution {
    public int[] diStringMatch(String s) {
        int l = 0, r = s.length();
        int[] res = new int[s.length() + 1];
        int i = 0;
        for (char c : s.toCharArray()) {
            if (c == 'I') {
                res[i++] = l++;
            } else {
                res[i++] = r--;
            }
        }
        res[i] = l;
        return res;
    }
}