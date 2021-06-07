#include<vector>
#include<unordered_map>

using namespace std;

class Solution {
private:
    int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        unordered_map<int, int> count;
        for (int card : deck) {
            count[card]++;
        }
        int g = 0;
        for (auto co : count) {
            g = gcd(g, co.second);
        }
        return g >= 2;
    }
};