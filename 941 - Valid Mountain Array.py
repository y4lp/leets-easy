class Solution:
    def validMountainArray(self, arr: list[int]) -> bool:
        n = len(arr)
        sinc = False
        sdec = False
        if n < 3: 
            return False
        for i in range(1, n):
            if arr[i] > arr[i - 1]:
                if not sinc and not sdec:
                    sinc = True
                elif sinc and sdec:
                    return False
            elif arr[i] < arr[i - 1]:
                if sinc and not sdec:
                    sdec = True
                elif sinc and sdec:
                    continue
                else:
                    return False
            else:
                return False
        return sinc and sdec

