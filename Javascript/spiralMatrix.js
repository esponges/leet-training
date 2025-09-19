/* 2326. Spiral Matrix IV
677
Medium
25
Companies
You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

 

Example 1:


Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
Example 2:


Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1. 

Constraints:

1 <= m, n <= 105
1 <= m * n <= 105
The number of nodes in the list is in the range [1, m * n].
0 <= Node.val <= 1000
*/

const { ListNode, createList, getNodeValues } = require("./common");
/**
 * 
 * @param {number} m 
 * @param {number} n 
 * @param {ListNode} head 
 */
var spiralMatrix = function(m, n, head) {
  let current = head;

  let row = 0;
  let col = 0;
  let dir = 'right';
  const matrix = new Array(m).fill().map(() => new Array(n).fill(-1));

  while (current) {
    matrix[row][col] = current.val;

    // increase depending what's next;
    // using the -1 check help us to know if
    // we've already set that number or if we are
    // out of boundaries (for the first 2 loops)
    if (dir === 'right') {
      if (col + 1 === n || matrix[row][col + 1] !== -1) {
        dir = 'down';
        row++;
      } else {
        col++;
      }
    } else if (dir === 'down') {
      if (row + 1 === m || matrix[row + 1][col] !== -1) {
        dir = 'left';
        col--;
      } else {
        row++;
      }
    } else if (dir === 'left') {
      if (col === 0 || matrix[row][col - 1] !== -1) {
        dir = 'up';
        row--;
      } else {
        col--;
      }
    } else if (dir === 'up') {
      if (row === 0 || matrix[row - 1][col] !== -1) {
        dir = 'right';
        col++;
      } else {
        row--;
      }
    }

    // move pointer
    current = current.next;
  }

  return matrix;
};

const cases = [
  [[3,0,2,6,8,1,7,9,4,2,5,5,0], 3, 5]
];

cases.forEach(c => {
  const list = createList(c[0]);
  console.log(getNodeValues(list));
  console.log(spiralMatrix(c[1], c[2], list));
});

// Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
// rowMax colMax dir    row col
// 3      5      right  0   0
// 3      5      1   1   2
// 3      5      1   1   3
// 3      5      1   1   4
// 3      5      1   1   5
// 3      4      2   2   
