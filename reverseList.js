/* 
206. Reverse Linked List
Easy
Topics
Companies
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

Seen this question in a real interview before?
1/5
Yes
No
Accepted
4.8M
Submissions
6.2M
Acceptance Rate
78.3%

https://leetcode.com/problems/reverse-linked-list/description/
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  const vals = [];
  let curr = head;

  while (curr != null) {
    vals.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  for (let i = vals.length - 1; i >= 0; i--) {
    curr.val = vals[i];
    curr = curr.next;
  }

  return head;
};
