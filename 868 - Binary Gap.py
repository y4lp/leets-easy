class Solution:
    def binaryGap(self, n: int) -> int:
        b = bin(n)[2:]
        left, right = -1, -1
        gap = 0
        for i, d in enumerate(b):
            if d == '1':
                if left == -1:
                    left = i
                else:
                    if right == -1:
                        right = i
                    gap = max(gap, right - left)
                    left = right
                    right = -1
        return gap