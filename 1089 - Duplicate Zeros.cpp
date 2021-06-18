#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        queue<int> q;
        for (int i = 0; i < arr.size(); i++) {
            if (arr[i] == 0) {
                q.push(0);
                q.push(0);
            } else {
                q.push(arr[i]);
            }
            arr[i] = q.front();
            q.pop();
        }
    }
};