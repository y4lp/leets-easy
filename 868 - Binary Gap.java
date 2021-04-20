class Solution {
    public int binaryGap(int n) {
        int left = -1, right = -1;
        String b = Integer.toString(n, 2);
        int i = 0, gap = 0;

        for (char d : b.toCharArray()) {
            if (d == '1') {
                if (left == -1) {
                    left = i;
                } else {
                    right = i;
                    gap = gap > (right - left) ? gap : right - left;
                    left = right;
                    right = -1;
                }
            }
            i++;
        }
        return gap;
    }
}