class Solution:
    def flipAndInvertImage(self, image: list[list[int]]) -> list[list[int]]:
        n = len(image)
        for i in range(len(image)):
            left = 0
            right = n - 1
            while left < right:
                if image[i][left] == image[i][right]:
                    image[i][left] = image[i][right] = image[i][right] ^ 1
                left += 1
                right -= 1
            if left == right:
                image[i][right] = image[i][right] ^ 1
        return image


    def invert(self, n):
        return 0 if n == 1 else 1