/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz */

const { ListNode, getNodeValues } = require("./common");

cases = [
  // [[1, 2, 3, 4, 5], 2],
  // [[1], 1],
  [[1, 2], 1]
];

/**
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode} 
 */
function remove9thNode (head, n) {
  let count = 0;
  let current = head;

  while(current) {
    // console.log('current', current);
    console.log(count, n);
    // remove next node!
    if (count === n - 1) {
      console.log('current', current);
      console.log('head', head);
      if (current.next) {
        console.log('assign nextnext');
        current.next = current.next.next;
      }
    } else {
      // console.log('go next');
      current = current.next;
    }
    count++;
  }
  
  // console.log('current', getNodeValues(current));
  // console.log('head', getNodeValues(head));
  return head;
}

// ideal solution
var removeNthFromEnd = function(head, n) {
  let fast = head, slow = head
  console.log(fast, slow);
  for (let i = 0; i < n; i++) fast = fast.next
  if (!fast) return head.next
  while (fast.next) fast = fast.next, slow = slow.next
  slow.next = slow.next.next
  return head
};

/**
 * @param {number[]} els 
 * @returns {NodeList}
 */
function createList(els) {
  const head = new ListNode(els[0]);
  let current = head;

  for (let i = 1; i < els.length; i++) {
    const newNode = new ListNode(els[i]);
    current.next = newNode;
    current = current.next;
  }

  return head;
}

cases.forEach((c) => {
  const list = createList(c[0])
  console.log(getNodeValues(list));

  console.log(removeNthFromEnd(list));
  // const res = remove9thNode(list, c[1]);
});
