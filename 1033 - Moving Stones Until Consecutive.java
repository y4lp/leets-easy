import java.util.Arrays;

class Solution {
    public int[] numMovesStones(int a, int b, int c) {
        int[] points = new int[]{a, b, c}, res = new int[2];
        Arrays.sort(points);
        int diff1 = points[2] - points[1], diff2 = points[1] - points[0];
        int mindiff = Math.min(diff1, diff2);
        int maxdiff = Math.max(diff1, diff2);
        if (mindiff == 1 && maxdiff == 1) {
            res[0] = 0;
        } else if (mindiff <= 2) {
            res[0] = 1;
        } else {
            res[0] = 2;
        }
        res[1] = diff1 - 1 + diff2 - 1;
        return res;

    }
}