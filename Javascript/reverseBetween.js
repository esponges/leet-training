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
var reverseBetween = function (head, left, right) {
  // const fake = new ListNode(-1);
  // fake.next = head;
  // let current = fake;
  let current = head;

  const betweenNums = [];
  const leftNums = [];
  const rightNums = [];

  while (current) {
    // const next = current.next.val;
    const actual = current.val;
    // console.log({
    //   next,
    //   left,
    //   right,
    // });
    if (actual < left) {
      leftNums.push(actual);
    } else if (actual > right) {
      rightNums.push(actual);
    } else {
      betweenNums.push(actual);
    }

    // if (next >= left && next <= right) {
    //   current.next = current.next.next;
    // }
    current = current.next;

    // if (betweenNums.length > 0) {
    //   betweenNums.sort((a, b) => b - a);
    //   for (let i = 0; i < betweenNums.length; i++) {
    //     current.next = new ListNode(betweenNums[i]);
    //     current = current.next;
    //   }
    //   current.next;
  }

  betweenNums.sort((a,b) => b - a);

  const fake = new ListNode(-1);
  let fakeCurrent = fake;

  const newHead = [...leftNums, ...betweenNums, ...rightNums];
  newHead.forEach(el => {
    const newNode = new ListNode(el);
    fakeCurrent.next = newNode;
    fakeCurrent = fakeCurrent.next;
  });

  // console.log({
  //   leftNums,
  //   betweenNums,
  //   rightNums,
  // });

  return fake.next;
};

const cases = [
  [[1, 2, 3, 4, 5], 2, 4],
  [[5], 1]
];

cases.forEach((c) => {
  const list = createList(c[0]);

  console.log(reverseBetween(list, c[1], c[2]));
});
