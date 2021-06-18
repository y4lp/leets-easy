class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        int f[1001]{0};
        vector<int> res(arr1.size());
        for (int n : arr1) {
            f[n]++;
        }
        int idx = 0;
        for (int n : arr2) {
            for (int i = 0; i < f[n]; i++) {
                res[idx++] = n;
            }
            f[n] = 0;
        }
        for (int i = 0; i < 1001; i++)
        {
            for (int j = 0; j < f[i]; j++) {
                res[idx++] = i;
            }
        }
        return res;
        

    }
};