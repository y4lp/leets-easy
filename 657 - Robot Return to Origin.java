class Solution {
    public boolean judgeCircle(String moves) {
        int u = 0, d = 0, l = 0, r = 0;
        for (char move : moves.toCharArray()) {
            switch (move) {
                case 'U': u++;
                break;
                case 'D': d++;
                break;
                case 'L': l++;
                break;
                case 'R': r++;
            }
        }
        return u == d && l == r;
    }
}