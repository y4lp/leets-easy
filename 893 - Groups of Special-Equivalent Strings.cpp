#include <unordered_set>
#include <string>
#include <vector>
using namespace std;

struct vecHash
{
    template <typename T>
    size_t operator()(vector<T> const & v) const 
    {
        return hash<T>()(v.size());
    }
};

class Solution {
public:
    int numSpecialEquivGroups(vector<string>& A) {
        unordered_set<vector<int>, vecHash> s;
        for (string a : A) {
            vector<int> count(52, 0);
            for (int i = 0; i < a.size(); i++) {
                count[a[i] - 'a' + (i % 2) * 26]++;
            }
            s.insert(count);
        }
        return s.size();
    }
};