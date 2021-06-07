class Solution {
public:
    int heightChecker(vector<int>& heights) {
        int count[101]{0};
        int res = 0;
        for (int h : heights) {
            count[h]++;
        }
        for (int i = 1, j = 0; i < 101; i++) {
            while (count[i] > 0) {
                if (heights[j] != i) res++;
                j++;
                count[i]--;
            }
        }
        return res;
    }
};