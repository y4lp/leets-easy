#include <unordered_set>
#include <vector>>
using namespace std;
class Solution {
public:
    vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
        int at = 0, bt = 0;
        for (int a : A) {
            at += a;
        }
        for (int b : B) {
            bt += b;
        }
        int cons = (at - bt) / 2;
        unordered_set<int> s(A.begin(), A.end());
        vector<int> res;
        for (int y : B) {
            int x = y + cons;
            if (s.count(x) != 0) {
                res = {x, y};
            }
        }
        return res;
    }
};