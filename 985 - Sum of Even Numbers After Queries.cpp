#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        unordered_set<int> evenIdx;
        int evenSum = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] % 2 == 0) {
                evenSum += nums[i];
                evenIdx.insert(i);
            }
        }
        vector<int> res(queries.size());
        for (int j = 0; j < queries.size(); j++) {
            int i = queries[j][1], val = queries[j][0];
            if ((nums[i] + val) % 2 == 0) {
                evenSum += val;
                if (evenIdx.find(i) == evenIdx.end()) {
                    evenIdx.insert(i);
                    evenSum += nums[i];
                }
            } else if (evenIdx.find(i) != evenIdx.end()) {
                evenSum -= nums[i];
                evenIdx.erase(i);
            }
            nums[i] += val;
            res[j] = evenSum;
        }
        return res;
    }
};