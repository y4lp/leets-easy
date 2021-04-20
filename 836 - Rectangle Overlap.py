class Solution:
    def isRectangleOverlap(self, rec1: "list[int]", rec2: "list[int]") -> bool:
        first = min(rec1[2], rec2[2]) > max(rec1[0], rec2[0])
        second = min(rec1[3], rec2[3]) > max(rec1[1], rec2[1])
        return first and second
