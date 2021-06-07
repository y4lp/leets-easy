class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:
        diff1 = [(points[0][0] - points[1][0]), (points[0][1] - points[1][1])]
        diff2 = [(points[1][0] - points[2][0]), (points[1][1] - points[2][1])]
        if (diff1[0] == 0 and diff1[1] == 0) or (diff2[0] == 0 and diff2[1] == 0):
            return False
        if diff1[0] == 0 and diff2[0] == 0:
            return False
        elif diff1[0] == 0 or diff2[0] == 0:
            return True
        elif diff1[1] / diff1[0] == diff2[1] / diff2[0]:
            return False
        else:
            return True
