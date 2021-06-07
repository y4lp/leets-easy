class Solution {
public:
    bool canThreePartsEqualSum(vector<int>& arr) {
        int s = 0;
        for (int a : arr) s += a;
        if (s % 3 != 0) return false;
        int ps = s / 3, i = 0;
        bool p1 = false, p2 = false;
        s = 0;
        for (; i < arr.size(); i++) {
            s += arr[i];
            if (s == ps) {
                s = 0;
                if (!p1) p1 = true;
                else if (!p2) {
                    p2 = true;
                    break;
                }
            }
        }
        return p1 && p2 && i != arr.size() - 1;
    }
};