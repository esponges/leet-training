/* 
  143. Reorder List
Medium
Topics
Companies
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.1M
Submissions
1.9M
Acceptance Rate
61.0%
https://leetcode.com/problems/reorder-list/description/

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
* @param {ListNode} head
* @return {void} Do not return anything, modify head in-place instead.
*/
var reorderList = function(head) {
   let curr = head;
   const els = [];

   while (curr != null) {
       els.push(curr.val);
       curr = curr.next;
   }
   console.log({ els });

   let last = new ListNode();
   let currLast = last;
   console.log({ last, currLast, next: currLast.val });

   for (let i = els.length - 1; i > Math.floor(els.length/2) - 1; i--) {
       currLast.val = els[i];
       if (i != els.length/2) currLast.next = new ListNode();
       currLast = currLast.next;
   }
   curr = head;
   currLast = last;

   for (let i = 0; i < Math.floor(els.length/2); i++) {
       const mem = curr.next;
       // push opposite node
       curr.next = currLast.next;
       // move curr to next so we can restore prev next
       curr = curr.next;
       // restore memoized next
       curr.next = mem;
       // move both pointers
       curr = curr.next;
       currLast = currLast.next;
   }

   return head;
};
