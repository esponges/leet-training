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
      console.log('next is duplicated. Current: ', current.val, 'Next: ', current.next.val);
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
  [1, 1, 2],
];

cases.forEach((c) => {
  let head = new ListNode(c[0]);
  let current = head;
  for (let i = 1; i < c.length; i++) {
    current.next = new ListNode(c[i]);
    current = current.next;
  }
  console.log(deleteDuplicates(head));
});
