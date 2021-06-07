import java.util.HashSet;
import java.util.Set;

class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        int res = 0, x = 0, y = 0, d = 0;
        int[][] dir = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        Set<Long> s = new HashSet<>();
        for (int[] o : obstacles) {
            long ox = (long) o[0] + 30000;
            long oy = (long) o[1] + 30000;
            s.add((ox << 16) + oy);
        }
        for (int com : commands) {
            if (com == -2) {
                d = (d + 3) % 4;
            } else if (com == -1) {
                d = (d + 1) % 4;
            } else {
                for (int i = 0; i < com; i++) {
                    int nx = x + dir[d][0];
                    int ny = y + dir[d][1];
                    long code = (((long) nx + 30000) << 16)+ (long) ny + 30000;
                    if (!s.contains(code)) {
                        x = nx;
                        y = ny;
                        res = Math.max(x*x + y*y, res);
                    } else {
                        break;
                    }
                }
            }
        }
        return res;
    }
}