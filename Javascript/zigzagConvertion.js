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
  constructor() {}

  /**
   *
   * @param {Array|undefined} prev
   * @param {number} rowCount
   * @param {number|string} val
   * @returns
   */
  addToZigZag(prev = [], rowCount, val) {
    const newVal = [...prev[rowCount], val];

    return newVal;
  }

  // todo: overkill --- see simple solution
  /**
   * @param {string} s
   * @param {number} numRows
   * @returns {string}
   */
  convert(s, numRows) {
    const zigzag = [];
    let col = 0;
    let rowCount = 0;
    let pushCount = 0;
    let zigColPushIdx = numRows - 2; // 1 for starting cols at 0 and 1 for skipping last row

    while (pushCount <= s.length) {
      // while (pushCount <= 3) {
      console.log('while', pushCount, 'rowCount', rowCount);
      // the residual will be always 0 when col should be full
      const actual = s[pushCount];
      if (col % (numRows - 1) === 0 || col === 0) {
        zigzag[rowCount] = [...(zigzag[rowCount] || []), actual];
        // zigzag[rowCount] = this.addToZigZag(zigzag, rowCount, actual);
        pushCount++;
      } else {
        // todo: handle how should be the push or not cases
        if (
          rowCount !== 0 /* first */ &&
          rowCount !== numRows - 1 /* last */ &&
          rowCount === zigColPushIdx
        ) {
          // add flag to know which row to add number
          zigzag[rowCount] = [...(zigzag[rowCount] || []), actual];
          pushCount++;
          zigColPushIdx--; // offset one for next col push
        } else {
          // push 0
          zigzag[rowCount] = [zigzag[rowCount] || [], 0];
          pushCount++;

          // restart count when reaching last row and col with horizontal pattern;
          if (rowCount === numRows - 2 && col + 1 === numRows - 2)
            zigColPushIdx = numRows - 2;
        }
      }

      // updateRowCountAccordingly
      if (rowCount !== numRows - 1) {
        console.log('ins rowcount');
        rowCount++;
      } else {
        console.log('next row');
        // col is full, move to next and restart rowCount;
        col++;
        rowCount = 0;
      }
    }

    zigzag.forEach((row) => console.log(row));

    return zigzag;
  }

  convertIdeal(s, numRows) {
    let res = [];
    let level = 0;
    let up = true;
    for (let i = 0; i < s.length; i++) {
      // first time we want to push unexistant array
      if (!res[level]) res[level] = [];
      // push regardless, the level will be set next
      res[level].push(s[i]);

      // up is the offset, and we make sure that we
      // will always push to the three level when up === true
      // and only push to the desired locations when !up
      level = up ? level + 1 : level - 1;

      if (level + 1 == numRows) up = false;
      else if (level == 0) up = true;
    }
    let result = '';
    for (let i of res) {
      result += i.join('');
    }
    return result;
  }
}

const cases = [
  // ['PAYPALISHIRING', 3],
  ['PAYPALISHIRING', 4],
];

const zigzag = new ZigzagConvertion();

cases.forEach((c) => console.log(zigzag.convert(c[0], c[1])));
