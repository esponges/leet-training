/* Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters. */

// abbaa
// [a, bb, aa], [abba, a], [a, b, b, a, a],

// aabbaacc
// [a, a, b, b, a, a, c, c]
// [aa, bb, aa, cc]
// [aabbaa, cc]

/**
 * @param {string} s
 * @returns {string[]} 
 */
function partitionedPalindromes (s) {
  const split = s.split('');
  const palindromes = [split];

  const cases = [];
  for (let i = 0; i < s.length; i++) {
    const actual = s[i];
  } 
}

