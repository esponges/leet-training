/* 
6. Zigzag Conversion
Medium
Topics
Companies
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.4M
Submissions
2.9M
Acceptance Rate
49.0%

https://leetcode.com/problems/zigzag-conversion/description/
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// PAYPALISHIRING
// P---A---H---N-
// -A-P-L-S-I-I-G
// --Y---I---R---

// A
// B

var convert = function (s, numRows) {
  if (s.length == 1 || numRows == 1) return s;
  let rows = new Array(numRows).fill(null).map((el) => []);

  if (numRows == 2) {
    for (let i = 0; i < s.length; i++) {
      if (i % 2 == 0) rows[0].push(s[i]);
      else rows[1].push(s[i]);
    }
  } else {
    let dir = 'D';
    let num = 0;
    let idx = 0;
    for (letter of s) {
      rows[num][idx] = letter;
      if (dir == 'D') {
        if (num == numRows - 1) {
          dir = 'U';
          num--;
          idx++;
        } else {
          num++;
        }
      } else {
        if (num == 1) {
          dir = 'D';
        }
        num--;
        idx++;
      }
    }
  }
  console.log({ rows });

  return rows.reduce((acc, row) => acc + row.join(''), '');
};

cases = [
  // ['PAYPALISHIRING', 3],
  // ['PAYPALISHIRING', 4],
  // ['A', 1],
  // ["AB", 1],
  ["AB", 2],
  // ["ABC", 1],
  // ["ABC", 2],
  // ["ABC", 3],
  // ["ABC", 4],
  // ["ABC", 5],
  // ["ABC", 6],
  // ["ABC", 7],
  // ["ABC", 8],
  // ["ABC", 9],
];

cases.forEach((c) => console.log(convert(c[0], c[1])));
