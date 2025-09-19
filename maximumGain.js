/* 
1717. Maximum Score From Removing Substrings
Medium
Topics
Companies
Hint
You are given a string s and two integers x and y. You can perform two types of operations any number of times.

Remove substring "ab" and gain x points.
For example, when removing "ab" from "cabxbae" it becomes "cxbae".
Remove substring "ba" and gain y points.
For example, when removing "ba" from "cabxbae" it becomes "cabxe".
Return the maximum points you can gain after applying the above operations on s.

 

Example 1:

Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
Example 2:

Input: s = "aabbaaxybbaabb", x = 5, y = 4
Output: 20
 

Constraints:

1 <= s.length <= 105
1 <= x, y <= 104
s consists of lowercase English letters.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
14.7K
Submissions
31.3K
Acceptance Rate
46.9%

https://leetcode.com/problems/maximum-score-from-removing-substrings/description/
*/

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function maximumGain(s, x, y) {
  // X => "ab" Y = "ba"
  const max = x > y ? 'ab' : 'ba';
  const min = max === 'ab' ? 'ba' : 'ab';
  const maxSum = x > y ? x : y;
  const minSum = maxSum === x ? y : x;

  let memo = null;
  let newS = s;
  let count = 0;
  let done = false;
  while (!done) {
    for (let i = newS.length - 1; i >= 0; i--) {
      if (i === 0) {
        if (!memo) {
          done = true;
          break;
        }
        newS = memo;
        memo = null;
        count += minSum;
      }

      const actual = s[i];
      const next = s[i - 1];
      const comb = `${next}${actual}`;

      if (comb === max) {
        newS = newS.substring(0, i - 1) + newS.substring(i + 1);
        count += maxSum;
        memo = null;
        break;
      } else if (comb === min) {
        memo = newS.substring(0, i - 1) + newS.substring(i + 1);
      }
    }
  }

  return count;
}

const cases = [
  ['cdbcbbaaabab', 4, 5],
  // ['aabbaaxybbaabb', 5, 4],
];

cases.forEach((c) => {
  console.log(maximumGain(c[0], c[1], c[2]));
});
