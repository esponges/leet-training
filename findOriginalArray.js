/* 
2007. Find Original Array From Doubled Array
Medium
Topics
Companies
Hint
An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

 

Example 1:

Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].
Example 2:

Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.
Example 3:

Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.
 

Constraints:

1 <= changed.length <= 105
0 <= changed[i] <= 105
Seen this question in a real interview before?
1/5
Yes
No
Accepted
136.6K
Submissions
337.1K
Acceptance Rate
40.5%

https://leetcode.com/problems/find-original-array-from-doubled-array/
*/

/**
 * @param {number[]} changed
 * @return {number[]}
 */
function shuffle(changed, actual, used, opts) {
  if (actual.length === changed.length / 2) {
    console.log('push actual:', actual);
    opts.push([...actual]);
    return;
  }

  for (let i = 0; i < changed.length; i++) {
    if (!used.has(i)) {
      used.add(i);
      actual.push(changed[i]);
      shuffle(changed, actual, used, opts);
      used.delete(i);
      actual.pop();
    }
  }
}
var findOriginalArray = function (changed) {
  const used = new Set();
  const opts = [];

  shuffle(changed, [], used, opts);

  console.log({ opts });
};

const cases = [
  [6, 3, 0, 1],
  // [1,3,4,2,6,8]
];

cases.forEach((c) => console.log(findOriginalArray(c)));
