/* 2816. Double a Number Represented as a Linked List
Medium
Topics
Companies
Hint
You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

Return the head of the linked list after doubling it.

 

Example 1:


Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
Example 2:


Input: head = [9,9,9]
Output: [1,9,9,8]
Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998. 
 

Constraints:

The number of nodes in the list is in the range [1, 104]
0 <= Node.val <= 9
The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
42.5K
Submissions
85.4K
Acceptance Rate
49.8%

https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
*/

const { createList, ListNode, getNodeValues } = require('./Javascript/common');
/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function doubleIt(head) {
  let actual = head;
  let qty = ''; 
  while (actual) {
    qty += actual.val;
    actual = actual.next;
  }
  actual = head;

  const double = (parseInt(qty) * 2).toString();

  for (let i = 0; i < double.length; i++) {
    const val = parseInt(double[i]);
    actual.val = parseInt(val);
    if (actual.next) {
      actual = actual.next;
      // if we're already over skip this
    } else if (i + 1 !== double.length) {
      const n = new ListNode(parseInt(double[i + 1]));
      // skip next iteration 
      i++;
      actual.next = n;
      actual = actual.next;
    }
  }

  return head;
}

const cases = [
  // [1,8,9],
  [9,9,9]
];

cases.forEach(c => {
  const list = createList(c);
  const res = doubleIt(list);
  console.log(getNodeValues(res));
})
