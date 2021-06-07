#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        vector<int> res;
        for (int i = num.size() - 1; i >= 0; i--) {
            int sum = num[i] + k % 10;
            k /= 10;
            if (sum >= 10) {
                sum -= 10;
                k++;
            }
            res.push_back(sum);
        }
        while (k > 0) {
            res.push_back(k % 10);
            k /= 10;
        }
        reverse(res.begin(), res.end());
        return res;
    }
};