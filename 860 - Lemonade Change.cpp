#include <vector>

using namespace std;

class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int fives = 0, tens = 0;
        for (int b : bills) {
            if (b == 5) fives++;
            else if (b == 10) {
                if (fives != 0) {
                    tens++;
                    fives--;
                } else return false;
            } else {
                if (tens != 0) {
                    if (fives != 0) {
                        tens--;
                        fives--;
                    } else {
                        return false;
                    }
                } else {
                    if (fives >= 3) {
                        fives -= 3;
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
};