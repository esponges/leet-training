/* 1433. Check If a String Can Break Another String
Medium
719
135
Companies
Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

 

Example 1:

Input: s1 = "abc", s2 = "xya"
Output: true
Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".
Example 2:

Input: s1 = "abe", s2 = "acd"
Output: false 
Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.
Example 3:

Input: s1 = "leetcodee", s2 = "interview"
Output: true
 

Constraints:

s1.length == n
s2.length == n
1 <= n <= 10^5 */
/**
 * @param {number[]} s1
 * @param {number[]} s2
 * @returns {boolean}
 */
// ACCEPTED: +90% runtime/memory wohoo
function checkIfCanBreak(s1, s2) {
  const sortedS1 = s1.split('').sort();
  const sortedS2 = s2.split('').sort();

  /**
   * @param {number[]} array1
   * @param {number[]} array2
   * @returns {boolean}
   */
  function canBreak(array1, array2) {
    // get the smallest array
    const iterations = array1.length > array2.length ? array2 : array1;
    for (let i = 0; i < iterations.length; i++) {
      if (array1[i] >= array2[i]) {
        continue;
      } else return false;
    }
    return true;
  }

  return canBreak(sortedS1, sortedS2) || canBreak(sortedS2, sortedS1);
}

const cases = [
  // ['abc', 'xya'],
  // ['abe', 'acd'],
  ['leetcode', 'interview'],
];

cases.forEach((c) => {
  console.log(checkIfCanBreak(c[0], c[1]));
});
