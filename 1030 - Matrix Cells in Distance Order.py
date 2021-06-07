from collections import deque


class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        res = [[rCenter, cCenter]]
        q = deque()
        visited = set()
        visited.add((rCenter, cCenter))
        q.append([rCenter, cCenter])
        n = rows + cols
        dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]]
        while len(q) != 0:
            cr, cc = q.popleft()
            for dr, dc in dirs:
                r = cr + dr
                c = cc + dc
                if 0 <= r < rows and 0 <= c < cols and (r, c) not in visited:
                    res.append([r, c])
                    visited.add((r, c))
                    q.append([r, c])
        return res