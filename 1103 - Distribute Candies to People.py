class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> list[int]:
        res = [0] * num_people
        adder = 1
        while candies > 0:
            candies -= adder
            if candies >= 0:
                res[(adder - 1) % num_people] += adder
            else:
                candies += adder
                res[(adder - 1) % num_people] += candies
                candies = 0
            adder += 1
        return res
