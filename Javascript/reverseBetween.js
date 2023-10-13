/* Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5] */

const { ListNode, createList } = require("./common");

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @returns {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let current = head;

  const betweenNums = [];

  // while (current.val !== null) {

  // }
};

const cases = [
  [[1,2,3,4,5], 2, 4],
];

cases.forEach(c => {
  const list = createList(c[0]);

  console.log(reverseBetween(c[0], c[1], c[2]));
})
