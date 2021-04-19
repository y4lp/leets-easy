class Solution:
    def search(self, nums: list[int], target: int) -> int:
        i = 0
        j = len(nums) - 1
        res = -1
        while i <= j:
            mid = (i + j) // 2
            # print(mid)
            if target > nums[mid]:
                i = mid + 1
            elif target < nums[mid]:
                j = mid - 1
            else:
                return mid
            # print(i, j)
        return res


s = Solution()
a = s.search([-1, 0, 3, 5, 9, 12], 9)
print(a)
