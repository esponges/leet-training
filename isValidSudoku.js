/* 
36. Valid Sudoku
Medium
Topics
Companies
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:

GO TO URL TO SEE IMAGE

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

https://leetcode.com/problems/valid-sudoku/description/
*/

/**
 * @param {number[][]} board
 * @returns {boolean}
 */
// accepted: great runtime 100~ and 50~ space
function validateSudoku(board) {
  let squares = { 1: {}, 2: {}, 3: {} };
  for (let i = 0; i < 9; i++) {
    // validate rows and cols axis
    let memoY = {};
    let memoZ = {};
    for (let j = 0; j < 9; j++) {
      // each 3 looped lines Y axis restart memo
      if (i % 3 == 0 && j == 0) {
        squares = { 1: {}, 2: {}, 3: {} };
      };

      // validate rows
      const actualZ = board[i][j];
      if (actualZ != '.') {
        if (!memoZ[actualZ]) memoZ[actualZ] = true;
        else return false;

        // val squares
        if (j <= 2) {
          if (!squares[1][actualZ]) squares[1][actualZ] = true;
          else return false;
        } else if (j >= 3 && j <= 5) {
          if (!squares[2][actualZ]) squares[2][actualZ] = true;
          else return false;
        } else {
          // console.log('pop 3');
          if (!squares[3][actualZ]) squares[3][actualZ] = true;
          else return false;
        }
      }

      // validate cols
      const actualY = board[j][i];
      if (!memoY[actualY]) memoY[actualY] = true;
      else if (actualY != '.') return false;
    }
  }

  return true;
}

const cases = [
  [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ],
  [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ],
  [
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ],
];

cases.forEach((c) => {
  console.log(validateSudoku(c));
});
