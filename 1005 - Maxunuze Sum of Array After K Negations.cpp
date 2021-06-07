class Solution {
public:
    int largestSumAfterKNegations(vector<int>& nums, int k) {
        int res = 0;
        for (int i = 0; i < k; i++) {
            sort(nums.begin(), nums.end());
            nums[0] *= -1;
        }
        for (int n : nums) {
            res += n;
        }
        return res;
    }
};