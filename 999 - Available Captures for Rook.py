class Solution:
    def numRookCaptures(self, board: list[list[str]]) -> int:
        d = [[0, -1], [0, 1], [-1, 0], [1, 0]]
        res = 0
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    for dx, dy in d:
                        ni, nj = i + dy, j + dx
                        while 0 <= ni < 8 and 0 <= nj < 8:
                            if board[ni][nj] == 'B':
                                break
                            elif board[ni][nj] == 'p':
                                res += 1
                                break
                            ni += dy
                            nj += dx
                    break
        return res
