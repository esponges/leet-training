/* Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

 

Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2] 

Some Extra help from comments to understand better this problem

Any number that is less than x has to be before x, and maintain the relative order with thoese that are less than x but already before x.
e.g. [3,4,1,2], target = 4 -> [3,1,2,4], so the order of [3,1,2] is maintained.
Any number that is greater than x but already before x will still be before x, but all of them come after those that are less than x and at the same time maintain their relative order.
e.g. [3,6,5,4,1,2] target = 4 -> [3,1,2,6,5,4]
Any number that is greater than x and after x will only need to maintain their relative order
e.g. [3,6,5,4,8,1,7,2] target = 4 -> [3,1,2,6,5,4,8,7]

*/

const { ListNode, createList, getNodeValues } = require('./common');

/**
 * @param {ListNode[]} list
 * @param {number} target
 */
function partition (list, target) {
  const fake = new ListNode(-1);
  fake.next = list;
  let current = fake;

  const smaller = new ListNode(-1);
  let smallerCurrent = smaller;

  while(current !== null) {
    const nextCurrent = current.next;
    const nextVal = nextCurrent.val;
    console.log(nextVal);
    if (nextVal < target) {
      // push new smaller
      smallerCurrent.next = new ListNode(nextVal);
      // and move pointer 
      smallerCurrent = smallerCurrent.next;

      // skip next value to delete val;
      current.next = current.next.next;
      current = current.next;
    } else {
      // keep value
      current = current.next;
    }
  }

  console.log('fake', getNodeValues(fake));
  console.log('smaller', getNodeValues(smaller));
  console.log('smallerCurrent', smallerCurrent);

  // merge both lists
  // don't remember to remove the first indexes
  while (smallerCurrent !== null) {
    if (smallerCurrent.next === null) {
      smallerCurrent.next = fake.next;
      break;
    }
    else smallerCurrent = smallerCurrent.next;
  }

  // return joined lists without fake val
  return smaller.next
}

const cases = [
  [[3,6,5,4,8,1,7,2], 4], 
];

cases.forEach(c => {
  const list = createList(c[0]);

  console.log(partition(list, c[1]));
})
