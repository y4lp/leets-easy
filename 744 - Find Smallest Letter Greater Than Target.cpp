#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int l = 0, r = letters.size() - 1, m;
        while (l <= r) {
            m = (l + r) / 2;
            if (letters[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        
        if (l == letters.size()) {
            return letters[0];
        } else {
            return letters[l];
        }
    }
};

