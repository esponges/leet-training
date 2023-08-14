/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class AddTwoNumbers  {
  constructor(){}

  add(l1, l2) {
    const reversedL1 = [];

    for (let i = l1.length - 1; i !== -1; i--) {
      const actual = l1[i];
      reversedL1.push(actual);
    }
    const reversedL1num = reversedL1.join('');

    const reversedL2 = [];

    for (let i = l2.length - 1; i !== -1; i--) {
      const actual = l2[i];
      reversedL2.push(actual);
    }

    const reversedL2num = reversedL2.join('');

    const sum = [reversedL1num, reversedL2num].reduce((acc, actual) => {
      return parseInt(acc) + parseInt(actual);
    }, 0);
    const splitSum = sum.toString().split('');

    const reversedSum = [];
    for (let i = splitSum.length - 1; i > -1; i--) {
      const actual = parseInt(splitSum[i]);
      reversedSum.push(actual);
    }

    return reversedSum;
  }
}

const add = new AddTwoNumbers();

const ex1Args = [[2,4,3], [5,6,4]];
const ex2Args = [[9,9,9,9,9,9,9], [9,9,9,9]];
const cases = [ex1Args, ex2Args];

cases.forEach((c) => {
  console.log(add.add(c[0], c[1]));
})
