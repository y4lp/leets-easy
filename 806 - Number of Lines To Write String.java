class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        int[] res = new int[] {0, 0};
        if (s.length() != 0) {
            res[0] = 1;
        }
        for (char c : s.toCharArray()) {
            res[1] += widths[c - 97];
            if (res[1] > 100) {
                res[0] += 1;
                res[1] = widths[c - 97];
            }
        }
        return res;
    }
}