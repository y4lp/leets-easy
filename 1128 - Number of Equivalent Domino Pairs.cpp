class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        int eq[100]{ 0 }, res = 0;
        for (vector<int> d : dominoes) {
            int val = d[0] <= d[1] ? d[0] * 10 + d[1] : d[1] * 10 + d[0];
            res += eq[val];
            eq[val]++;
        }
        return res;
    }
};