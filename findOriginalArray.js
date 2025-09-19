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
// wrong initial approach
function shuffle(changed, actual, used, opts) {
  if (actual.length === changed.length / 2) {
    // don't pass actual by reference since it will be mutated in the loop
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

var findOriginalArraySortedNoBacktrack = function(changed) {
    
  const n = changed.length
  if(n%2 === 1) return []
  
  let original = []
  let map = new Map()
  
  // [1, 3, 4, 2, 6, 8]
  // place the possible halves at the right side from its doubles
  changed.sort((a,b) => {
      return a-b
  })
  // [8, 6, 4, 3, 2, 1]
  
  for(let ele of changed) {
      const half = ele/2
      if(
        // check if a prev halved value is found
        map.has(half) 
        // and occurrences have not been allocated to other `ele`s 
        && map.get(half) > 0
      ) {
          original.push(half)
          // decrease by one to mark one `ele` occurrence to be used
          map.set(half, map.get(half)-1)
      } else {
          map.set(
            ele, map.has(ele) 
            // if first time just increase by one
            ? map.get(ele)+1
            // if already seen but had 0 available just increase
            : 1
          )
      }
  }
  // Map -> { 4: 1, 3: 1, 2: 1, 1.5: 1, 1: 1, 0.5: 1} all keys had one occurrence
  // 8/2=4, 6/2=3, 4/2=2, 3/2=1.5, 2/2=1, 1/2=0.5 
  // Map -> { _4_: 0, _3_: 0, 2: 1, 1.5: 1, _1_: 0, 0.5: 1}
  // original [4, 3, 1]
  
  if(original.length !== n/2) return []
  
  return original
};


cases.forEach((c) => console.log(findOriginalArray(c)));
