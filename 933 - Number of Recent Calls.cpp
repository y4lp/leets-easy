#include <vector>
using namespace std;

class RecentCounter {
private:
    vector<int> q;
public:
    RecentCounter() {
        
    }

    int ping(int t) {
        q.push_back(t);

        while (q[0] < t - 3000) {
            q.erase(q.begin());
        }
        return q.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */