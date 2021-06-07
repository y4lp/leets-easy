#include<string>

using namespace std;

class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        string s1 = str1 + str2, s2 = str2 + str1;
        if (s1 == s2) {
            return s1.substr(0, gcd(str1.size(), str2.size()));
        } else {
            return "";
        }
    }

    int gcd(int a, int b) {
        int r = a % b;
        while (r != 0) {
            a = b;
            b = r;
            r = a % b;
        }
        return b;
    }
};