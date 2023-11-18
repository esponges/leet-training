/* 1915. Number of Wonderful Substrings
Medium
935
60
Companies
A wonderful string is a string where at most one letter appears an odd number of times.

For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

FER check the example in leetcode since the explanations are 
underlined and here you cannot appreciate that https://leetcode.com/problems/number-of-wonderful-substrings/

Input: word = "aba"
Output: 4
Explanation: The four wonderful substrings are underlined below:
- "a_ba" -> "a"
- "a_b_a" -> "a" (a and b are both odd, thus odd > 1)
- "a_b_a_" -> "aba"
- "ab_a" -> "b"
- "ab_a_:" -> "b" (b and a are both odd, thus odd > 1)
- "aba_" -> "a"
Example 2:

Input: word = "aabb"
Output: 9
Explanation: The nine wonderful substrings are underlined below:
- "a_abb" -> "a"
- "a_a_bb" -> "aa"
- "a_a_b_b" -> "aab"
- "a_a_b_b_" -> "aabb"
- "aa_bb" -> "a"
- "aa_b_b" -> none (a and b are both odd, thus odd > 1)
- "aa_b_b_" -> "abb"
- "aab_b" -> "b"
- "aab_b_" -> "bb"
- "aabb_" -> "b"
Example 3:

Input: word = "he"
Output: 2
Explanation: The two wonderful substrings are underlined below:
- "h_e" -> "h" 
- "h_e_" -> "h" (h and e are both odd, thus odd > 1) 
- "he_" -> "e"
 

Constraints:

1 <= word.length <= 105
word consists of lowercase English letters from 'a' to 'j'. */

/**
 * @param {string} word
 * @returns {number}
 */
// base cases pased, but TLE ...
function wonderfulSubstrings (word) {
  let left = 0, right = left;

  function isWonderful (s) {
    const letters = {};
    
    for (let i = 0; i < s.length; i++) {
      const actual = s[i];
      
      // doesnt exist add it
      if (letters[actual] === undefined) {
        letters[actual] = 1;
        // increase odd count
      } else {
        letters[actual] = letters[actual] + 1;
      }
    }
    
    let oddCount = 0;
    let res = true;
    Object.values(letters).forEach(val => {
      if (val % 2 !== 0) {
        oddCount++;
        if (oddCount > 1) {
          res = false;
          // break for each
          return false;
        };
      }
    });

    return res; 
  }

  let wonderfulCount = 0;
  while (left < word.length) {
    const actualString = word.slice(left, right + 1);

    if (right < word.length - 1) {
      right++;
    } else {
      left++;
      right = left;
    }
    if (actualString.length === 1) wonderfulCount ++;
    else if (isWonderful(actualString)) wonderfulCount++;
  }

  return wonderfulCount;
}

const cases = [
  "aba",
  "aabb",
  "he"
];

cases.forEach(c => {
  console.log(wonderfulSubstrings(c));
})
