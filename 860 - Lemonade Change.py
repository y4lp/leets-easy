class Solution:
    def lemonadeChange(self, bills: "list[int]") -> bool:
        fives = 0
        tens = 0
        for b in bills:
            if b == 5:
                fives += 1
            elif b == 10:
                if fives == 0:
                    return False
                else:
                    fives -= 1
                    tens += 1
            elif b == 20:
                if tens == 0:
                    if fives < 3:
                        return False
                    else:
                        fives -= 3
                else:
                    if fives == 0:
                        return False
                    else:
                        tens -= 1
                        fives -= 1
        return True