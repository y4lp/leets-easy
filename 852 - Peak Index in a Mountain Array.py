class Solution:
    def peakIndexInMountainArray(self, arr) -> int:
        for i in range(1, len(arr) - 1):
            if arr[i + 1] < arr[i] > arr[i - 1]:
                return i


s = Solution()
a = s.peakIndexInMountainArray([0, 1, 0])
print(a)
