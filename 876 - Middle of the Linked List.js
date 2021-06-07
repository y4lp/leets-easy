/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let i = head, j = head;
    let c = 0;
    while (i != null) {
        i = i.next;
        if (c++ % 2 == 1) {
            j = j.next;
        }
    }
    return j;
};