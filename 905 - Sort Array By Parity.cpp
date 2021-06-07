class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& A) {
        vector<int> B(A);
        int i = 0, j = A.size() - 1;
        for (int a : A) {
            if (a % 2 == 0) {
                B[i++] = a;
            } else {
                B[j--] = a;
            }
        }
        return B;
    }
};