#include <queue>

using namespace std;

class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> q;
        for (int s : stones) q.push(s);

        while (q.size() > 1) {
            int a = q.top();
            q.pop();
            int b = q.top();
            q.pop();
            if (a > b) {
                q.push(a - b);
            }
        }
        int res;
        if (q.size() == 0) res = 0;
        else res = q.top();
        return res;
    }
};