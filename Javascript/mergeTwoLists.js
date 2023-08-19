// import { ListNode, createList } from "./common.js";
const common = require('./common');

/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const listCombined = [];

  let current1 = list1;
  while(current1) {
    listCombined.push(current1.val);
    current1 = current1.next;
  }

  let current2 = list2;
  while(current2) {
    listCombined.push(current2.val);
    current2 = current2.next;
  }

  const orderedList = listCombined.sort();
  const mergedList = new common.ListNode(orderedList[0]);
  let currentMergedList = mergedList;
  // loop ordered list to create a new list 
  for (let i = 1; i < orderedList.length; i++) {
    const newNode = new common.ListNode(orderedList[i]);
    currentMergedList.next = newNode;
    currentMergedList = currentMergedList.next;
  }

  return mergedList;
};

const cases = [
  [[1,2,4], [1, 3, 4]],
  // [[], []],
  // [[], [0]]
];

cases.forEach((c) => {
  const list1 = common.createList(c[0]);
  const list2 = common.createList(c[1]);

  console.log(mergeTwoLists(list1, list2));
}) 
