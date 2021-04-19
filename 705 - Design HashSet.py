class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dic = dict()


    def add(self, key: int) -> None:
        ha = key % 37
        if ha not in self.dic:
            self.dic[ha] = [key]
            return
        if key in self.dic[ha]:
            return
        else:
            self.dic[ha].append(key)

    def remove(self, key: int) -> None:
        ha = key % 37
        if ha not in self.dic:
            return
        if key in self.dic[ha]:
            self.dic[ha].remove(key)
        else:
            return

    def contains(self, key: int) -> bool:
        """
        Returns true if this set contains the specified element
        """
        ha = key % 37
        if ha not in self.dic:
            return False
        if key in self.dic[ha]:
            return True
        else:
            return False
        



# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)