/* 
1593. Split a String Into the Max Number of Unique Substrings
Medium
Topics
Companies
Hint
Given a string s, return the maximum number of unique substrings that the given string can be split into.

You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are unique.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "ababccc"
Output: 5
Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.
Example 2:

Input: s = "aba"
Output: 2
Explanation: One way to split maximally is ['a', 'ba'].
Example 3:

Input: s = "aa"
Output: 1
Explanation: It is impossible to split the string any further.
 

Constraints:

1 <= s.length <= 16

s contains only lower case English letters.

Seen this question in a real interview before?
1/5
Yes
No
Accepted
31K
Submissions
54.9K
Acceptance Rate
56.4%

https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/
*/

/**
 * @param {string} s
 * @returns {number}
 */
function maxUniqueSplit(s) {
  let idx = 0;
  let offset = 0;

  const map = new Set();
  let last;
  while (idx < s.length ) {
    const actual = s.slice(idx, idx + 1 + offset);

    if (!map.has(actual)) {
      map.add(actual);
      last = idx;
      offset = 0;
      idx = idx + actual.length;
    } else {
      const len = s.length - idx;
      const remaining = s.slice(idx + 1);
      let next = '';

      if (remaining) {
        for (let i = idx + 1; i < len; i++) {
          next += remaining[i];
          const nextStr = actual + next;
  
          // found next non existant comb
          if (!map.has(nextStr)) {
            map.add(nextStr);
            idx = idx + nextStr.length;
            last = idx;
            offset = 0;
          }
        }
      }

      // backtrack to last successful insert
      if (next === '') {
        idx = last;
        offset += 1;
        map.delete(s[idx]);
      }
    } 
  }

  return map.size;
}

const cases = [
  // "ababccc",
  "aba",
  // "aa"
];

cases.forEach(c => {
  console.log(maxUniqueSplit(c));
});
