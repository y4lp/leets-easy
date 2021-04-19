#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        if (nums.size() == 1) return 0;
        int max = nums[0], res = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (max < nums[i]) {
                max = nums[i];
                res = i;
            }
        }
        sort(nums.begin(), nums.end());
        return nums[nums.size() - 1] >= nums[nums.size() - 2] * 2 ? res : -1;
    }
};