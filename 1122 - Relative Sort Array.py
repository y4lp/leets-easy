class Solution:
    def relativeSortArray(self, arr1: list[int], arr2: list[int]) -> list[int]:
        res = []
        remain = []
        added = [False] * len(arr1)
        s = set(arr2)
        for i in range(len(arr2)):
            for j, n in enumerate(arr1):
                if added[j]:
                    continue
                if n == arr2[i]:
                    res.append(n)
                    added[j] = True
                elif n not in s:
                    remain.append(n)
                    added[j] = True
        remain.sort()
        res += remain
        return res
