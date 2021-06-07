# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        i, j = head, head
        c = 0
        while i is not None:
            i = i.next
            if c % 2 == 1:
                j = j.next
            c += 1
        return j