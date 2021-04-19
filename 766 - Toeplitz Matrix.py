class Solution:
    def isToeplitzMatrix(self, matrix: list[list[int]]) -> bool:
        row = len(matrix)
        col = len(matrix[0])
        for c in range(col):
            if not self.checkDiag(matrix, 0, c):
                return False
        for r in range(row):
            if not self.checkDiag(matrix, r, 0):
                return False
        return True
    def checkDiag(self, matrix, row, col):
        test = matrix[row][col]
        while row + 1 < len(matrix) and col + 1 < len(matrix[0]):
            row += 1
            col += 1
            if test != matrix[row][col]:
                return False
        return True


