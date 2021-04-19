#include <set>
#include <string>
using namespace std;

class Solution {
public:
    int numJewelsInStones(string jewels, string stones) {
        int c = 0;
        set<char> jew;
        for (int i = 0; i < jewels.size(); i++) {
            jew.insert(jewels[i]);
        }
        for (int i = 0; i < stones.size(); i++) {
            if (jew.find(stones[i]) != jew.end()) {
                c++;
            }
        }
    
        return c;
        
    }
};