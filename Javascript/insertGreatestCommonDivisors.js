/*
  2807. Insert Greatest Common Divisors in Linked List
Medium
335
11
Companies
Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

Example 1:


Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.
Example 2:


Input: head = [7]
Output: [7]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
There are no pairs of adjacent nodes, so we return the initial linked list.
 

Constraints:

The number of nodes in the list is in the range [1, 5000].
1 <= Node.val <= 1000

https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
 */

const { createList, ListNode, getNodeValues } = require("./common");

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
var insertGreatestCommonDivisors = function(head) {
    let current = head;

    if (head.val && !head.next) return head;

    function getGreatestCommonInPair (a, b) {
      const biggest = Math.max(a, b);
      
      for (let i = biggest - 1; i >= 0; i --) {
        const aRemainder = a % i;
        const bRemainder = b % i;

        if (aRemainder === 0 && bRemainder === 0) {
          return i;
        }
      }

      return -1;
    }

    while (current && current.next) {
      const actual = current.val;
      const next = current.next;

      const biggestCommon = getGreatestCommonInPair(actual, next.val);

      current.next = new ListNode(biggestCommon);
      current.next.next = next;
      
      // move pointer to nextNext - ignore the inserted one
      current = current.next.next
    }

    return head;
};

const cases = [
  [18, 6, 10, 3],
  [7]
];

cases.forEach(c => {
  const list = createList(c);
  insertGreatestCommonDivisors(list);
})
