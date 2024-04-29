/* 
Code
Testcase
Testcase
Test Result
2522. Partition String Into Substrings With Values at Most K
Medium
Topics
Companies
You are given a string s consisting of digits from 1 to 9 and an integer k.

A partition of a string s is called good if:

Each digit of s is part of exactly one substring.
The value of each substring is less than or equal to k.
Return the minimum number of substrings in a good partition of s. If no good partition of s exists, return -1.

Note that:

The value of a string is its result when interpreted as an integer. For example, the value of "123" is 123 and the value of "1" is 1.
A substring is a contiguous sequence of characters within a string.
 

Example 1:

Input: s = "165462", k = 60
Output: 4
Explanation: We can partition the string into substrings "16", "54", "6", and "2". Each substring has a value less than or equal to k = 60.
It can be shown that we cannot partition the string into less than 4 substrings.
Example 2:

Input: s = "238182", k = 5
Output: -1
Explanation: There is no good partition for this string.
 

Constraints:

1 <= s.length <= 105
s[i] is a digit from '1' to '9'.
1 <= k <= 109

https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/
*/

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
function minimumPartition(s, k) {
  let rest = s;
  let good = 0;
  let subs = [];
  let debug = 0;
  const chunk = k.toString().split('').length;

  while (rest && rest.length > 0 && debug <= 10) {
    // 1 digit k so all the substr should be smaller than k otherwise it's -1
    let actual = rest.slice(0, chunk);
    if ((chunk === 1 && parseInt(actual) < k) || chunk > 1) {
      // good
      if (parseInt(actual) < k) {
        rest = rest.slice(actual.length);
        subs.push(actual); // debug - remove
        good++;
        continue;
      }
  
      // won't fit, try do for -1 digit
      actual = actual.slice(0, actual.length - 1);
      subs.push(actual); // debug - remove
      rest = rest.slice(actual.length);
      good++;
    } else {
      return -1;
    }
    
    debug++;
  }
  console.log({ debug, good });

  return good;
} 

const cases = [
  ["165462", 60],
  ["238182", 5]
];

cases.forEach(c => {
  console.log(minimumPartition(c[0], c[1]));
})
