/* 
165. Compare Version Numbers
Medium
Topics
Companies
Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:

If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.
 

Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
Example 2:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".
Example 3:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
 

Constraints:

1 <= version1.length, version2.length <= 500
version1 and version2 only contain digits and '.'.
version1 and version2 are valid version numbers.
All the given revisions in version1 and version2 can be stored in a 32-bit integer.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
483.7K
Submissions
1.2M
Acceptance Rate
40.6%

https://leetcode.com/problems/compare-version-numbers/
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
  const v1 = [];
  const v2 = [];
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < Math.max(version1.length, version2.length); i++) {
    const actual1 = version1[i];
    const actual2 = version2[i];
    if (actual1 !== '.') {
      if (actual1 && (actual1 === '0' && version1[i+1] === '.' || actual1 !== '0')) {
        v1[d1] ? v1[d1] = v1[d1] + actual1 : v1[d1] = actual1;
      }
    } else {
      d1++;
    }
    if (actual2 !== '.') {
      if (actual2 && (actual2 === '0' && version2[i+1] === '.' || actual2 !== '0')) {
        v2[d2] ? v2[d2] = v2[d2] + actual2 : v2[d2] = actual2;
      }
    } else {
      d2++;
    }
  }

  for (let i = 0; i < v1.length; i++) {
    const actual1 = parseInt(v1[i]);
    const actual2 = parseInt(v2[i]);

    // handle last revision where one is 0 and other doesn't exists (0 implicit)
    if (!actual1 && !actual2) return;

    if (actual1 < actual2) return -1;
    if (actual1 > actual2) return 1;
  }

  return 0
}

const cases = [
  ["1.01", "1.001"],
  ["1.0", "1.0.0"],
  ["0.1", "1.1"]
];

cases.forEach(c => {
  console.log(compareVersion(c[0], c[1]));
})
