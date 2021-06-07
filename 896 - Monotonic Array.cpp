class Solution {
public:
    bool isMonotonic(vector<int>& A) {
        bool res = true, inc = false, dec = false;
        for (int i = 0; i < A.size() - 1; i++) {
            if (A[i] < A[i + 1]) inc = true;
            else if (A[i] > A[i + 1]) dec = true;
            if (inc && dec) {
                res = false;
                break;
            }
        }
        return res;
    }
};