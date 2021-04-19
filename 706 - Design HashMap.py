from pprint import pprint


class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.map = [None] * 103

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        sh = key % 37
        if self.map[sh] == None:
            self.map[sh] = [[key, value]]
            return
        for i in range(len(self.map[sh])):
            kv = self.map[sh][i]
            if kv[0] == key:
                kv[1] = value
                return
        self.map[sh].append([key, value])

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        sh = key % 37
        if self.map[sh] == None:
            return -1
        for i in range(len(self.map[sh])):
            kv = self.map[sh][i]
            if kv[0] == key:
                return kv[1]
        return -1

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        sh = key % 37
        if self.map[sh] == None:
            return
        for i in range(len(self.map[sh])):
            kv = self.map[sh][i]
            if kv[0] == key:
                self.map[sh].remove(kv)
                return


s = MyHashMap()

for i in range(2000):
    s.put(i, i * i)
s.remove(102)
print(s.get(102))
pprint(s.map)

# Your MyshMap object will be instantiated and called as such:
# obj = MyshMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
