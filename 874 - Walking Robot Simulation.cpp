#include <vector>
#include <set>
#include <unordered_set>


using namespace std;

class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        int x = 0, y = 0, res = 0, d = 0, nx, ny, dist;
        int dir[][2] = { {0, 1}, {1, 0}, {0, -1}, {-1, 0} };
        set<pair<int, int>> s;
        for (vector<int>& o : obstacles) {
            s.insert(make_pair(o[0], o[1]));
        }
        for (int cmd : commands) {
            if (cmd == -2) {
                d = (d + 3) % 4;
            }
            else if (cmd == -1) {
                d = (d + 1) % 4;
            }
            else {
                for (int i = 0; i < cmd; i++) {
                    nx = x + dir[d][0];
                    ny = y + dir[d][1];
                    auto p = make_pair(nx, ny);
                    if (s.find(p) == s.end()) {
                        x = nx;
                        y = ny;
                        dist = x * x + y * y;
                        res = res > dist ? res : dist;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        return res;
    }
};