/* Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5] */

const { ListNode, createList, getNodeValues } = require('./common');

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @returns {ListNode}
 */
// acepted: good runtime - bad memory
// todo: figure out how to skip between elements during 
// the while loop and adding them before right side is reached
var reverseBetween = function (head, left, right) {
  let current = head;

  const betweenNums = [];
  const leftNums = [];
  const rightNums = [];

  let count = 0;
  while (current) {
    count++;
    const actual = current.val;
    if (count < left) {
      leftNums.push(actual);
    } else if (count > right) {
      rightNums.push(actual);
    } else {
      betweenNums.push(actual);
    }
    current = current.next;
  }
  betweenNums.reverse();

  const fake = new ListNode(-1);
  let fakeCurrent = fake;

  const newHead = [...leftNums, ...betweenNums, ...rightNums];
  newHead.forEach(el => {
    const newNode = new ListNode(el);
    fakeCurrent.next = newNode;
    fakeCurrent = fakeCurrent.next;
  });


  return fake.next;
};

const cases = [
  [[1, 2, 3, 4, 5], 2, 4],
  [[5], 1],
  [[9,8,7,6,5,4,3,2,1,0], 1, 10]
];

cases.forEach((c) => {
  const list = createList(c[0]);

  console.log(reverseBetween(list, c[1], c[2]));
});
