#include <algorithm>

using namespace std;

class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        int pa = 0, pb = 0;
        int a = min(start, destination);
        int b = max(start, destination);
        for (int i = a; i < b; i++) {
            pa += distance[i];
        }

        for (int i = b; i != a; i = (i + 1) % distance.size()) {
            pb += distance[i];
        }

        return min(pa, pb);
    }
};