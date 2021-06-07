class Solution:
    def robotSim(self, commands: "list[int]", obstacles: "list[list[int]]") -> int:
        p = [0, 0]
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        direc = 0
        obstacles = set(tuple(map(tuple, obstacles)))
        res = 0
        for com in commands:
            if com == -1:
                direc = (direc + 1) % 4
            elif com == -2:
                direc = (direc + 3) % 4
            else:
                for i in range(com):
                    t = (p[0] + directions[direc][0],
                         p[1] + directions[direc][1])
                    if t not in obstacles:
                        p = t
                        dist = p[0] ** 2 + p[1] ** 2
                        res = res if res > dist else dist
                    else:
                        break
        return res


s = Solution()
a = s.robotSim(commands=[4, -1, 4, -2, 4], obstacles=[[2, 4]])
print(a)
