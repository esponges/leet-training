/* Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 */

const { ListNode, getNodeValues } = require('./common');

// todo: handle this case [1,0,1]

/**
 * @param {ListNode} head
 * @returns {boolean}
 */
function isListPalindrome(head) {
  const vals = [];
  let current = head;

  // single elements are considered palindromes
  if (!head.next) return true;

  while (current) {
    vals.push(current.val);
    current = current.next;
  }

  // todo: apparently not true -> this is a palindrome too [1, 0 , 1]
  // not divisible by two, can't be palindrome
  if (vals.length % 2 !== 0) return false;

  // get division number
  const halfway = (vals.length - 1) / 2 + 1;
  const firstHalf = vals.slice(0, halfway);
  const reversedFirst = [];
  for (let i = firstHalf.length; i > 0; i--) {
    reversedFirst.push(firstHalf[i - 1]);
  }

  const secondHalf = vals.slice(halfway);

  return reversedFirst.join('') === secondHalf.join('');
}

/**
 *
 * @param {number[]} els
 */
function makeList(els) {
  const head = new ListNode(els[0]);
  let pointer = head;

  for (let i = 1; i < els.length; i++) {
    const newNode = new ListNode(els[i]);
    // assign new node to next value
    pointer.next = newNode;
    // move pointer
    pointer = pointer.next;
  }

  return head;
}

const cases = [
  [1, 2, 2, 1],
  [1, 2]
];

cases.forEach((c) => {
  const list = makeList(c);
  // console.log(getNodeValues(list));

  // console.log('list', list);
  console.log(isListPalindrome(list));
});
