/* 187. Repeated DNA Sequences
Medium
Topics
Companies
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
 

Constraints:

1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'.

https://leetcode.com/problems/repeated-dna-sequences/
*/

/**
 * @param {string} s
 * @return {string[]}
 */

new Set().forEach

function findRepeatedDnaSequences(s) {
  const cache = {};

  const repsSet = new Set();
  for (let i = 0; i < s.length - 9; i++) {
      const subs = s.slice(i, i + 10);
      if (!cache[subs]) {
          cache[subs] = 1;
      } else {
          repsSet.add(subs);
      }
  }

  const arr = [];
  repsSet.forEach(v => arr.push(v));

  return arr;
}

const cases = ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', 'AAAAAAAAAAAAA'];

cases.forEach((c) => {
  console.log(findRepeatedDnaSequences(c));
});
