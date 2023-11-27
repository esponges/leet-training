/* 1638. Count Substrings That Differ by One Character
Medium
1.1K
332
Companies
Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t. In other words, find the number of substrings in s that differ from some substring in t by exactly one character.

For example, the underlined substrings in "computer" and "computation" only differ by the 'e'/'a', so this is a valid way.

Return the number of substrings that satisfy the condition above.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aba", t = "baba"
Output: 6
Explanation: The following are the pairs of substrings from s and t that differ by exactly 1 character:
("aba", "baba")
("aba", "baba")
("aba", "baba")
("aba", "baba")
("aba", "baba")
("aba", "baba")
The underlined portions are the substrings that are chosen from s and t.
​​Example 2:
Input: s = "ab", t = "bb"
Output: 3
Explanation: The following are the pairs of substrings from s and t that differ by 1 character:
("ab", "bb")
("ab", "bb")
("ab", "bb")
​​​​The underlined portions are the substrings that are chosen from s and t.
 

Constraints:

1 <= s.length, t.length <= 100
s and t consist of lowercase English letters only.
Accepted
27.4K
Submissions
38.5K
Acceptance Rate
71.2% 

https://leetcode.com/problems/count-substrings-that-differ-by-one-character/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function countSubstrings (s, t) {
  const tSubsStrings = [];

  // get T substrings
  let count = 1;
  let left = 0;
  let right = left + count;
  let debug = 0;
  while (count < t.length) {
    debug++;
    const actual = t.slice(left, right);
    tSubsStrings.push(actual);
    console.log({ actual, left, right, count })

    // move to the right the substring
    if (right < t.length) {
      right++; left++;
    } else {
      count++; left = 0; right = left + count;
    }
    // increase subsstring size and start over
  }

  console.log(tSubsStrings);
}

const cases = [
  ['aba', 'baba']
];

cases.forEach(c => {
  console.log(countSubstrings(c[0], c[1]));
})
