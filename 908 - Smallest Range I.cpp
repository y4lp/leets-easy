class Solution {
public:
    int smallestRangeI(vector<int>& A, int K) {
        int min = A[0], max = A[0];
        for (int a : A) {
            min = min < a ? min : a;
            max = max > a ? max : a;
        }
        int res = max - min;
        if (res >= 2 * K) {
            res -= 2 * K;
        } else {
            res = 0;
        }
        return res;
    }
};