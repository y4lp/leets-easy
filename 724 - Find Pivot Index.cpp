#include <numeric>
#include <vector>

using namespace std;

class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int ls = 0, rs = accumulate(nums.begin(), nums.end(), 0);
        for (int i = 0; i < nums.size(); i++) {
            ls = ls + (i - 1 >= 0 ? nums[i - 1] : 0);
            rs = rs - nums[i];
            if (ls == rs) {
                return i;
            }
        }
        return -1;
    }
};