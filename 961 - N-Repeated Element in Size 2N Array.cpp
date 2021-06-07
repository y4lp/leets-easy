#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int repeatedNTimes(vector<int>& nums) {
        unordered_map<int, int> count;
        for (int n : nums) {
            count[n]++;
            if (count[n] >= 2) {
                return n;
            }
        }
        return 114514;
    }
};