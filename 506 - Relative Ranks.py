class Solution:
    def findRelativeRanks(self, nums: List[int]) -> List[str]:
        temp = nums[::]
        temp.sort()
        temp = temp[::-1]
        order = []
        medals = [ 0, 'Gold Medal', 'Silver Medal', 'Bronze Medal']
        for score in nums:
            rank = temp.index(score) + 1
            if rank in range(1,4):
                rank = medals[rank]
            rank = str(rank)
            order.append(rank)
        return order
