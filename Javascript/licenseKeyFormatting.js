/* 482. License Key Formatting
Easy
1K
1.4K
Companies
You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

 

Example 1:

Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:

Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above. */

/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
function linceseKeyFormatting(s, k) {
  let count = 0;

  let formatted = "";
  for (let i = s.length - 1; i >= 0; i--) {
    const actual = s[i].toUpperCase();
    if (actual !== "-") {
      if (count < k) {
        formatted = actual + formatted;
        count ++;
      } else {
        formatted = "-" + formatted;
        formatted = actual + formatted;
        count = 1;
      }
    }
  }

  return formatted;
}

const cases = [
  ["5F3Z-2e-9-w", 4],
  ["2-5g-3-J", 2],
];

cases.forEach(c => {
  console.log(linceseKeyFormatting(c[0], c[1]));
})
