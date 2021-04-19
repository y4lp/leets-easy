class Solution:
    def largestTriangleArea(self, points: list[list[int]]) -> float:
        res = 0
        for p1 in points:
            for p2 in points:
                for p3 in points:
                    if p1 != p2 != p3:
                        area = 0.5 * abs(p1[0] * p2[1] + p2[0] * p3[1] +
                            p3[0] * p1[1] - p2[0] * p1[1] - p3[0] * p2[1] - 
                            p1[0] * p3[1])
                        res = res if res > area else area
        return res