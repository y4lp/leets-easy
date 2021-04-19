class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count0 = 0
        res = 0
        firstencount = False
        for i in flowerbed:
            if i == 0:
                count0 += 1
            else:
                if firstencount and count0 >= 3:
                    res += 1 + (count0 - 3) // 2
                if not firstencount:
                    firstencount = True
                    if count0 >= 2:
                        res += count0 // 2
                count0 = 0
        if count0 == len(flowerbed):
            if count0 > 2:
                res += 1 + (count0 - 1) // 2
            else:
                res += 1
        elif count0 >= 2:
            res += count0 // 2
        return res >= n