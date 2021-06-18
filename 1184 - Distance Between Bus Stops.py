class Solution:
    def distanceBetweenBusStops(self, distance: list[int], start: int, destination: int) -> int:
        pathA, pathB = 0, 0
        res = 0
        a = min(start, destination)
        b = max(start, destination)
        for i in range(a, b):
            pathA += distance[i]

        i = b
        while i != a:
            pathB += distance[i]
            i = (i + 1) % len(distance)
        res = min(pathA, pathB)
        return res