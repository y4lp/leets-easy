#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    double largestTriangleArea(vector<vector<int>>& points) {
        double res = 0.0, area = 0.0;
        for (auto p1 : points) {
            for (auto p2 : points) {
                for (auto p3 : points) {
                    if (p1 != p2 && p1 != p3) {
                        area = abs(p1[0] * p2[1] + p2[0] * p3[1] +
                        p3[0] * p1[1] - p2[0] * p1[1] - p3[0] * p2[1] - 
                        p1[0] * p3[1]);
                        res = res > area ? res : area;
                    }
                }
            }
        }
        return res / 2;
    }
};