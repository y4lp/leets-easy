#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    bool rotateString(string A, string B) {
        if (A.size() != B.size()) return false;
        A = A + A;
        auto res = A.find(B);
        return res != string::npos;
    }
};