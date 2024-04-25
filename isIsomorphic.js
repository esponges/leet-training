/* 205. Isomorphic Strings
Easy
Topics
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isIsomorphic(s, t) {
  const occurS = {};
  const occurT = {};

  for (let i = 0; i < s.length; i++) {
    const actualS = s[i];
    const actualT = t[i];

    if (!occurS[actualS] && !occurT[actualT]) {
      occurS[actualS] = i;
      occurT[actualT] = i;
    } else {
      if (occurS[actualS] !== occurT[actualT]) return false;
      occurS[actualS] = occurS[actualS] + i;
      occurT[actualT] = occurT[actualT] + i;
    }
  }

  console.log(occurS, occurT);

  return true;
}

const cases = [['egg', 'add'], ['foo', 'bar'], ['paper', 'title']];

cases.forEach((c) => {
  console.log(isIsomorphic(c[0], c[1]));
});
