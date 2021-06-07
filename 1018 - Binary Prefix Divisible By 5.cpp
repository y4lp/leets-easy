class Solution {
public:
    vector<bool> prefixesDivBy5(vector<int>& nums) {
        int dec = 0, i = 0;
        vector<bool> res(nums.size());

        for (int n : nums) {
            dec = (dec * 2 + n) % 5;
            res[i++] = (dec == 0);
        }
        return res;
    }
};