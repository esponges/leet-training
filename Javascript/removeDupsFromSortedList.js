/* 
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3] */

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

class ListNode {
  next = null;
  // this.val = val === undefined ? 0 : val;
  // this.next = next === undefined ? null : next;
  constructor(val) {
    this.val = val === undefined ? 0 : val;
  }
}

function deleteDuplicates(head) {
  // console.log(head);
  let current = head;
  // if head and current head next value is not null
  while (current !== null && current.next !== null) {
    // if current head value is equal to next
    if (current.val === current.next.val) {
      console.log(
        'next is duplicated. Current: ',
        current.val,
        'Next: ',
        current.next.val
      );
      current.next = current.next.next; // store current.next.next value to current.next so it will remove current.next value in linkedlist
    } else {
      // if current head value is not equal to next then move forward
      current = current.next;
    }
  }

  return head;
}

cases = [
  [1, 1, 2, 3, 3],
  // [1, 1, 2],
];

cases.forEach((c) => {
  let head = new ListNode(c[0]);
  let current = head;
  for (let i = 1; i < c.length; i++) {
    current.next = new ListNode(c[i]);
    current = current.next;
  }
  // console.log(head.next.next.next);

  let curr = head;
  while (curr) {
    // console.log('current value', curr.val);
    // console.log('next val', curr.next);
    curr = curr.next;
  }
  // console.log(deleteDuplicates(head));
});

// variant

/* Given the head of a sorted linked list, delete ALL nodes that have duplicate numbers, leaving only distinct numbers from the original list. 
Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order. */

cases2 = [
  [1, 2, 3, 3, 4, 4, 5],
  [1,1,1,2,3]
];

function getListVals(list) {
  const vals = [];
  let current = list;

  while (current) {
    vals.push(list.val);
    current = current.next;
  }
}

function deleteDuplicates(head) {
  const fakeInitialNode = new ListNode(-1);
  fakeInitialNode.next = head;

  let current = fakeInitialNode;

  while (current.next && current.next.next) {
    const nextVal = current.next.val;
    const nextNextVal = current.next.next.val;

    if (nextVal === nextNextVal) {
      const duplicated = nextVal;

      while (current.next && current.next.val === duplicated) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return fakeInitialNode.next;
}

cases2.forEach((c) => {
  let head = new ListNode(c[0]);
  let current = head;

  for (let i = 1; i < c.length; i++) {
    current.next = new ListNode(c[i]);
    current = current.next;
  }
});
