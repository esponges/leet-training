/* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

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
Output: "A" */

class ZigzagConvertion {
  constructor(){}
  
  /**
   * @param {string} s
   * @param {number} numRows
   * @returns {string}
   */
  convert (s, numRows) {
    // let zigzagRow = false;
    const zigzag = [];
    let col = 0;
    let rowCount = 0;
    let pushCount = 0;

    while (pushCount >= s.length) {
      // todo: add statement to contidionally push depending of col & row
      if (col % numRows - 1 === 0) {
        const actual = s[pushCount];
        zigzag[rowCount] = [...zigzag[rowCount], actual];
        pushCount++;
      } else {
        // todo: handle how should be the push or not cases
      }

      // updateRowCountAccordingly
      if (rowCount !== numRows - 1) {
        rowCount++;
      } else {
        // col is full, move to next and restart rowCount;
        col ++;
        rowCount = 0;
      };      
    }
  }
}
