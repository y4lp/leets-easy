class Solution {
    public int dayOfYear(String date) {
        int[] mday = new int[] { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        int y = Integer.parseInt(date.substring(0, 4));
        int m = Integer.parseInt(date.substring(5, 7));
        int d = Integer.parseInt(date.substring(8));
        int res = 0;
        boolean leap = y % 400 == 0 || (y % 4 == 0 && y % 100 != 0);
        for (int i = 0; i < m; i++) {
            if (i == (m - 1)) {
                res += d;
            } else if (leap && i == 1) {
                res += 29;
            } else {
                res += mday[i];
            }
        }
        return res;
    }
}