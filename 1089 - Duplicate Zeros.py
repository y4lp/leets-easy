class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        dup = 0
        q = []
        for i in range(len(arr)):
            if arr[i] == 0:
                q.append(0)
                q.append(0)
            else:
                q.append(arr[i])
            arr[i] = q.pop(0)
