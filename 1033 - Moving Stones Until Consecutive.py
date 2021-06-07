class Solution:
    def numMovesStones(self, a: int, b: int, c: int) -> List[int]:
        res = [0, 0]
        points = [a, b, c]
        points.sort()
        diff1 = min(points[2] - points[1], points[1] - points[0])
        diff2 = max(points[2] - points[1], points[1] - points[0])
        if diff1 == 1 and diff2 == 1:
            res[0] = 0
        elif diff1 <= 2:
            res[0] = 1
        else:
            res[0] = 2
        res[1] = (points[2] - points[1] - 1) + (points[1] - points[0] - 1)
        return res