/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode i = head, j = head;
        int c = 0;
        while (i != null) {
            i = i.next;
            if (c++ % 2 == 1) {
                j = j.next;
            }
        }
        return j;
    }
}